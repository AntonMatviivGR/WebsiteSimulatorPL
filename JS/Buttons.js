document.getElementById('langButton').addEventListener('click', function () {
  const isEnglish = this.textContent === 'ENG';
  this.textContent = isEnglish ? 'UKR' : 'ENG';

  const translations = {
    ENG: {
      amountLabel: 'Amount',
      sizeLabel: 'Size',
      accelerationLabel: 'Acceleration',
      colorLabel: 'Color',
      attractionForceLabel: 'Particle Attraction Force',
      toLabel1: 'TO',
      attractionDistanceLabel: 'Particle Attraction Distance',
      toLabel2: 'TO',
      repulsionForceLabel: 'Particle Repulsion Force',
      fromLabel1: 'FROM',
      repulsionDistanceLabel: 'Particle Repulsion Distance',
      fromLabel2: 'FROM'
    },
    UKR: {
      amountLabel: 'Кількість',
      sizeLabel: 'Розмір',
      accelerationLabel: 'Прискорення',
      colorLabel: 'Колір',
      attractionForceLabel: 'Сила притягання',
      toLabel1: 'ДО',
      attractionDistanceLabel: 'Дистанція притягання',
      toLabel2: 'ДО',
      repulsionForceLabel: 'Сила відштовхування',
      fromLabel1: 'ВІД',
      repulsionDistanceLabel: 'Дистанція відштовхування',
      fromLabel2: 'ВІД'
    }
  };

  const lang = isEnglish ? 'UKR' : 'ENG';
  const t = translations[lang];

  for (const id in t) {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  }
});

function toggleRestart() {
  if (isPaused) {
    restartAnimation();
    toggleButtonState();
  }
}

restartButton.addEventListener('click', toggleRestart);

function restartAnimation() {
  if (!isPaused) {
    return;
  }

  Particles.forEach(type => {
    particles[type] = [];
  });

  Particles.forEach(type => {
    initialColors[type] = document.getElementById(`${type}Color`).value;
  });

  initializeParticles();

  Particles.forEach(type => {
    updateParticleColor(type, initialColors[type]);
  });

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Particles.forEach(type => {
    drawParticles(particles[type]);
  });

  if (!isPaused) {
    animate();
  }
}

document.addEventListener('keydown', (e) => {
  if (['R', 'r', 'К', 'к'].includes(e.key)) {
    restartAnimation();
  }
});

function toggleButtonState() {
    if (isPaused) {
        pauseButton.classList.add('paused');
        restartButton.classList.add('available');
        restartButton.classList.remove('unable');
    } else {
        pauseButton.classList.remove('paused');
        restartButton.classList.remove('available');
        restartButton.classList.add('unable');
    }
}

function togglePause() {
    isPaused = !isPaused;
    toggleButtonState(pauseButton, isPaused);
}

pauseButton.addEventListener('click', togglePause);

document.addEventListener('keydown', (e) => {
    if (e.key === 'P' || e.key === 'p' || e.key === 'З' || e.key === 'з') {
        togglePause();
    }
});