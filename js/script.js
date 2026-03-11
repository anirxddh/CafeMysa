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

// Menu PDF links 
const menuLinks = {
    breakfast: './assets/BreakfastMenu.pdf', // Updated
    Sips: './assets/SipsOfMysa.pdf',      // Updated
    FullMenu: './assets/FullMenu.pdf'          // Updated
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

// Delivery platform links
const deliveryLinks = {
    zomato: 'https://www.zomato.com/ranchi/cafe-mysa-doranda',    // Updated with actual Cafe Mysa link
    swiggy: 'https://www.swiggy.com/city/ranchi/cafe-mysa-vip-road-dibdih-rest714662',    // Updated with actual Cafe Mysa link
    easydiner: 'https://www.eazydiner.com/ranchi/cafe-mysa-daud-nagar-ranchi-690850',  // Updated with actual Cafe Mysa link
    district: 'https://www.district.in/dining/ranchi/cafe-mysa-doranda'  // Updated with actual Cafe Mysa link
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
// BLOG MODAL FUNCTIONALITY
// ===============================

// Blog content data - CHANGES ARE TO BE MADE HERE FOR BLOG CONTENT UPDATES
// Write the lines inside the <p></p> only.
const blogContent = {
    blog1: {
        title: "The Art of Brewing Perfect Coffee.",
        body: `
            <p>At Cafe Mysa, coffee isn't just a beverage—it's an experience crafted with precision and care. Every cup tells a story, from the carefully selected beans to the final, perfect pour.</p>
            
            <p>Our journey begins with sourcing the finest beans from sustainable farms across the globe. We prioritize quality over quantity, working directly with farmers who share our commitment to excellence. Each batch is roasted in small quantities to ensure freshness and preserve the unique flavor profiles that make our coffee special.</p>
            
            <p>The brewing process is where science meets art. Our baristas undergo rigorous training to master various brewing methods—from the classic espresso to pour-over techniques. Temperature, timing, and technique all play crucial roles in extracting the perfect balance of flavors.</p>
            
            <p>What sets Cafe Mysa apart is our attention to detail. We adjust our grind size, water temperature, and extraction time based on the specific beans we're using. This dedication ensures that whether you're enjoying a cappuccino, cold brew, or simple black coffee, you're experiencing it at its absolute best.</p>
            
            <p>Next time you visit, ask our baristas about the coffee you're drinking. They'll gladly share the story behind your cup—from the region it came from to the notes you should taste. Because at Mysa, we believe that understanding your coffee makes it taste even better.</p>
        `
    },
    blog2: {
        title: "A Day in the Life at Cafe Mysa.",
        body: `
            <p>Our doors might officially open at 7:30 AM, but life at Cafe Mysa actually starts much earlier. By 6:00 AM, our team is already busy grinding fresh coffee, prepping ingredients, and setting the stage for another day of making memories.</p>

            <p>Those early morning hours belong to our regulars. We see students grabbing a quick caffeine fix before class, professionals starting their morning with a quiet breakfast, and early risers looking for the kind of peace only a morning cafe can provide. the smell of freshly brewed coffee mixes with the scent of warm pastries, creating an atmosphere that has become the signature of the Mysa experience.</p>

            <p>As the morning turns into afternoon, the energy in the room shifts. Lunch brings in a whole new crowd, including business meetings over pasta, friends catching up over pizza, and remote workers tucked into their favorite corners with laptops and lattes. Our staff moves naturally between roles to make sure every single guest feels welcomed and cared for.</p>

            <p>There is a special kind of magic in the afternoons at Mysa. The light streams through the windows just right, conversations seem to flow more easily, and time feels like it slows down. It is during these hours that we see the true heart of what we’ve built: a space where people don’t just eat and drink, but truly let go of their stress.</p>

            <p>As we get closer to our 2:00 AM closing time, the cafe transforms once more. It becomes a place for late-night heart-to-hearts and final cups of coffee, ending with the quiet satisfaction of another day well spent. Our team cleans and prepares the space, knowing that in just a few short hours, the whole cycle starts all over again.</p>

            <p>Every day at Cafe Mysa feels a little different, yet always familiar. That is the real beauty of what we do. We love creating a reliable, comfortable space in an ever-changing world.</p>
        `
    },
    blog3: {
        title: "Meet Our Community!",
        body: `
            <p>Cafe Mysa is more than just a place to grab a drink; it is a true community. Over the years, we have loved watching friendships grow, witnessing the nervous energy of first dates, seeing students finally finish their theses, and celebrating with entrepreneurs as they close their first big deals. These personal stories are what really define who we are.</p>

            <p>Take, for example, the group of five friends who met here by chance two years ago. They now have a standing reservation every Friday evening, and their laughter always fills the room with such warmth. They have celebrated promotions, leaned on each other through tough times, and even organized a mini reunion for their old school friends right here within our walls.</p>

            <p>Our barista knows most of our regulars by name and always remembers their favorite orders. He often says that it is the little things that matter most. When someone walks in and he can start their cappuccino before they even reach the counter, that shared smile makes his whole day. This personal touch is what turns a simple transaction into a real relationship.</p>

            <p>We have also grown into a home for local artists and musicians. Our walls feature rotating artwork from talented creators right here in Ranchi, and our open mic nights have helped launch several local performers. The cafe has naturally evolved into a cultural space that nurtures creativity just as much as it serves great food.</p>

            <p>What makes us most proud isn't just the coffee we brew or the meals we prep. It is the connections that happen here every day. Every regular customer brings their own story, and together, those stories create the tapestry that makes Cafe Mysa so special. We aren't just serving a city; we are looking after a family.</p>
        `
    }
};

// Get modal elements
const blogModal = document.getElementById('blogModal');
const blogTitle = document.getElementById('blogTitle');
const blogBody = document.getElementById('blogBody');
const closeModal = document.getElementById('closeModal');

// Get all blog cards
const blogCards = document.querySelectorAll('.blog-card');

// Open modal when clicking on a blog card
blogCards.forEach(card => {
    card.addEventListener('click', () => {
        const blogId = card.getAttribute('data-blog');
        const blog = blogContent[blogId];
        
        if (blog) {
            blogTitle.textContent = blog.title;
            blogBody.innerHTML = blog.body;
            blogModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal when clicking the X button
closeModal.addEventListener('click', () => {
    blogModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside the content
blogModal.addEventListener('click', (e) => {
    if (e.target === blogModal) {
        blogModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && blogModal.classList.contains('active')) {
        blogModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

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
