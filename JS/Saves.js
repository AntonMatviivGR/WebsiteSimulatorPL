document.addEventListener('DOMContentLoaded', () => {
  const saveButton    = document.getElementById('saveButton');
  const saveboard     = document.querySelector('.saveboard');
  const slotsContainer= document.querySelector('.slots');
  const saveTemplate  = document.querySelector('.save-template');
  const inputEl       = saveTemplate.querySelector('.slot-input');
  const btnSaveNew    = saveTemplate.querySelector('.btn-save');

  saveButton.addEventListener('click', () => {
    saveboard.style.display = saveboard.style.display === 'block' ? 'none' : 'block';
  });

  btnSaveNew.addEventListener('click', () => {
    const idxForName = getNextSlotIndex();
    const saveName   = inputEl.value.trim() || `Simulation#${idxForName}`;
    const params     = {};
    document.querySelectorAll('input[type="text"], input[type="color"]').forEach(input => {
      params[input.id] = input.value;
    });
    const storageKey = `particleSimSlot${idxForName}`;
    localStorage.setItem(storageKey, JSON.stringify({ name: saveName, params }));
    createSlot(idxForName, saveName, { name: saveName, params, isTemplate: false });
    inputEl.value = '';
  });

  function loadAllSlots() {
    slotsContainer.innerHTML = '';
    TEMPLATES.forEach((tpl, i) => {
      createSlot(`tpl${i}`, tpl.name, tpl);
    });
    Object.keys(localStorage)
      .filter(key => key.startsWith('particleSimSlot'))
      .sort((a, b) => +a.replace('particleSimSlot','') - +b.replace('particleSimSlot',''))
      .forEach(key => {
        const idx  = +key.replace('particleSimSlot','');
        const data = JSON.parse(localStorage.getItem(key));
        createSlot(idx, data.name, { ...data, isTemplate: false });
      });
  }

  function createSlot(idx, name, data) {
    const slot = document.createElement('div');
    slot.classList.add('save');
    slot.dataset.slot = idx;

    const delBtn = data.isTemplate
      ? ''
      : `<button class="btn-delete"><img class="delete-icon" src="Icons/Delete.png"></button>`;

    slot.innerHTML = `
      <p class="slot-name">${name}</p>
      <div class="slot-buttons">
        <button class="btn-load"><img class="load-icon" src="Icons/Load.png"></button>
        ${delBtn}
      </div>
    `;

    const btnLoad = slot.querySelector('.btn-load');
    const btnDel  = slot.querySelector('.btn-delete');
    const storageKey = data.isTemplate ? null : `particleSimSlot${idx}`;

    btnLoad.addEventListener('click', () => {
      if (data.isTemplate)      loadSimulationFromObject(data);
      else                      loadSimulation(storageKey);
    });
    if (btnDel) {
      btnDel.addEventListener('click', () => {
        localStorage.removeItem(storageKey);
        slot.remove();
      });
    }

    slotsContainer.appendChild(slot);
  }

  function getNextSlotIndex() {
    let idx = 1;
    while (localStorage.getItem(`particleSimSlot${idx}`)) idx++;
    return idx;
  }

  function loadSimulation(storageKey) {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return alert('Збереження не знайдено');
    const data = JSON.parse(raw);
    applyParamsAndRestart(data.params);
  }

  function loadSimulationFromObject(templateData) {
    applyParamsAndRestart(templateData.params);
  }

function applyParamsAndRestart(params) {
  Particles.forEach(type => particles[type] = []);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Object.entries(params).forEach(([id, value]) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.value = value;
      elem.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });

  Object.entries(params).forEach(([key, value]) => {
    if (value && typeof value === 'object' &&
        'attract' in value && 'repel' in value &&
        'attractDist' in value && 'repelDist' in value) {

      const match = key.match(/^p(\d+)to(\d+)$/);
      if (!match) return;
      const [, fromNum, toNum] = match;

      [
        ['attract', 'aF'],
        ['repel',   'rF'],
        ['attractDist', 'aD'],
        ['repelDist',   'rD']
      ].forEach(([field, prefix]) => {
        const textId = `${prefix}-P${fromNum}-P${toNum}`;
        const text   = document.getElementById(textId);
        const range  = text ? text.nextElementSibling : null;
        const v      = parseFloat(value[field]) || 0;

        if (text) {
          text.value = v;
          text.dispatchEvent(new Event('blur',  { bubbles: true }));
        }
        if (range && range.tagName === 'INPUT' && range.type === 'range') {
          range.value = v;
          range.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    }
  });

  syncAllSlidersWithTextInputs();
  syncInteractionSlidersWithTextInputs();

  Particles.forEach(type => {
    const c = document.getElementById(`${type}Count`);
    if (c) handleParticleCountChange(c, type);

    const s = document.getElementById(`${type}Size`);
    if (s) handleParticleSizeChange(s, type);

    const a = document.getElementById(`${type}Acceleration`);
    if (a) updateAcceleration({ target: a });

    const col = document.getElementById(`${type}Color`);
    if (col) updateParticleColor(type, col.value);
  });

  Particles.forEach(fromType => {
    const f = fromType.slice(1);
    Particles.forEach(toType => {
      const t = toType.slice(1);
      const key = `p${f}to${t}`;
      ['aF','rF','aD','rD'].forEach(pref => {
        const inp = document.getElementById(`${pref}-P${f}-P${t}`);
        if (inp) {
          const field = pref === 'aF' ? 'attract'
                        : pref === 'rF' ? 'repel'
                        : pref === 'aD' ? 'attractDist'
                        : 'repelDist';
          interactions[key][field] = parseFloat(inp.value) || 0;
        }
      });
    });
  });

  updateAllMarkerColors();
  updIntPar();
  restartAnimation();
}


  loadAllSlots();

  if (TEMPLATES.length > 0) {
    const randIndex = Math.floor(Math.random() * TEMPLATES.length);
    const randomTemplate = TEMPLATES[randIndex];
    applyParamsAndRestart(randomTemplate.params);
  }

  const searchInput = document.querySelector('.search');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.slots .save').forEach(slot => {
      const name = slot.querySelector('.slot-name')?.textContent.toLowerCase() || '';
      slot.style.display = !q || name.startsWith(q) ? '' : 'none';
    });
  });
});

function syncAllSlidersWithTextInputs() {
  ['amount-range', 'size-range', 'acceleration-range'].forEach(className => {
    document.querySelectorAll(`.${className}`).forEach(range => {
      const container = range.parentElement;
      if (!container) return;
      const textInput = container.querySelector('input[type="text"]');
      if (textInput && textInput.value !== '') {
        range.value = textInput.value;
      }
    });
  });
}

function syncInteractionSlidersWithTextInputs() {
  document.querySelectorAll('.parameter-grid input[type="text"]').forEach(inputText => {
    const cell = inputText.parentElement;
    if (!cell) return;
    const inputRange = cell.querySelector('input[type="range"]');
    if (!inputRange) return;
    if (inputText.value !== '') {
      inputRange.value = inputText.value;
    }
  });
}
