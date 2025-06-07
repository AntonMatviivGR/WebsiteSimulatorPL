(function() {
    const CORRECT_PASSWORD = '811392914';

    const block   = document.querySelector('.block');
    const input   = document.querySelector('.password-input');
    const btn     = document.getElementById('PassBtn');

    function tryUnlock() {
      if (input.value === CORRECT_PASSWORD) {
        block.style.display = 'none';
      }
    }

    btn.addEventListener('click', tryUnlock);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') tryUnlock();
    });
  })();
