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
          // Animate feature cards
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
        }
      });
    }, observerOptions);

    // Observe all animated sections
    document.querySelectorAll('[data-animate-on-scroll]').forEach(section => {
      observer.observe(section);
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
      }, 3000);
    };

    // Change every 8 seconds
    setInterval(cycleGradients, 8000);
  }

  // Video fade effect for seamless loop
  initVideoFade() {
    const videos = document.querySelectorAll('[data-video-fade]');
    
    videos.forEach(video => {
      video.addEventListener('timeupdate', () => {
        const duration = video.duration;
        const currentTime = video.currentTime;
        
        // Fade out 1 second before end
        if (duration - currentTime < 1) {
          video.style.opacity = '0';
        } else if (currentTime < 1) {
          // Fade in at start
          video.style.opacity = '1';
        }
      });
    });
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
