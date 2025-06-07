const Particles = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'];

document.addEventListener('DOMContentLoaded', () => {
  const amountContainer = document.querySelector('.particle-amount > div');
  const sizeContainer = document.querySelector('.particle-size > div');
  const accelerationContainer = document.querySelector('.particle-acceleration > div');
  const colorContainer = document.querySelector('.particle-color > div');

  amountContainer.innerHTML = '';
  sizeContainer.innerHTML = '';
  accelerationContainer.innerHTML = '';
  colorContainer.innerHTML = '';

  Particles.forEach(type => {
    const label = type.toUpperCase();

    const amountBlock = document.createElement('div');
    amountBlock.classList.add('particle-block');
    amountBlock.id = `${type}Block`;
    const amountP = document.createElement('p');
    amountP.textContent = `${label}:`;
    const amountRange = document.createElement('input');
    amountRange.type = 'range';
    amountRange.classList.add('amount-range');
    amountRange.min = 0;
    amountRange.max = 2000;
    amountRange.step = 1;
    amountRange.value = 0;
    const amountText = document.createElement('input');
    amountText.type = 'text';
    amountText.id = `${type}Count`;
    amountText.classList.add('inputField');
    amountText.value = 0;
    amountBlock.append(amountP, amountRange, amountText);
    amountContainer.append(amountBlock);

    const sizeBlock = document.createElement('div');
    sizeBlock.classList.add('particle-block');
    sizeBlock.id = `${type}Block`;
    const sizeP = document.createElement('p');
    sizeP.textContent = `${label}:`;
    const sizeRange = document.createElement('input');
    sizeRange.type = 'range';
    sizeRange.classList.add('size-range');
    sizeRange.min = 1;
    sizeRange.max = 4;
    sizeRange.step = 0.1;
    sizeRange.value = 2;
    const sizeText = document.createElement('input');
    sizeText.type = 'text';
    sizeText.id = `${type}Size`;
    sizeText.classList.add('inputField');
    sizeText.value = 2;
    sizeBlock.append(sizeP, sizeRange, sizeText);
    sizeContainer.append(sizeBlock);

    const accelBlock = document.createElement('div');
    accelBlock.classList.add('particle-block');
    accelBlock.id = `${type}Block`;
    const accelP = document.createElement('p');
    accelP.textContent = `${label}:`;
    const accelRange = document.createElement('input');
    accelRange.type = 'range';
    accelRange.classList.add('acceleration-range');
    accelRange.min = 0;
    accelRange.max = 1;
    accelRange.step = 0.01;
    accelRange.value = 0.25;
    const accelText = document.createElement('input');
    accelText.type = 'text';
    accelText.id = `${type}Acceleration`;
    accelText.classList.add('inputField');
    accelText.value = 0.25;
    accelBlock.append(accelP, accelRange, accelText);
    accelerationContainer.append(accelBlock);

    const colorBlock = document.createElement('div');
    colorBlock.classList.add('particle-block');
    colorBlock.id = `${type}Block`;
    const colorP = document.createElement('p');
    colorP.textContent = `${label}:`;
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.id = `${type}Color`;
    colorInput.classList.add('inputField');
    colorInput.value = '#ffffff';
    colorBlock.append(colorP, colorInput);
    colorContainer.append(colorBlock);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const interactionConfigs = [
    {
      selector: '.attraction-force .parameter-grid',
      prefix: 'aF',
      max: 1,
      step: 0.001,
      topLabel: 'TO',
      topLabelId: 'toLabel1'
    },
    {
      selector: '.attraction-distance .parameter-grid',
      prefix: 'aD',
      max: 400,
      step: 1,
      topLabel: 'TO',
      topLabelId: 'toLabel2'
    },
    {
      selector: '.repulsion-force .parameter-grid',
      prefix: 'rF',
      max: 1,
      step: 0.001,
      topLabel: 'FROM',
      topLabelId: 'fromLabel1'
    },
    {
      selector: '.repulsion-distance .parameter-grid',
      prefix: 'rD',
      max: 400,
      step: 1,
      topLabel: 'FROM',
      topLabelId: 'fromLabel2'
    }
  ];

  interactionConfigs.forEach(config => {
    const grid = document.querySelector(config.selector);
    buildInteractionGrid(
      grid,
      config.prefix,
      config.max,
      config.step,
      config.topLabel,
      config.topLabelId
    );
  });
});

function buildInteractionGrid(container, prefix, maxValue, stepValue, topLabel, topLabelId) {
  container.innerHTML = '';

  const n = Particles.length;
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${n + 1}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n + 1}, 1fr)`;

  const cornerCell = document.createElement('div');
  cornerCell.classList.add('grid-cell');
  const cornerP = document.createElement('p');
  cornerP.id = topLabelId;
  cornerP.textContent = topLabel;
  cornerCell.append(cornerP);
  container.append(cornerCell);

  for (let j = 0; j < n; j++) {
    const toType = Particles[j];
    const headerCell = document.createElement('div');
    headerCell.classList.add('grid-cell', `P${toType.slice(1)}`);
    const p = document.createElement('p');
    p.textContent = toType.toUpperCase();
    headerCell.append(p);
    container.append(headerCell);
  }

  for (let i = 0; i < n; i++) {
    const fromType = Particles[i];

    const rowLabelCell = document.createElement('div');
    rowLabelCell.classList.add('grid-cell', `P${fromType.slice(1)}`);
    const rowLabelP = document.createElement('p');
    rowLabelP.textContent = fromType.toUpperCase();
    rowLabelCell.append(rowLabelP);
    container.append(rowLabelCell);

    for (let j = 0; j < n; j++) {
      const toType = Particles[j];

      const cell = document.createElement('div');
      cell.classList.add('grid-cell');

      const inputText = document.createElement('input');
      inputText.type = 'text';
      inputText.id = `${prefix}-P${fromType.slice(1)}-P${toType.slice(1)}`;
      inputText.oninput = () => updIntPar();

      const inputRange = document.createElement('input');
      inputRange.type = 'range';
      inputRange.classList.add(`${prefix.toLowerCase()}-range`);
      inputRange.min = 0;
      inputRange.max = maxValue;
      inputRange.step = stepValue;
      inputRange.value = 0;

      inputRange.addEventListener('input', () => {
        inputText.value = inputRange.value;
        updIntPar();
      });

      inputText.addEventListener('blur', () => {
        let v = parseFloat(inputText.value);
        if (isNaN(v)) v = 0;
        if (v < 0) v = 0;
        if (v > maxValue) v = maxValue;
        inputText.value = v;
        inputRange.value = v;
        updIntPar();
      });

      cell.append(inputText, inputRange);
      container.append(cell);
    }
  }
}