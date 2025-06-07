const particles = {};
const pCount = {};
Particles.forEach(type => {
  particles[type] = [];
  pCount[type] = 0;
});

function handleParticleCountChange(input, type) {
  let value = parseInt(input.value, 10);
  if (isNaN(value) || value < 0) value = 0;
  if (value > 2000) value = 2000;
  pCount[type] = value;
  input.value = value;
  adjustParticleCount(type);
}

function adjustParticleCount(type) {
  const count = pCount[type];
  const arr = particles[type];
  const prevCount = arr.length;

  let color = modifiedColors[type] ||
    getComputedStyle(document.documentElement)
      .getPropertyValue(`--color${type.slice(1)}`)
      .trim();
  let size = parseFloat(document.getElementById(`${type}Size`).value) || 1;

  if (prevCount !== 0) {
    color = arr[0].color;
  }

  if (count > prevCount) {
    for (let i = 0; i < count - prevCount; i++) {
      const existing = prevCount > 0
        ? arr[Math.floor(Math.random() * prevCount)]
        : { x: Math.random() * (canvas.width * 0.5), y: Math.random() * canvas.height };

      if (getParticlePosition(existing)) {
        arr.push(createParticle(existing.x, existing.y, size, color));
      }
    }
  } else {
    arr.length = count;
  }
}

function handleParticleSizeChange(input, type) {
  let size = parseFloat(input.value);
  if (isNaN(size) || size < 1) size = 1;
  if (size > 4) size = 4;
  input.value = size;
  particles[type].forEach(p => {
    if (getParticlePosition(p)) p.radius = size;
  });
}

const pAccelFactor = {};
Particles.forEach(type => {
  pAccelFactor[type] = 0.25;
});

function updateAcceleration(event) {
  const inputField = event.target;
  let value = parseFloat(inputField.value);

  if (isNaN(value) || value < 0) {
    value = 0;
  } else if (value > 1) {
    value = 1;
  }

  const type = inputField.id.replace('Acceleration', '');
  if (Particles.includes(type)) {
    pAccelFactor[type] = value;
  }

  inputField.value = value.toFixed(2);
}

const initialColors = {};
Particles.forEach(type => {
    initialColors[type] = '#ffffff';
});

let modifiedColors = { ...initialColors };

function updateParticleColor(type, color) {
  modifiedColors[type] = color;
  particles[type].forEach(p => {
    if (getParticlePosition(p)) p.color = color;
  });
  const input = document.getElementById(`${type}Color`);
  if (input) input.value = color;
}

Particles.forEach(type => {
  updateParticleColor(type, initialColors[type]);
});

document.addEventListener('DOMContentLoaded', () => {
  const parameterGrids = document.querySelectorAll('.parameter-grid');

  parameterGrids.forEach(grid => {
    const inputs = grid.querySelectorAll('input[type="text"]');
    const ranges = grid.querySelectorAll('input[type="range"]');

    inputs.forEach((input, idx) => {
      const range = ranges[idx];
      if (!range) return;

      const updateInteraction = () => {
        const id = input.id;
        const match = id.match(/(aF|rF|aD|rD)-P(\d+)-P(\d+)/);
        if (!match) return;
        const [_, param, fromNum, toNum] = match;
        const field = param.startsWith('aF') ? 'attract' :
                      param.startsWith('rF') ? 'repel' :
                      param.startsWith('aD') ? 'attractDist' :
                      'repelDist';
        const value = parseFloat(input.value) || 0;
        const maxF = 1, maxD = 400;
        const maxValues = { aF: maxF, rF: maxF, aD: maxD, rD: maxD };
        const fromType = 'p' + fromNum;            
        const toType   = 'p' + toNum;               
        const key      = `${fromType}to${toType}`;   
        interactions[key][field] = Math.min(value, maxValues[param]);
      };

      range.addEventListener('input', e => {
        input.value = e.target.value;
      });

      range.addEventListener('mouseup', () => {
        updateInteraction();
      });

      input.addEventListener('blur', e => {
        let v = parseFloat(e.target.value);
        if (isNaN(v)) v = 0;
        if (v < parseFloat(range.min)) v = parseFloat(range.min);
        if (v > parseFloat(range.max)) v = parseFloat(range.max);
        input.value = v;
        range.value = v;
        updateInteraction();
      });
    });
  });
});

function addUpdateEvents(id, handler) {
  const elem = document.getElementById(id);
  elem.addEventListener('input', handler);
  elem.addEventListener('change', handler);
}

function updIntPar() {
  const clamp = (value, max) => Math.min(value, max);
  const maxF = 1, maxD = 400;
  const params = ["aF", "rF", "aD", "rD"];
  const maxValues = { aF: maxF, rF: maxF, aD: maxD, rD: maxD };

  Particles.forEach(fromType => {
    const fromNum = fromType.slice(1);
    Particles.forEach(toType => {
      const toNum = toType.slice(1);
      params.forEach(param => {
        const id = `${param}-P${fromNum}-P${toNum}`;
        const fromKey = 'p' + fromNum;
        const toKey   = 'p' + toNum;
        const target  = interactions[`${fromKey}to${toKey}`];
        const field = param.startsWith('aF') ? 'attract' :
                      param.startsWith('rF') ? 'repel' :
                      param.startsWith('aD') ? 'attractDist' :
                      'repelDist';

        addBlurEvent(id, () => {
          const raw = document.getElementById(id).value;
          const num = clamp(parseFloat(raw) || 0, maxValues[param]);
          target[field] = num;
        });

        const existing = document.getElementById(id);
        if (existing) {
          const raw0 = existing.value;
          const num0 = clamp(parseFloat(raw0) || 0, maxValues[param]);
          target[field] = num0;
        }
      });
    });
  });
}

function addBlurEvent(id, callback) {
  const elem = document.getElementById(id);
  if (elem) elem.addEventListener('blur', callback);
}