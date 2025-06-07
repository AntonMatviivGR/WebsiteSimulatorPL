function applyForces(p, other, interaction) {
    let dx = other.x - p.x;
    let dy = other.y - p.y;
    let distSquared = dx * dx + dy * dy;

    if (distSquared === 0) return;

    let dist = Math.sqrt(distSquared);
    let normDx = dx / dist;
    let normDy = dy / dist;

    if (interaction.repel > 0 && interaction.repelDist > 0 && dist < interaction.repelDist) {
        let repelFactor = (interaction.repelDist - dist) / interaction.repelDist;
        p.vx -= normDx * interaction.repel * repelFactor;
        p.vy -= normDy * interaction.repel * repelFactor;
    }

    if (interaction.attract > 0 && dist > (interaction.repel > 0 ? interaction.repelDist : 0) && dist < interaction.attractDist) {
        let attractFactor = (dist - (interaction.repel > 0 ? interaction.repelDist : 0)) / 
                            (interaction.attractDist - (interaction.repel > 0 ? interaction.repelDist : 0));
        p.vx += normDx * interaction.attract * attractFactor;
        p.vy += normDy * interaction.attract * attractFactor;
    }
}

const MAX_SPEED = 16;

function clampSpeed(p) {
    const v = Math.hypot(p.vx, p.vy);
    if (v > MAX_SPEED) {
        const scale = MAX_SPEED / v;
        p.vx *= scale;
        p.vy *= scale;
    }
}

function updateParticles(particlesArray, interaction, type) {
    particlesArray.forEach((p, i) => {
        for (let j = 0; j < particlesArray.length; j++) {
        if (i === j) continue;
        applyForces(p, particlesArray[j], interaction);
        }

        p.x += p.vx;
        p.y += p.vy;

        p.vx *= (1 - pAccelFactor[type]);
        p.vy *= (1 - pAccelFactor[type]);

        const bounceFactor = 10;
        const friction = 0.75;
        
        if (p.x - p.radius < 0 || p.x + p.radius > canvas.width*0.5) {
            p.x = Math.max(p.radius, Math.min(canvas.width*0.5 - p.radius, p.x));
            p.vx *= -bounceFactor;
            p.vy *= friction;
            clampSpeed(p);
        }
        
        if (p.y - p.radius < 0 || p.y + p.radius > canvas.height) {
            p.y = Math.max(p.radius, Math.min(canvas.height - p.radius, p.y));
            p.vy *= -bounceFactor;
            p.vx *= friction;
            clampSpeed(p);
        }
        
    });
}

function updateInteractions(particlesA, particlesB, interactionAtoB) {
    particlesA.forEach(pA => {
        particlesB.forEach(pB => {
            applyForces(pA, pB, interactionAtoB, false);
        });
    });
}

function drawParticles(particlesArray) {
    particlesArray.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
}