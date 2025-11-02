/**
 * Revolutionary Features Cards Animation
 * Simple and bulletproof scroll animation system
 */

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    try {
      animateFeatureCards();
      animateGradientBackground();
    } catch (error) {
      console.error('Animation init error:', error);
    }
  }

  // Animate feature cards on scroll
  function animateFeatureCards() {
    const cards = document.querySelectorAll('.feature-card[data-animate-card]');
    
    if (cards.length === 0) return;

    // Show cards immediately on page load
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('is-visible');
      }, index * 150);
    });

    // Also trigger on scroll for dynamic loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    cards.forEach(card => observer.observe(card));
  }

  // Animated gradient background
  function animateGradientBackground() {
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

    // Set initial gradients
    currentLayer.style.background = gradients[currentIndex];
    currentLayer.style.opacity = '0.6';
    nextLayer.style.background = gradients[nextIndex];
    nextLayer.style.opacity = '0';

    function cycleGradients() {
      nextLayer.style.background = gradients[nextIndex];
      currentLayer.style.opacity = '0';
      nextLayer.style.opacity = '0.6';

      setTimeout(() => {
        currentLayer.style.background = gradients[nextIndex];
        currentLayer.style.opacity = '0.6';
        nextLayer.style.opacity = '0';
        
        currentIndex = nextIndex;
        nextIndex = (nextIndex + 1) % gradients.length;
      }, 3000);
    }

    setTimeout(cycleGradients, 5000);
    setInterval(cycleGradients, 6000);
  }
})();
