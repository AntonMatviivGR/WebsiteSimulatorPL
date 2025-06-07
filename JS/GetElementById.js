document.addEventListener('DOMContentLoaded', () => {
  Particles.forEach(type => {
  const countInput = document.getElementById(`${type}Count`);
  countInput.value = pCount[type];
  countInput.addEventListener('blur', e => handleParticleCountChange(e.target, type));

  const sizeInput = document.getElementById(`${type}Size`);
  sizeInput.value = 2;
  sizeInput.addEventListener('blur', e => handleParticleSizeChange(e.target, type));

  const accInput = document.getElementById(`${type}Acceleration`);
  accInput.addEventListener('blur', e => updateAcceleration({ target: e.target }));

  const colorInput = document.getElementById(`${type}Color`);
  colorInput.value = initialColors[type];
  colorInput.addEventListener('input', e => updateParticleColor(type, e.target.value));
});

const amountRanges = document.querySelectorAll('.amount-range');
amountRanges.forEach((range, i) => {
  const type = Particles[i];
  const input = document.getElementById(`${type}Count`);

  range.addEventListener('input', e => {
    input.value = e.target.value;
    handleParticleCountChange(input, type);
  });

  input.addEventListener('blur', e => {
    let v = parseInt(e.target.value, 10);
    if (isNaN(v) || v < 0) v = 0;
    if (v > 2000) v = 2000;
    range.value = v;
    handleParticleCountChange(input, type);
  });
});

const sizeRanges = document.querySelectorAll('.size-range');
sizeRanges.forEach((range, i) => {
  const type = Particles[i];
  const input = document.getElementById(`${type}Size`);

  range.addEventListener('input', e => {
    input.value = e.target.value;
    handleParticleSizeChange(input, type);
  });

  input.addEventListener('blur', e => {
    let v = parseFloat(e.target.value);
    if (isNaN(v) || v < 1) v = 1;
    if (v > 4) v = 4;
    range.value = v;
    handleParticleSizeChange(input, type);
  });
});

const accelRanges = document.querySelectorAll('.acceleration-range');
accelRanges.forEach((range, i) => {
  const type = Particles[i];
  const input = document.getElementById(`${type}Acceleration`);

  range.addEventListener('input', e => {
    input.value = parseFloat(e.target.value).toFixed(2);
    updateAcceleration({ target: input });
  });

  input.addEventListener('blur', e => {
    let v = parseFloat(e.target.value);
    if (isNaN(v) || v < 0) v = 0;
    if (v > 1) v = 1;
    input.value = v.toFixed(2);
    range.value = v;
    updateAcceleration({ target: input });
  });
});
});