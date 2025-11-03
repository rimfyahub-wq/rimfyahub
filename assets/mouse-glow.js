/**
 * Mouse Glow Effect
 * Tracks mouse position and applies radial gradient glow
 */

class MouseGlow {
  constructor() {
    this.sections = document.querySelectorAll('[data-mouse-glow]');
    this.mousePosition = { x: 0, y: 0 };
    this.init();
  }

  init() {
    if (this.sections.length === 0) return;

    // Track mouse movement
    window.addEventListener('mousemove', (e) => {
      this.mousePosition.x = (e.clientX / window.innerWidth) * 100;
      this.mousePosition.y = (e.clientY / window.innerHeight) * 100;
      this.updateGlows();
    });

    // Initial update
    this.updateGlows();
  }

  updateGlows() {
    this.sections.forEach((section) => {
      const overlay = section.querySelector('.mouse-glow-overlay');
      const secondaryGlow = section.querySelector('.secondary-glow');
      
      if (overlay) {
        const { x, y } = this.mousePosition;
        
        // Primary glow with vibrant color gradient (orange, blue, yellow, green, purple, cyan, magenta)
        overlay.style.background = `
          radial-gradient(
            circle 800px at ${x}% ${y}%, 
            hsla(30, 100%, 60%, 0.6) 0%, 
            hsla(220, 100%, 60%, 0.5) 20%, 
            hsla(60, 100%, 60%, 0.4) 35%, 
            hsla(120, 100%, 50%, 0.3) 50%, 
            hsla(280, 100%, 65%, 0.2) 65%,
            transparent 80%
          )
        `;
      }
      
      if (secondaryGlow) {
        const { x, y } = this.mousePosition;
        
        // Secondary glow with cyan and magenta
        secondaryGlow.style.background = `
          radial-gradient(
            circle 400px at ${x}% ${y}%, 
            hsla(180, 100%, 60%, 0.5) 0%,
            hsla(300, 100%, 65%, 0.3) 40%,
            transparent 70%
          )
        `;
      }
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MouseGlow();
  });
} else {
  new MouseGlow();
}
