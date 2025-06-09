const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isPaused = false;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function toggleTabContent(id) {
  const content = document.getElementById(id);
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function getParticlePosition(p) {
  return p.x >= 0 && p.x <= canvas.width * 0.5;
}

function createNewParticle(type, size) {
  return {
    x: Math.random() * (canvas.width * 0.5),
    y: Math.random() * canvas.height,
    radius: size,
    color: initialColors[type],
    vx: 0,
    vy: 0
  };
}

function createParticle(x, y, r, color) {
  return {
    x,
    y,
    radius: r,
    color,
    vx: 0,
    vy: 0
  };
}

function setInitialValues() {
  Particles.forEach(fromType => {
    const fromNum = fromType.slice(1);
    Particles.forEach(toType => {
      const toNum = toType.slice(1);
      const key = `${fromType}to${toType}`;
      const params = interactions[key];

      document.getElementById(`aF-P${fromNum}-P${toNum}`).value = params.attract;
      document.getElementById(`aD-P${fromNum}-P${toNum}`).value = params.attractDist;
      document.getElementById(`rF-P${fromNum}-P${toNum}`).value = params.repel;
      document.getElementById(`rD-P${fromNum}-P${toNum}`).value = params.repelDist;
    });
  });
}

function addBlurEvent(id, callback) {
  const elem = document.getElementById(id);
  if (elem) elem.addEventListener('blur', callback);
}
