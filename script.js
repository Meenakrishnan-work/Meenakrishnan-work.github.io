// ===================================
// MEENA KUMARI KRISHNAN - PORTFOLIO
// JAVASCRIPT FILE
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ===================================
    // SMOOTH SCROLLING
    // ===================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // HEADER SCROLL EFFECT
    // ===================================
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ===================================
    // SCROLL PROGRESS BAR
    // ===================================
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    });

    // ===================================
    // INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
    // ===================================
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function(element) {
        fadeObserver.observe(element);
    });

    // ===================================
    // CONTACT FORM HANDLING
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && message) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // ===================================
    // TIMELINE ANIMATION DELAY
    // ===================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(function(item, index) {
        item.style.animationDelay = (index * 0.2) + 's';
    });

    // ===================================
    // PARALLAX EFFECT ON HERO
    // ===================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(function(element) {
            const speed = 0.5;
            element.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
        });
    });

    // ===================================
    // DYNAMIC YEAR IN FOOTER
    // ===================================
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    
    if (footerText) {
        footerText.textContent = '© ' + currentYear + ' Meena Kumari Krishnan. All rights reserved.';
    }

    // ===================================
    // PROJECT CARDS HOVER EFFECT
    // ===================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    // ===================================
    // SKILL ITEMS RANDOM COLOR VARIATION
    // ===================================
    const skillItems = document.querySelectorAll('.skill-item');
    const colors = ['#d97706', '#1a365d', '#2c5282'];
    
    skillItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.boxShadow = '3px 3px 0 ' + randomColor;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '3px 3px 0 var(--accent)';
        });
    });

    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    console.log('%c👋 Welcome to Meena Kumari Krishnan\'s Portfolio!', 'color: #d97706; font-size: 20px; font-weight: bold;');
    console.log('%cPortfolio Version: 1.0', 'color: #1a365d; font-size: 14px;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #64748b; font-size: 12px;');

    // ===================================
    // PREVENT SCROLL RESTORATION ON RELOAD
    // ===================================
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);

});

// ===================================
// ADDITIONAL UTILITY FUNCTIONS
// ===================================

/**
 * Debounce function to limit rate of function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element to check
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Smooth scroll to top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Optimize scroll events with debouncing
const optimizedScrollHandler = debounce(function() {
    // Add any additional scroll-based functionality here
    console.log('Scroll event triggered');
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Add keyboard navigation for mobile menu
document.addEventListener('keydown', function(e) {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Close menu on Escape key
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Add focus visible for better keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// ===================================
// BROWSER COMPATIBILITY CHECK
// ===================================

// Check for IntersectionObserver support
if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Fallback to immediate visibility.');
    // Fallback: Make all fade-in elements visible immediately
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
        element.classList.add('visible');
    });
}

// ===================================
// END OF SCRIPT
// ===================================
