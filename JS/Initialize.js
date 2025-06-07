function initializeParticles() {
  Particles.forEach(type => {
    particles[type] = [];

    const size = parseFloat(document.getElementById(`${type}Size`).value) || 1;
    for (let i = 0; i < pCount[type]; i++) {
      const x = Math.random() * (canvas.width * 0.5);
      const y = Math.random() * canvas.height;
      const color = getComputedStyle(document.documentElement)
                        .getPropertyValue(`--color${type.slice(1)}`)
                        .trim();
      particles[type].push(createParticle(x, y, size, color));
    }
  });
}

const interactions = {};
Particles.forEach(fromType => {
  Particles.forEach(toType => {
    interactions[`${fromType}to${toType}`] = {
      attract: 0.0,
      repel: 0.0,
      attractDist: 0,
      repelDist: 0
    };
  });
});

function updateAllMarkerColors() {
  Particles.forEach(type => {
    const input = document.getElementById(`${type}Color`);
    const elements = document.querySelectorAll(`.P${type.slice(1)}`);
    elements.forEach(el => {
      el.style.color = input.value;
    });
  });
}

function setupColorInputListeners() {
  Particles.forEach(type => {
    const input = document.getElementById(`${type}Color`);
    if (!input) return;

    input.addEventListener('input', () => {
      const elements = document.querySelectorAll(`.P${type.slice(1)}`);
      elements.forEach(el => {
        el.style.color = input.value;
      });
    });
  });
}
