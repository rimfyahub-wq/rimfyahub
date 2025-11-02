/**
 * Animations Module
 * Handles scroll-based animations, parallax effects, and background gradients
 */

class AnimationController {
  constructor() {
    this.initScrollAnimations();
    this.initParallax();
    this.initBackgroundGradient();
    this.initVideoFade();
  }

  // Intersection Observer for scroll-triggered animations
  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate feature cards with 3D effect
          const cards = entry.target.querySelectorAll('[data-animate-card]');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('is-visible');
            }, index * 100);
          });

          // Animate lifestyle images
          const slides = entry.target.querySelectorAll('[data-animate-slide]');
          slides.forEach((slide, index) => {
            setTimeout(() => {
              slide.classList.add('is-visible');
            }, index * 200);
          });

          // Add 3D parallax to feature section
          if (entry.target.classList.contains('features-grid')) {
            this.init3DCardEffect(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe all animated sections
    document.querySelectorAll('[data-animate-on-scroll]').forEach(section => {
      observer.observe(section);
    });
  }

  // 3D Card Effect on Scroll
  init3DCardEffect(container) {
    const cards = container.querySelectorAll('.feature-card');
    
    window.addEventListener('scroll', () => {
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Only apply effect when section is in view
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        
        cards.forEach((card, index) => {
          const delay = index * 0.1;
          const cardProgress = Math.max(0, Math.min(1, scrollProgress - delay));
          
          // 3D perspective transform based on scroll position
          const rotateX = (1 - cardProgress) * 15;
          const translateZ = (1 - cardProgress) * -50;
          
          card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            translateZ(${translateZ}px)
            translateY(${card.classList.contains('is-visible') ? 0 : '30px'})
            scale(${card.classList.contains('is-visible') ? 1 : 0.95})
          `;
        });
      }
    });
  }

  // Parallax scroll effect
  initParallax() {
    const parallaxContent = document.querySelector('[data-parallax-content]');
    const parallaxMedia = document.querySelector('[data-parallax-media]');
    
    if (!parallaxContent && !parallaxMedia) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const maxScroll = 500;
      
      if (scrollY < maxScroll) {
        const progress = scrollY / maxScroll;
        
        if (parallaxContent) {
          const yOffset = scrollY * 0.3;
          const opacity = 1 - progress;
          const scale = 1 - (progress * 0.2);
          
          parallaxContent.style.transform = `translateY(${yOffset}px) scale(${scale})`;
          parallaxContent.style.opacity = opacity;
        }
        
        if (parallaxMedia) {
          const yOffset = scrollY * -0.2;
          const scale = 1 - (progress * 0.2);
          
          parallaxMedia.style.transform = `translateY(${yOffset}px) scale(${scale})`;
        }
      }
    });
  }

  // Animated background gradient color cycling
  initBackgroundGradient() {
    const currentLayer = document.querySelector('[data-gradient-layer="current"]');
    const nextLayer = document.querySelector('[data-gradient-layer="next"]');
    
    if (!currentLayer || !nextLayer) return;

    const gradients = [
      'linear-gradient(135deg, hsl(193, 100%, 65%), hsl(280, 100%, 70%), hsl(330, 100%, 70%))',
      'linear-gradient(135deg, hsl(30, 100%, 65%), hsl(330, 100%, 70%), hsl(280, 100%, 70%))',
      'linear-gradient(135deg, hsl(220, 100%, 65%), hsl(193, 100%, 65%), hsl(142, 100%, 65%))',
      'linear-gradient(135deg, hsl(60, 100%, 65%), hsl(30, 100%, 65%), hsl(330, 100%, 70%))',
      'linear-gradient(135deg, hsl(300, 100%, 70%), hsl(280, 100%, 70%), hsl(220, 100%, 65%))',
      'linear-gradient(135deg, hsl(142, 100%, 65%), hsl(180, 100%, 65%), hsl(220, 100%, 65%))',
      'linear-gradient(135deg, hsl(280, 100%, 70%), hsl(330, 100%, 70%), hsl(30, 100%, 65%))',
      'linear-gradient(135deg, hsl(330, 100%, 70%), hsl(60, 100%, 65%), hsl(193, 100%, 65%))'
    ];

    let currentIndex = 0;
    let nextIndex = 1;

    const cycleGradients = () => {
      // Fade out current, fade in next
      currentLayer.style.opacity = '0';
      nextLayer.style.background = gradients[nextIndex];
      nextLayer.style.opacity = '0.3';

      setTimeout(() => {
        // Swap backgrounds
        currentLayer.style.background = gradients[nextIndex];
        currentLayer.style.opacity = '0.3';
        nextLayer.style.opacity = '0';

        // Update indices
        currentIndex = (currentIndex + 1) % gradients.length;
        nextIndex = (nextIndex + 1) % gradients.length;
      }, 1200);
    };

    // Change every 4 seconds
    setInterval(cycleGradients, 4000);
  }

  // Video fade effect for seamless loop
  initVideoFade() {
    // Disabled - videos loop seamlessly without fade
    // Videos are set to autoplay, loop, and muted for seamless playback
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
  });
} else {
  new AnimationController();
}
