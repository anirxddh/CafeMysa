// ===============================
// LOADING SCREEN
// ===============================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Fade out loader after 1.5 seconds
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        // Remove loader from DOM after fade animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 800);
});



// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

// Initial check on page load
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ===============================
// HORIZONTAL IMAGE STRIP INFINITE SCROLL
// ===============================
const imageStrip = document.getElementById('imageStrip');
const stripContainer = document.querySelector('.image-strip-container');

if (imageStrip) {
    // Store original HTML
    const originalContent = imageStrip.innerHTML;
    
    // Duplicate content 3 times for seamless loop
    imageStrip.innerHTML = originalContent + originalContent + originalContent;
    
    // Calculate the width of one set of items
    const calculateResetPoint = () => {
        const stripWidth = imageStrip.scrollWidth / 3; // Divide by 3 since duplicated.
        imageStrip.style.setProperty('--strip-width', `${stripWidth}px`);
    };
    
    // Calculate on load and resize
    calculateResetPoint();
    window.addEventListener('resize', calculateResetPoint);
}

// Pause animation on hover
if (stripContainer) {
    stripContainer.addEventListener('mouseenter', () => {
        imageStrip.style.animationPlayState = 'paused';
    });
    
    stripContainer.addEventListener('mouseleave', () => {
        imageStrip.style.animationPlayState = 'running';
    });
}
// ===============================
// MENU BUTTON ACTIONS
// ===============================
const menuButtons = document.querySelectorAll('.menu-button');

// Menu PDF links (placeholders - update with actual links)
const menuLinks = {
    breakfast: './assets/BreakfastMenu.pdf', // Update
    Sips: './assets/SipsOfMysa.pdf',      // Update
    FullMenu: './assets/FullMenu.pdf'          // Update
};

menuButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const menuType = button.getAttribute('data-menu');
        const menuLink = menuLinks[menuType];
        
        if (menuLink) {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                
                // Open PDF in new tab
                window.open(menuLink, '_blank');
            }, 150);
        }
    });
});

// ===============================
// DELIVERY PLATFORM LINKS
// ===============================
const deliveryCards = document.querySelectorAll('.delivery-card');

// Delivery platform links (placeholder - update with actual links)
const deliveryLinks = {
    zomato: 'https://www.zomato.com/ranchi/cafe-mysa-doranda',    // Update with actual Cafe Mysa link
    swiggy: 'https://www.swiggy.com/city/ranchi/cafe-mysa-vip-road-dibdih-rest714662',    // Update with actual Cafe Mysa link
    easydiner: 'https://www.eazydiner.com/ranchi/cafe-mysa-daud-nagar-ranchi-690850',  // Update with actual Cafe Mysa link
    district: 'https://www.district.in/dining/ranchi/cafe-mysa-doranda'  // Update with actual Cafe Mysa link
};

deliveryCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        
        const platform = card.getAttribute('data-platform');
        const platformLink = deliveryLinks[platform];
        
        if (platformLink) {
            // Add click animation
            card.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                card.style.transform = 'scale(1)';
                
                // Open platform in new tab
                window.open(platformLink, '_blank');
            }, 150);
        }
    });
});

// ===============================
// SMOOTH SCROLL TO SECTIONS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// INTERACTIVE HOVER EFFECTS
// ===============================

// Add subtle scale effect to cards
const interactiveCards = document.querySelectorAll('.menu-card, .info-card, .delivery-card, .signature-item');

interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ===============================
// PARALLAX SCROLL EFFECT (SUBTLE)
// ===============================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Subtle parallax on hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// ===============================
// ACCESSIBILITY ENHANCEMENTS
// ===============================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ===============================
// PERFORMANCE OPTIMIZATION
// ===============================

// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(() => {
        revealOnScroll();
    });
}, { passive: true });

// ===============================
// CONSOLE MESSAGE (Optional)
// ===============================
console.log('%cCafe Mysa', 'color: #1a4d3e; font-size: 24px; font-weight: bold;');
console.log('%cWhere Every Moment Feels Like Home', 'color: #9fb968; font-size: 14px; font-style: italic;');
console.log('%cWebsite crafted with care ☕', 'color: #6b7280; font-size: 12px;');

// ===============================
// INITIALIZATION MESSAGE
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ All systems loaded successfully');
    console.log('✓ Navigation initialized');
    console.log('✓ Scroll animations ready');
    console.log('✓ Interactive elements active');
});
