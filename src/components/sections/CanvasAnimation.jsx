import React, { useRef, useEffect } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; 
    const c = canvas.getContext('2d');

    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function Particle(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = -dy;
      this.radius = 5;
      this.color = color;
      this.timeToLive = 2;
      this.opacity = 1;
      this.r = 10;
      this.g = 10;
      this.b = randomIntFromRange(150, 250);

      this.update = function () {
        if (this.y + this.radius + this.dy > canvas.height) {
          this.dy = -this.dy;
        }
        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
          this.dx = -this.dx;
        }
        this.x += Math.random() > 0.5 ? dx : -dx;
        this.y += Math.random() > 0.5 ? dy : -dy;
        this.draw();

        this.timeToLive -= 0.01;
      };

      this.draw = function () {
        this.opacity = this.timeToLive / 1;
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, 2, 0, Math.PI * 2, false);
        c.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity.toFixed(2)})`;
        c.fill();
        c.closePath();
        c.restore();
      };
    }

    function Mortar(x, y, dx, dy, radius, color) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
      this.triggered = false;
      this.explosion = undefined;
      this.waveOffset = randomIntFromRange(1, 2);

      this.update = (delta) => {
        this.draw();

        this.dy += 0.11;
        this.x += this.dx * Math.sin(delta) * this.waveOffset;
        this.y += this.dy;

        if (this.dy > 0) {
          this.triggered = true;
        }
      };

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      };

      this.explode = function (callback) {
        if (typeof this.explosion == 'undefined') {
          this.explosion = new Explosion(this);
          this.radius = 0;
        }
        this.explosion.update();

        if (this.explosion.particles.length <= 0) {
          callback();
        }
      };
    }

    function Explosion(source) {
      this.particles = [];
      this.rings = [];
      this.source = source;

      this.init = function () {
        for (let i = 0; i < 12; i++) {
          const v = 7;
          let dx = v;
          let dy = v;
          this.particles.push(new Particle(this.source.x, this.source.y, dx, dy, 1, 'blue'));
        }
      };

      this.init();

      this.update = function () {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].update();
          if (this.particles[i].timeToLive < 0) {
            this.particles.splice(i, 1);
          }
        }
      };
    }

    let mortars = [];

    function init() {
      mortars = []; 
    }

    let elapsed = 0;
    let randomInterval = randomIntFromRange(80, 170);

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      c.fillStyle = 'rgba(0,0,0, 0.02)';
      c.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < mortars.length; i++) {
        mortars[i].update(elapsed);

        if (mortars[i].triggered === true) {
          mortars[i].explode(() => {
            mortars.splice(i, 1);
          });
        }
      }

      if (elapsed % randomInterval === 0) {
        const x = randomIntFromRange(10, canvas.width - 10);
        const dy = randomIntFromRange(-5, -10);
        mortars.push(new Mortar(x, canvas.height, 2, dy, 3, 'blue'));
        randomInterval = randomIntFromRange(50, 100);
      }

      elapsed += 1;
    }

    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute' }} />;
};

export default CanvasAnimation;