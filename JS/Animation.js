function animate() {
  if (!isPaused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Particles.forEach(type => {
      updateParticles(particles[type], interactions[`${type}to${type}`], type);
    });

    Particles.forEach(typeA => {
      Particles.forEach(typeB => {
        if (typeA === typeB) return;
        updateInteractions(
          particles[typeA],
          particles[typeB],
          interactions[`${typeA}to${typeB}`]
        );
      });
    });

    Particles.forEach(type => drawParticles(particles[type]));
  }
  requestAnimationFrame(animate);
}