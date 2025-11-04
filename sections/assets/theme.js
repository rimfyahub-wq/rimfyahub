/**
 * Glow Edge Theme - Main JavaScript
 * Optimized for performance and accessibility
 */

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}

function initializeTheme() {
  initSmoothScroll();
  initAddToCartHandler();
  initResponsiveMenu();
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  try {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if href is just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without page jump
          window.history.pushState(null, null, href);
        }
      });
    });
  } catch (error) {
    console.error('Smooth scroll initialization error:', error);
  }
}

/**
 * Add to cart form handler with proper error handling
 */
function initAddToCartHandler() {
  try {
    const addToCartForms = document.querySelectorAll('.product-form, [data-product-form]');
    
    addToCartForms.forEach(form => {
      form.addEventListener('submit', handleAddToCart);
    });
  } catch (error) {
    console.error('Add to cart initialization error:', error);
  }
}

async function handleAddToCart(e) {
  e.preventDefault();
  
  const button = this.querySelector('[type="submit"], .add-to-cart');
  if (!button) return;
  
  const originalText = button.textContent;
  button.disabled = true;
  button.classList.add('loading');
  button.textContent = 'Adding...';
  
  try {
    const formData = new FormData(this);
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    button.textContent = '✓ Added!';
    
    // Update cart UI if needed
    updateCartUI(data);
    
    // Reset button after 2 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('loading');
      button.disabled = false;
    }, 2000);
    
  } catch (error) {
    console.error('Add to cart error:', error);
    button.textContent = '✗ Error';
    button.style.backgroundColor = '#ff4444';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('loading');
      button.disabled = false;
      button.style.backgroundColor = '';
    }, 2000);
  }
}

/**
 * Update cart UI after adding item
 */
function updateCartUI(data) {
  try {
    const cartCount = document.querySelector('[data-cart-count]');
    if (cartCount && data.quantity) {
      cartCount.textContent = data.quantity;
      cartCount.classList.add('pulse');
      setTimeout(() => cartCount.classList.remove('pulse'), 600);
    }
  } catch (error) {
    console.error('Cart UI update error:', error);
  }
}

/**
 * Responsive menu toggle
 */
function initResponsiveMenu() {
  try {
    const menuButtons = document.querySelectorAll('[data-menu-toggle], .menu-toggle');
    const navMenu = document.querySelector('[data-nav-menu], nav');
    
    if (menuButtons.length && navMenu) {
      menuButtons.forEach(button => {
        button.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          button.setAttribute('aria-expanded', 
            navMenu.classList.contains('active') ? 'true' : 'false'
          );
        });
      });
    }
  } catch (error) {
    console.error('Menu initialization error:', error);
  }
}

/**
 * Lazy load images for better performance
 */
function initLazyLoading() {
  try {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  } catch (error) {
    console.error('Lazy loading initialization error:', error);
  }
}

// Initialize lazy loading
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLazyLoading);
} else {
  initLazyLoading();
}

