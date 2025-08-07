// Creates and manages floating "islands" that drift and rotate on screen

export class FloatingIslands {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.islands = [];
    this.initIslands();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initIslands(count = 10) {
    for (let i = 0; i < count; i++) {
      const island = document.createElement('div');
      island.classList.add('floating-island');
      island.style.left = `${Math.random() * 100}%`;
      island.style.top = `${Math.random() * 100}%`;
      island.style.transform = `translateZ(${Math.random() * 200 - 100}px)`;
      this.container.appendChild(island);
      this.islands.push({
        el: island,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      });
    }
  }

  animate() {
    this.islands.forEach(({ el, speedX, speedY, rotationSpeed }) => {
      let left = parseFloat(el.style.left);
      let top = parseFloat(el.style.top);
      let rotation = parseFloat(el.style.rotation) || 0;

      left += speedX;
      top += speedY;
      rotation += rotationSpeed;

      if (left > 100) left = 0;
      if (left < 0) left = 100;
      if (top > 100) top = 0;
      if (top < 0) top = 100;

      el.style.left = `${left}%`;
      el.style.top = `${top}%`;
      el.style.transform = `rotate(${rotation}deg)`;
      el.style.rotation = rotation;
    });

    requestAnimationFrame(this.animate);
  }
}