// DOM Content Loaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initMobileNavigation();
  initSmoothScrolling();
  initTypingAnimation();
  initScrollAnimations();
  initButtonEffects();
  initFloatingOrbs();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = 'auto';
    });
  }
  
  // Close mobile menu when clicking on links
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  if (mobileLinks) {
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
    });
  }
}

// Smooth Scrolling for Internal Links
function initSmoothScrolling() {
  // Smooth scroll to sections
  window.scrollToSection = function(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Handle all internal anchor links
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
}

// Typing Animation for SEO Words
function initTypingAnimation() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;
  
  // SEO words array - matching the React component
  const words = ['Erfolgreich', 'Umsatzsteigernd', 'Gewinnbringend'];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let isPaused = false;
  
  const typingSpeed = 150;   // Speed of typing
  const deletingSpeed = 100; // Speed of deleting
  const pauseDuration = 1500; // Pause between words
  
  function typeWord() {
    const currentWord = words[currentWordIndex];
    
    if (isPaused) {
      setTimeout(typeWord, pauseDuration);
      isPaused = false;
      return;
    }
    
    if (isDeleting) {
      // Delete characters
      currentCharIndex--;
      typingElement.textContent = currentWord.substring(0, currentCharIndex);
      
      if (currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeWord, 200); // Short pause before typing next word
        return;
      }
      
      setTimeout(typeWord, deletingSpeed);
    } else {
      // Type characters
      currentCharIndex++;
      typingElement.textContent = currentWord.substring(0, currentCharIndex);
      
      if (currentCharIndex === currentWord.length) {
        isDeleting = true;
        isPaused = true;
      }
      
      setTimeout(typeWord, typingSpeed);
    }
  }
  
  // Start the typing animation
  setTimeout(typeWord, 1000); // Initial delay
}

// Scroll-triggered Animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Add staggered animation delays for child elements
        const childElements = entry.target.querySelectorAll('.animate-child');
        childElements.forEach((child, index) => {
          child.style.animationDelay = `${index * 0.1}s`;
          child.classList.add('animate-in');
        });
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Button Hover Effects
function initButtonEffects() {
  // Primary button hover effects
  document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.background = '#07437c';
      this.style.color = '#fe7a33';
      this.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.background = 'linear-gradient(135deg, #fe7a33 0%, #ff6b35 100%)';
      this.style.color = 'white';
      this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1.05)';
    });
  });
  
  // Image hover effects
  document.querySelectorAll('.image-container img').forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
  
  // Card hover effects
  document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    container.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });
}

// Initialize Floating Orbs Animation
function initFloatingOrbs() {
  // This is handled by CSS animations, but we can add JavaScript for more complex behaviors if needed
  const orbs = document.querySelectorAll('.floating-orb');
  
  // Add random delays to make orbs feel more organic
  orbs.forEach((orb, index) => {
    const randomDelay = Math.random() * 2; // Random delay up to 2 seconds
    orb.style.animationDelay = `${randomDelay}s`;
  });
}

// Services Dropdown Functionality (if needed)
function initServicesDropdown() {
  const servicesButton = document.getElementById('services-button');
  const servicesDropdown = document.getElementById('services-dropdown');
  
  if (servicesButton && servicesDropdown) {
    let timeout;
    
    servicesButton.addEventListener('mouseenter', function() {
      clearTimeout(timeout);
      servicesDropdown.classList.remove('hidden');
    });
    
    servicesButton.addEventListener('mouseleave', function() {
      timeout = setTimeout(() => {
        servicesDropdown.classList.add('hidden');
      }, 300);
    });
    
    servicesDropdown.addEventListener('mouseenter', function() {
      clearTimeout(timeout);
    });
    
    servicesDropdown.addEventListener('mouseleave', function() {
      servicesDropdown.classList.add('hidden');
    });
  }
}

// Scroll to Top Functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Contact Form Validation (if needed)
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    
    if (!name || !email || !message) {
      alert('Bitte füllen Sie alle Felder aus.');
      return;
    }
    
    if (!isValidEmail(email)) {
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }
    
    // Here you would typically send the form data to your server
    alert('Vielen Dank für Ihre Nachricht! Ich werde mich schnellstmöglich bei Ihnen melden.');
    contactForm.reset();
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Navigation Active State
function updateActiveNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize navigation state on page load
document.addEventListener('DOMContentLoaded', updateActiveNavigation);

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add scroll-based navbar background
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  const handleScroll = debounce(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 10);
  
  window.addEventListener('scroll', handleScroll);
}

// Initialize navbar scroll effect
document.addEventListener('DOMContentLoaded', initNavbarScroll);

// Global utility functions that might be called from HTML
window.scrollToSection = function(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Export functions for use in HTML onclick handlers
window.scrollToTop = scrollToTop;