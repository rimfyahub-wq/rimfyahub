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
        
        // Primary glow with multi-color gradient
        overlay.style.background = `
          radial-gradient(
            circle 800px at ${x}% ${y}%, 
            hsla(193, 100%, 65%, 0.6) 0%, 
            hsla(280, 100%, 70%, 0.5) 30%, 
            hsla(330, 100%, 70%, 0.4) 50%, 
            transparent 70%
          )
        `;
      }
      
      if (secondaryGlow) {
        const { x, y } = this.mousePosition;
        
        // Secondary glow
        secondaryGlow.style.background = `
          radial-gradient(
            circle 400px at ${x}% ${y}%, 
            hsla(193, 100%, 65%, 0.5) 0%, 
            transparent 60%
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
