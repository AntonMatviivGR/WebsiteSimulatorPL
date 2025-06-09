const TEMPLATES = [
  {
    name: 'Змійка: частина перша',
    params: {
      p1Count: 200, p2Count: 200, p3Count: 0, p4Count: 0, p5Count: 0, p6Count: 0, p7Count: 0, p8Count: 0,
      p1Size: 2, p1Size: 2, p2Size: 2, p3Size: 2, p4Size: 2, p5Size: 2, p6Size: 2, p7Size: 2, p8Size: 2,
      p1Acceleration: 0.08, p2Acceleration: 0.08, p3Acceleration: 0.25, p4Acceleration: 0.25, p5Acceleration: 0.25, p6Acceleration: 0.25, p7Acceleration: 0.25, p8Acceleration: 0.25, 
      p1Color: '#c832fa', p2Color: '#af4bfa', p3Color: '#ffffff', p4Color: '#ffffff', p5Color: '#ffffff', p6Color: '#ffffff', p7Color: '#ffffff', p8Color: '#ffffff',

      p1to1: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 40 },
      p1to2: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 80 },

      p2to1: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p2to2: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 36 },

    },
    isTemplate: true
  },
  {
    name: 'Змійка: частина друга',
    params: {
      p1Count: 200, p2Count: 200, p3Count: 200, p4Count: 200, p5Count: 0, p6Count: 0, p7Count: 0, p8Count: 0,
      p1Size: 2, p1Size: 2, p2Size: 2, p3Size: 2, p4Size: 2, p5Size: 2, p6Size: 2, p7Size: 2, p8Size: 2,
      p1Acceleration: 0.08, p2Acceleration: 0.08, p3Acceleration: 0.08, p4Acceleration: 0.08, p5Acceleration: 0.25, p6Acceleration: 0.25, p7Acceleration: 0.25, p8Acceleration: 0.25, 
      p1Color: '#c832fa', p2Color: '#af4bfa', p3Color: '#9664fa', p4Color: '#7d7dfa', p5Color: '#ffffff', p6Color: '#ffffff', p7Color: '#ffffff', p8Color: '#ffffff',

      p1to1: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 40 },
      p1to2: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 80 },
      p1to3: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p1to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p2to1: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p2to2: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 36 },
      p2to3: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 70 },
      p2to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p3to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p3to2: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p3to3: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 32 },
      p3to4: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 60 },

      p4to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p4to2: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p4to3: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p4to4: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 28 },

    },
    isTemplate: true
  },
  {
    name: 'Змійка: частина третя',
    params: {
      p1Count: 200, p2Count: 200, p3Count: 200, p4Count: 200, p5Count: 200, p6Count: 200, p7Count: 200, p8Count: 200,
      p1Size: 2, p1Size: 2, p2Size: 2, p3Size: 2, p4Size: 2, p5Size: 2, p6Size: 2, p7Size: 2, p8Size: 2,
      p1Acceleration: 0.08, p2Acceleration: 0.08, p3Acceleration: 0.08, p4Acceleration: 0.08, p5Acceleration: 0.08, p6Acceleration: 0.08, p7Acceleration: 0.08, p8Acceleration: 0.08, 
      p1Color: '#c832fa', p2Color: '#af4bfa', p3Color: '#9664fa', p4Color: '#7d7dfa', p5Color: '#6496fa', p6Color: '#4baffa', p7Color: '#32c8fa', p8Color: '#19fffa',

      p1to1: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 40 },
      p1to2: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 80 },
      p1to3: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p1to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p1to5: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p1to6: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p1to7: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p1to8: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p2to1: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p2to2: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 36 },
      p2to3: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 70 },
      p2to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p2to5: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p2to6: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p2to7: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p2to8: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p3to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p3to2: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p3to3: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 32 },
      p3to4: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 60 },
      p3to5: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p3to6: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p3to7: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p3to8: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p4to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p4to2: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p4to3: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p4to4: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 28 },
      p4to5: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 50 },
      p4to6: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p4to7: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p4to8: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p5to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p5to2: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p5to3: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p5to4: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p5to5: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 24 },
      p5to6: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 40 },
      p5to7: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p5to8: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p6to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p6to2: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p6to3: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p6to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p6to5: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p6to6: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 20 },
      p6to7: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 30 },
      p6to8: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },

      p7to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p7to2: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p7to3: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p7to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p7to5: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p7to6: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p7to7: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 16 },
      p7to8: { attract: 0.0, repel: 0.02, attractDist: 0, repelDist: 20 },

      p8to1: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p8to2: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p8to3: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p8to4: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p8to5: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p8to6: { attract: 0.0, repel: 0.04, attractDist: 0, repelDist: 40 },
      p8to7: { attract: 0.004, repel: 0.04, attractDist: 400, repelDist: 40 },
      p8to8: { attract: 0.1, repel: 0.1, attractDist: 400, repelDist: 12 },

    },
    isTemplate: true
  },
];


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
