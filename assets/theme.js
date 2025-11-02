/**
 * Glow Edge Theme - Main JavaScript
 */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add to cart form handler
document.addEventListener('DOMContentLoaded', () => {
  const addToCartForms = document.querySelectorAll('.product-form');
  
  addToCartForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const button = form.querySelector('.add-to-cart');
      const originalText = button.textContent;
      
      button.classList.add('loading');
      button.textContent = 'Adding...';
      
      try {
        const formData = new FormData(form);
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          button.textContent = 'Added!';
          setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('loading');
            // Optionally redirect to cart
            // window.location.href = '/cart';
          }, 1500);
        } else {
          throw new Error('Failed to add to cart');
        }
      } catch (error) {
        console.error('Error:', error);
        button.textContent = 'Error';
        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('loading');
        }, 1500);
      }
    });
  });
});
