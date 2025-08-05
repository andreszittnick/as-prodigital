// Main JavaScript for AS-ProDigital Website
// Replicating all React functionality in vanilla JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initTypingAnimation();
    initStatsCounter();
    initContactForm();
    initSmoothScrolling();
    initMobileMenu();
    
    // Show animations after DOM is loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    // Handle scroll effects on navigation
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    // Throttled scroll handler
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
            setTimeout(() => ticking = false, 16);
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerLines = document.querySelectorAll('.hamburger');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerLines = document.querySelectorAll('.hamburger');
    
    mobileMenu.classList.toggle('open');
    
    // Animate hamburger menu
    hamburgerLines.forEach((line, index) => {
        line.style.transform = mobileMenu.classList.contains('open') 
            ? `rotate(${index === 0 ? '45deg' : index === 1 ? 'scaleX(0)' : '-45deg'}) translateY(${index === 0 ? '0.5rem' : index === 2 ? '-0.5rem' : '0'})`
            : 'none';
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Typing animation for hero section
function initTypingAnimation() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const texts = [
        'Webdesign',
        'SEO-Optimierung', 
        'KI-Lösungen',
        'Digital Marketing'
    ];
    
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    
    function typeWriter() {
        const fullText = texts[currentIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }
        
        typingText.textContent = currentText;
        
        let typeSpeed = isDeleting ? 100 : 150;
        
        if (!isDeleting && currentText === fullText) {
            // Pause at end
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    // Start typing animation after hero loads
    setTimeout(typeWriter, 1000);
}

// Animated statistics counter
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalCount = parseInt(target.getAttribute('data-count'));
                const suffix = target.textContent.replace(/[\d.]/g, '');
                
                animateCounter(target, finalCount, suffix);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
}

function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000; // 2 seconds
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format number based on suffix
        let displayValue;
        if (suffix.includes('%')) {
            displayValue = current.toFixed(1) + suffix;
        } else {
            displayValue = Math.floor(current) + suffix;
        }
        
        element.textContent = displayValue;
    }, stepTime);
}

// Smooth scrolling functionality
function initSmoothScrolling() {
    // Already handled by CSS scroll-behavior: smooth
    // But we can add extra functionality here if needed
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = section.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            toggleMobileMenu();
        }
    }
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitLoader = document.getElementById('submitLoader');
    
    if (!form) return;
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
}

function validateField(field) {
    const errorElement = field.parentNode.querySelector('.form-error');
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'Dieses Feld ist erforderlich.';
    }
    
    // Email validation
    if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
    }
    
    // Name validation (no numbers)
    if ((field.name === 'firstName' || field.name === 'lastName') && field.value) {
        const nameRegex = /^[a-zA-ZäöüÄÖÜß\s-]+$/;
        if (!nameRegex.test(field.value)) {
            isValid = false;
            errorMessage = 'Bitte geben Sie einen gültigen Namen ein.';
        }
    }
    
    if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.toggle('visible', !isValid);
    }
    
    field.style.borderColor = isValid ? '#e5e7eb' : '#ef4444';
    
    return isValid;
}

function clearFieldError(field) {
    const errorElement = field.parentNode.querySelector('.form-error');
    if (errorElement) {
        errorElement.classList.remove('visible');
    }
    field.style.borderColor = '#e5e7eb';
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitLoader = document.getElementById('submitLoader');
    
    // Validate all fields
    const inputs = form.querySelectorAll('input, select, textarea');
    let isFormValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });
    
    if (!isFormValid) {
        showToast('Bitte überprüfen Sie Ihre Eingaben.', 'error');
        return;
    }
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message')
    };
    
    // Update button state
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoader.classList.remove('hidden');
    
    try {
        // Simulate API call (replace with actual endpoint)
        await simulateApiCall(data);
        
        // Success
        showToast('Nachricht erfolgreich gesendet!', 'success');
        form.reset();
        
        // Reset form validation states
        inputs.forEach(input => {
            clearFieldError(input);
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        showToast('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitLoader.classList.add('hidden');
    }
}

// Simulate API call for form submission
function simulateApiCall(data) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Simulate success (replace with actual API call)
            console.log('Form data:', data);
            resolve({ success: true, message: 'Ihre Nachricht wurde erfolgreich übermittelt!' });
        }, 2000);
    });
}

// Toast notification system
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    const toastIcon = toast.querySelector('.toast-icon');
    
    // Set content
    if (type === 'success') {
        toastTitle.textContent = 'Nachricht erfolgreich gesendet!';
        toastDescription.textContent = 'Ich melde mich schnellstmöglich bei Ihnen zurück.';
        toastIcon.style.background = '#10b981';
        toastIcon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
        `;
    } else {
        toastTitle.textContent = 'Fehler beim Senden';
        toastDescription.textContent = message;
        toastIcon.style.background = '#ef4444';
        toastIcon.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
        `;
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Additional utility functions

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced scroll animations with more options
function addAdvancedScrollAnimations() {
    // Timeline animation for process section
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Array.from(timelineSteps).indexOf(entry.target) * 200;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
            }
        });
    }, { threshold: 0.2 });
    
    timelineSteps.forEach(step => {
        timelineObserver.observe(step);
    });
}

// Initialize advanced animations after DOM load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addAdvancedScrollAnimations, 500);
});

// Performance optimization: Lazy load images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add loading state management
function showLoading() {
    document.body.classList.add('loading');
}

function hideLoading() {
    document.body.classList.remove('loading');
}

// Enhanced form validation with German messages
const validationMessages = {
    de: {
        required: 'Dieses Feld ist erforderlich.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        minLength: 'Mindestens {min} Zeichen erforderlich.',
        maxLength: 'Maximal {max} Zeichen erlaubt.',
        pattern: 'Ungültiges Format.',
        name: 'Bitte geben Sie einen gültigen Namen ein.'
    }
};

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Could send error to analytics service here
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Could send error to analytics service here
});

// SEO and accessibility enhancements
function enhanceAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.focus();
            }
        });
    }
    
    // Add keyboard navigation for custom elements
    const interactiveElements = document.querySelectorAll('[role="button"]:not(button)');
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Add smooth reveal animations for better UX
function addRevealAnimations() {
    const revealElements = document.querySelectorAll('.service-card, .benefit-card, .portfolio-item');
    
    revealElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize reveal animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addRevealAnimations, 100);
});

// Modern browser feature detection
const supportsIntersectionObserver = 'IntersectionObserver' in window;
const supportsWebP = document.createElement('canvas').toDataURL('image/webp').indexOf('webp') > -1;

// Progressive enhancement based on browser capabilities
if (!supportsIntersectionObserver) {
    // Fallback for older browsers
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('visible');
    });
}

// Optimize for different screen sizes
function handleResponsiveChanges() {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    // Adjust animations for mobile performance
    if (isMobile) {
        document.body.classList.add('mobile-optimized');
    } else {
        document.body.classList.remove('mobile-optimized');
    }
}

// Initialize responsive handling
window.addEventListener('resize', debounce(handleResponsiveChanges, 250));
document.addEventListener('DOMContentLoaded', handleResponsiveChanges);

// Export functions for potential external use
window.ASProDigital = {
    scrollToSection,
    showToast,
    toggleMobileMenu,
    validateField
};

console.log('AS-ProDigital Website loaded successfully! 🚀');