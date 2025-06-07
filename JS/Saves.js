document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('saveButton');
  const saveboard = document.querySelector('.saveboard');
  const slotsContainer = document.querySelector('.slots');
  const saveTemplate = document.querySelector('.save-template');
  const inputEl = saveTemplate.querySelector('.slot-input');
  const btnSaveNew = saveTemplate.querySelector('.btn-save');

  saveButton.addEventListener('click', () => {
    const isVisible = saveboard.style.display === 'block';
    saveboard.style.display = isVisible ? 'none' : 'block';
  });

  btnSaveNew.addEventListener('click', () => {
    const idxForName = getNextSlotIndex();
    const saveName = inputEl.value.trim() || `Simulation#${idxForName}`;
    const params = {};

    document.querySelectorAll('input[type="text"], input[type="color"]').forEach(input => {
      params[input.id] = input.value;
    });

    const idx = idxForName;
    const storageKey = `particleSimSlot${idx}`;
    const saveData = {
      name: saveName,
      params: params,
    };
    localStorage.setItem(storageKey, JSON.stringify(saveData));

    createSlot(idx, saveName, saveData);
    inputEl.value = '';
  });

  function loadAllSlots() {
    slotsContainer.innerHTML = '';
    let idx = 1;
    while (true) {
      const storageKey = `particleSimSlot${idx}`;
      const dataStr = localStorage.getItem(storageKey);
      if (!dataStr) break;
      const data = JSON.parse(dataStr);
      createSlot(idx, data.name, data);
      idx++;
    }
  }

  function createSlot(idx, name, data) {
    const slot = document.createElement('div');
    slot.classList.add('save');
    slot.dataset.slot = idx;

    slot.innerHTML = `
      <p class="slot-name">${name}</p>
      <div class="slot-buttons">
        <button class="btn-load"><img class="load-icon" src="Icons/Load.png"></button>
        <button class="btn-delete"><img class="delete-icon" src="Icons/Delete.png"></button>
      </div>
    `;

    const btnLoad = slot.querySelector('.btn-load');
    const btnDel = slot.querySelector('.btn-delete');
    const storageKey = `particleSimSlot${idx}`;

    btnLoad.addEventListener('click', () => loadSimulation(storageKey));
    btnDel.addEventListener('click', () => {
      localStorage.removeItem(storageKey);
      slot.remove();
    });

    slotsContainer.appendChild(slot);
  }

  function getNextSlotIndex() {
    let idx = 1;
    while (localStorage.getItem(`particleSimSlot${idx}`)) {
      idx++;
    }
    return idx;
  }

function loadSimulation(storageKey) {
  const dataStr = localStorage.getItem(storageKey);
  if (!dataStr) {
    alert('Збереження не знайдено');
    return;
  }
  const data = JSON.parse(dataStr);
  const params = data.params;

  Particles.forEach(type => {
    particles[type] = [];
  });
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Object.entries(params).forEach(([id, value]) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.value = value;
      elem.dispatchEvent(new Event('input', { bubbles: true }));
    }
  });

  document.querySelectorAll('input[type="text"]').forEach(textInput => {
    const container = textInput.parentElement;
    if (!container) return;
    const range = container.querySelector('input[type="range"]');
    if (range && textInput.value !== '') {
      range.value = textInput.value;
      range.dispatchEvent(new Event('input', { bubbles: true }));
      range.dispatchEvent(new Event('mouseup', { bubbles: true }));
    }
  });

  Particles.forEach(type => {
    const countElem = document.getElementById(`${type}Count`);
    if (countElem) handleParticleCountChange(countElem, type);

    const sizeElem = document.getElementById(`${type}Size`);
    if (sizeElem) handleParticleSizeChange(sizeElem, type);

    const accElem = document.getElementById(`${type}Acceleration`);
    if (accElem) updateAcceleration({ target: accElem });

    const colorElem = document.getElementById(`${type}Color`);
    if (colorElem) updateParticleColor(type, colorElem.value);
  });

  Particles.forEach(fromType => {
    const fromNum = fromType.slice(1);
    Particles.forEach(toType => {
      const toNum = toType.slice(1);
      const key = `p${fromNum}to${toNum}`;
      const aFInput = document.getElementById(`aF-P${fromNum}-P${toNum}`);
      const rFInput = document.getElementById(`rF-P${fromNum}-P${toNum}`);
      const aDInput = document.getElementById(`aD-P${fromNum}-P${toNum}`);
      const rDInput = document.getElementById(`rD-P${fromNum}-P${toNum}`);

      if (aFInput) interactions[key].attract = parseFloat(aFInput.value) || 0;
      if (rFInput) interactions[key].repel = parseFloat(rFInput.value) || 0;
      if (aDInput) interactions[key].attractDist = parseFloat(aDInput.value) || 0;
      if (rDInput) interactions[key].repelDist = parseFloat(rDInput.value) || 0;
    });
  });

  updateAllMarkerColors();
  updIntPar();

  restartAnimation();
}

  loadAllSlots();

  const searchInput = document.querySelector('.search');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();

    document.querySelectorAll('.slots .save').forEach(slot => {
      const nameEl = slot.querySelector('.slot-name');
      if (!nameEl) return;
      const slotName = nameEl.textContent.trim().toLowerCase();
      slot.style.display = (query === '' || slotName.startsWith(query)) ? '' : 'none';
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