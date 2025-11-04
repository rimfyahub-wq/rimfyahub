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
      animateHeroElements();
      animateOnScroll();
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
      'linear-gradient(135deg, hsl(30, 100%, 60%), hsl(220, 100%, 60%), hsl(60, 100%, 60%))', // Orange, Blue, Yellow
      'linear-gradient(135deg, hsl(220, 100%, 60%), hsl(120, 100%, 50%), hsl(280, 100%, 65%))', // Blue, Green, Purple
      'linear-gradient(135deg, hsl(60, 100%, 60%), hsl(280, 100%, 65%), hsl(180, 100%, 60%))', // Yellow, Purple, Cyan
      'linear-gradient(135deg, hsl(120, 100%, 50%), hsl(300, 100%, 65%), hsl(30, 100%, 60%))', // Green, Magenta, Orange
      'linear-gradient(135deg, hsl(180, 100%, 60%), hsl(60, 100%, 60%), hsl(220, 100%, 60%))', // Cyan, Yellow, Blue
      'linear-gradient(135deg, hsl(300, 100%, 65%), hsl(30, 100%, 60%), hsl(120, 100%, 50%))', // Magenta, Orange, Green
      'linear-gradient(135deg, hsl(280, 100%, 65%), hsl(180, 100%, 60%), hsl(60, 100%, 60%))', // Purple, Cyan, Yellow
      'linear-gradient(135deg, hsl(30, 100%, 60%), hsl(300, 100%, 65%), hsl(220, 100%, 60%))'  // Orange, Magenta, Blue
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

  // Animate hero elements on page load
  function animateHeroElements() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTagline = document.querySelector('.hero-tagline');
    const heroDescription = document.querySelector('.hero-description');
    const heroCta = document.querySelector('.hero-cta');
    const heroStats = document.querySelector('.hero-stats');
    const heroMedia = document.querySelector('.hero-media');

    const elements = [
      { el: heroTitle, delay: 100 },
      { el: heroSubtitle, delay: 300 },
      { el: heroTagline, delay: 500 },
      { el: heroDescription, delay: 700 },
      { el: heroCta, delay: 900 },
      { el: heroStats, delay: 1100 },
      { el: heroMedia, delay: 600 }
    ];

    elements.forEach(({ el, delay }) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay);
      }
    });
  }

  // General scroll animations
  function animateOnScroll() {
    const animatedElements = document.querySelectorAll(
      '.testimonial-card, .faq-item, .newsletter, section[class*="section"]:not(.hero-section)'
    );

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    });
  }
})();
