// ===============================
// LOADING SCREEN
// ===============================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) {
        return;
    }
    
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

const resetHamburgerIcon = () => {
    if (!navToggle) {
        return;
    }

    const spans = navToggle.querySelectorAll('span');
    if (spans.length < 3) {
        return;
    }

    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
};

// Toggle mobile menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger icon
        const spans = navToggle.querySelectorAll('span');
        if (spans.length < 3) {
            return;
        }

        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            resetHamburgerIcon();
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!navMenu) {
            return;
        }

        navMenu.classList.remove('active');
        resetHamburgerIcon();
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

    if (!navbar) {
        return;
    }
    
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
        if (!imageStrip) {
            return;
        }
        imageStrip.style.animationPlayState = 'paused';
    });
    
    stripContainer.addEventListener('mouseleave', () => {
        if (!imageStrip) {
            return;
        }
        imageStrip.style.animationPlayState = 'running';
    });
}

// ===============================
// MENU BUTTON ACTIONS
// ===============================
const menuButtons = document.querySelectorAll('.menu-button');

// Menu PDF links 
const menuLinks = {
    breakfast: './assets/BreakfastMenu.pdf',
    Sips: './assets/SipsOfMysa.pdf',
    FullMenu: './assets/FullMenu.pdf',
    SummerSpeciale: './assets/Summer-Speciale!.pdf'
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
    zomato: 'https://www.zomato.com/ranchi/cafe-mysa-doranda',
    swiggy: 'https://www.swiggy.com/city/ranchi/cafe-mysa-vip-road-dibdih-rest714662',
    easydiner: 'https://www.eazydiner.com/ranchi/cafe-mysa-daud-nagar-ranchi-690850',
    district: 'https://www.district.in/dining/ranchi/cafe-mysa-doranda'
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
            const navHeight = navbar ? navbar.offsetHeight : 0;
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
        this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
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
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        resetHamburgerIcon();
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

// Initialize blog modal functionality
function initBlogModal() {
    // Blog content data - UPDATE THIS TO CHANGE BLOG POSTS


    const blogContent = {
        blog1: {
            title: "The Window Seat at 8:10 AM",
            body: `
                <p>Every weekday morning, a school teacher arrives before the rush, chooses the same window seat, and places a steel tiffin beside her cup. She calls this twenty-minute pause her "quiet class before class."</p>
                <p>She does not scroll, she does not rush, and she rarely orders anything complicated. One cappuccino, one notebook, one deep breath before a day full of voices.</p>
                <p>Over time, the team learned her rhythm. The cup reaches the table just as sunlight touches the corner of the chair. No announcement, no ceremony, just care done consistently.</p>
                <p>Her story reminds us that a cafe is not only about the menu. Sometimes, it is about giving people a small piece of certainty in a busy city.</p>
                <p>If you have your own "8:10 seat," we are happy to keep it warm for you.</p>
            `
        },
        blog2: {
            title: "How the Strawberry Matcha Became a Ritual",
            body: `
                <p>It began with one hesitant order. A guest looked at the menu, pointed at Strawberry Matcha, and said, "I am not sure I will like this, but let me try."</p>
                <p>She took a sip, smiled, and came back two days later with three friends. A week later, they became a Friday group. Then they brought cousins, coworkers, and visiting classmates.</p>
                <p>Now we often hear, "Same table, same drink, same Friday." What was once a new item is now part of many small reunions.</p>
                <p>People ask what the secret is. It is not only the flavor balance. It is the memory attached to that first sip after a hard week.</p>
                <p>Some drinks quench thirst. A few become traditions. This one did both.</p>
            `
        },
        blog3: {
            title: "After 11 PM: The Quiet Crowd",
            body: `
                <p>After 11 PM, the cafe changes mood. The lights feel softer, conversations grow slower, and laughter comes in shorter, warmer bursts.</p>
                <p>We see nurses after duty, developers after deadlines, and friends who have not met in months. Nobody is in a hurry to leave. Nobody is trying to impress anyone.</p>
                <p>The late-night crowd usually asks for comfort orders: something warm, something easy to share, and tea or coffee that keeps the conversation going.</p>
                <p>These hours remind us that good hospitality is often quiet. It is a glass of water before someone asks, a chair shifted for an extra guest, a gentle check-in when the table falls silent.</p>
                <p>For many people in Ranchi, this is the hour when the day finally feels complete.</p>
            `
        },
        blog4: {
            title: "A Birthday for Twelve, Planned in Forty Minutes",
            body: `
                <p>One evening, a group called and asked if we could help with a surprise birthday. They had forty minutes, one cake, and no decorations.</p>
                <p>Our team moved fast. Two tables became one long setup, spare candles came out, and someone found a playlist that felt personal without being loud.</p>
                <p>When the birthday girl arrived, she thought it was just dinner. Then the lights dimmed, everyone stood up, and she cried before the first song ended.</p>
                <p>Nothing about that evening was expensive or elaborate. It worked because everyone contributed one small thing at the right time.</p>
                <p>That is our favorite kind of celebration: simple, sincere, and full of people who mean it.</p>
            `
        },
        blog5: {
            title: "Notes from the Kitchen Pass",
            body: `
                <p>Guests often see the finished plate, but the real story begins at the kitchen pass where every dish is checked before it leaves.</p>
                <p>There is a short question we ask repeatedly: "Would this feel comforting if someone ordered it after a long day?" If the answer is no, we adjust.</p>
                <p>That can mean changing spice balance, adding texture, or serving two items together because they complete each other better.</p>
                <p>We also design with sharing in mind. Many tables here are groups, and food tastes better when everyone can reach for one more bite.</p>
                <p>Comfort food is not accidental. It is built through small decisions made with patience.</p>
            `
        },
        blog6: {
            title: "The People Behind the Counter",
            body: `
                <p>Most guests remember the menu first. Regulars remember people.</p>
                <p>They remember who asks, "Usual?" with a smile. They remember the person who noticed they looked tired and suggested something lighter.</p>
                <p>Our team includes early-shift openers, afternoon runners, and late-night closers. Different timings, same intention: make every guest feel seen.</p>
                <p>A lot of this work is invisible. It is timing refills, resetting tables quickly, and handling mistakes with honesty and calm.</p>
                <p>If the cafe feels warm, it is because the people serving you choose warmth on purpose, every single day.</p>
            `
        },
        blog7: {
            title: "Rainy Day at Mysa",
            body: `
                <p>Monsoon afternoons arrive without warning in Ranchi. One minute it is humid, the next minute everyone runs in laughing, holding wet bags and folded dupattas.</p>
                <p>On one such day, we had extra chairs near the entrance, tissues on every table, and a line of shoes drying by the door.</p>
                <p>Orders shifted naturally: more soup, more hot beverages, fewer cold drinks. Conversations lasted longer because nobody wanted to step back into the rain.</p>
                <p>A guest offered to share her charging slot with another table. Two strangers started talking and ended up exchanging book recommendations.</p>
                <p>By evening, the rain stopped. The warmth in the room did not.</p>
            `
        },
        blog8: {
            title: "The Long Table Diaries",
            body: `
                <p>There is one long table that has seen interview prep, startup pitch rehearsals, assignment panic, and celebration selfies all in the same week.</p>
                <p>Students use it for group study. Freelancers use it for deep work. Founders use it for planning sessions with too many sticky notes and too little time.</p>
                <p>What they all need is simple: reliable Wi-Fi, patient service, and a place where staying for another hour is not awkward.</p>
                <p>We have watched strangers become collaborators there. We have watched ideas become projects, and projects become jobs.</p>
                <p>Sometimes all progress needs is one table that does not rush you.</p>
            `
        },
        blog9: {
            title: "Sundays with Families",
            body: `
                <p>Sunday afternoons are family time. Grandparents arrive first, children choose seats by speed rather than logic, and someone always asks for an extra plate "just in case."</p>
                <p>These tables are not about efficiency. They are about stories repeated for the third time, photos taken in poor lighting, and dessert debates that nobody truly wants to settle.</p>
                <p>We try to support that pace with patient service and share-friendly portions, because good family meals should feel unhurried.</p>
                <p>By the end, someone is packing leftovers, someone is planning next Sunday, and someone is still finishing the last sip.</p>
                <p>For us, this is hospitality at its purest: helping people spend meaningful time together.</p>
            `
        },
        blog10: {
            title: "What Home Means Here",
            body: `
                <p>People often ask what "Where every moment feels like home" means in practice. For us, it is not a slogan. It is a checklist of everyday behavior.</p>
                <p>Home means remembering preferences without making people repeat themselves. Home means handling delays with honesty, not excuses.</p>
                <p>Home means a space where you can celebrate loudly one day and sit quietly the next, and both feel equally welcome.</p>
                <p>It also means consistency. The same care on busy days and slow days, mornings and late nights, first visits and fiftieth visits.</p>
                <p>If guests leave feeling lighter than when they arrived, we know we are doing it right.</p>
            `
        }
    };


    // Get modal elements
    const blogModal = document.getElementById('blogModal');
    const blogTitle = document.getElementById('blogTitle');
    const blogBody = document.getElementById('blogBody');
    const closeModal = document.getElementById('closeModal');

    // Check if modal elements exist (they might not exist on all pages)
    if (!blogModal || !blogTitle || !blogBody || !closeModal) {
        return; // Exit if modal doesn't exist on this page
    }

    // Get all blog cards
    const blogCards = document.querySelectorAll('.blog-card');

    // Open modal when clicking on a blog card
    blogCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking directly on the button
            // (let button handle its own click if needed)
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
}

// Initialize blog modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogModal);
} else {
    // DOM is already loaded
    initBlogModal();
}

// ===============================
// CONSOLE MESSAGE (Optional)
// ===============================
console.log('%cCafe Mysa', 'color: #1a4d3e; font-size: 24px; font-weight: bold;');
console.log('%cWhere Every Moment Feels Like Home', 'color: #9fb968; font-size: 14px; font-style: italic;');
console.log('%cWebsite crafted with care', 'color: #6b7280; font-size: 12px;');

// ===============================
// INITIALIZATION MESSAGE
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    console.log('[OK] All systems loaded successfully');
    console.log('[OK] Navigation initialized');
    console.log('[OK] Scroll animations ready');
    console.log('[OK] Interactive elements active');
});

// ===============================
// MICRO-INTERACTIONS PACK
// ===============================

// Small utility helpers used by the interaction features below.
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const throttle = (fn, wait = 100) => {
    let inThrottle = false;
    let lastArgs;

    return (...args) => {
        if (inThrottle) {
            lastArgs = args;
            return;
        }

        fn(...args);
        inThrottle = true;

        setTimeout(() => {
            inThrottle = false;
            if (lastArgs) {
                fn(...lastArgs);
                lastArgs = null;
            }
        }, wait);
    };
};

const isTouchDevice = () => {
    return window.matchMedia('(pointer: coarse)').matches;
};

function initScrollProgressRail() {
    const pageRoot = document.documentElement;
    if (!pageRoot) {
        return;
    }

    const rail = document.createElement('div');
    rail.setAttribute('aria-hidden', 'true');
    rail.id = 'scrollProgressRail';
    rail.style.position = 'fixed';
    rail.style.top = '0';
    rail.style.left = '0';
    rail.style.width = '4px';
    rail.style.height = '100vh';
    rail.style.background = 'rgba(159, 185, 104, 0.12)';
    rail.style.zIndex = '9998';
    rail.style.pointerEvents = 'none';

    const thumb = document.createElement('div');
    thumb.id = 'scrollProgressThumb';
    thumb.style.width = '100%';
    thumb.style.height = '0%';
    thumb.style.background = 'linear-gradient(180deg, #1a4d3e 0%, #9fb968 100%)';
    thumb.style.transition = 'height 120ms linear';
    thumb.style.boxShadow = '0 0 12px rgba(26, 77, 62, 0.35)';
    rail.appendChild(thumb);

    document.body.appendChild(rail);

    const updateProgress = () => {
        const scrollTop = window.pageYOffset || pageRoot.scrollTop || 0;
        const docHeight = Math.max(
            pageRoot.scrollHeight,
            document.body.scrollHeight,
            pageRoot.offsetHeight,
            document.body.offsetHeight,
            pageRoot.clientHeight
        ) - window.innerHeight;

        const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
        thumb.style.height = `${clamp(ratio, 0, 1) * 100}%`;
    };

    updateProgress();
    window.addEventListener('scroll', throttle(updateProgress, 80), { passive: true });
    window.addEventListener('resize', throttle(updateProgress, 100));
}

function initPointerGlowCards() {
    if (isTouchDevice()) {
        return;
    }

    const glowTargets = document.querySelectorAll(
        '.menu-card, .info-card, .delivery-card, .signature-item, .blog-card'
    );

    if (glowTargets.length === 0) {
        return;
    }

    glowTargets.forEach((card) => {
        const computedPosition = window.getComputedStyle(card).position;
        if (computedPosition === 'static') {
            card.style.position = 'relative';
        }

        const glow = document.createElement('div');
        glow.setAttribute('aria-hidden', 'true');
        glow.style.position = 'absolute';
        glow.style.inset = '0';
        glow.style.borderRadius = 'inherit';
        glow.style.pointerEvents = 'none';
        glow.style.opacity = '0';
        glow.style.transition = 'opacity 220ms ease';
        glow.style.background =
            'radial-gradient(140px circle at var(--mx, 50%) var(--my, 50%), rgba(159, 185, 104, 0.17), transparent 70%)';
        card.appendChild(glow);

        card.addEventListener('mouseenter', () => {
            glow.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
        });

        card.addEventListener('mousemove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            glow.style.setProperty('--mx', `${x}px`);
            glow.style.setProperty('--my', `${y}px`);
        });
    });
}

function initBlogCardReadTime() {
    const blogCards = document.querySelectorAll('.blog-card');
    if (blogCards.length === 0) {
        return;
    }

    blogCards.forEach((card) => {
        if (card.querySelector('.blog-read-meta')) {
            return;
        }

        const preview = card.querySelector('.blog-preview');
        if (!preview) {
            return;
        }

        const text = preview.textContent || '';
        const words = text.trim().split(/\s+/).filter(Boolean).length;
        const readMinutes = Math.max(1, Math.round(words / 160));

        const meta = document.createElement('p');
        meta.className = 'blog-read-meta';
        meta.textContent = `${readMinutes} min read`;
        meta.style.marginTop = '0.6rem';
        meta.style.fontSize = '0.82rem';
        meta.style.letterSpacing = '0.02em';
        meta.style.color = '#6b7280';
        card.appendChild(meta);
    });
}

function initKeyboardShortcutsPanel() {
    const isBlogPage = Boolean(document.querySelector('#blog-home') || document.querySelector('#blog-posts'));
    const panelSeenStorageKey = 'mysaShortcutPanelSeenV1';

    const sections = isBlogPage
        ? [
            { key: '1', label: 'Blog Top', selector: '#blog-home' },
            { key: '2', label: 'Posts', selector: '#blog-posts' },
            { key: '3', label: 'Contact', selector: '#contact' }
        ]
        : [
            { key: '1', label: 'Home', selector: '#home' },
            { key: '2', label: 'Menu', selector: '#menu' },
            { key: '3', label: 'Order', selector: '#order' },
            { key: '4', label: 'Blog', selector: '#blog' },
            { key: '5', label: 'Contact', selector: '#contact' }
        ];

    const availableSections = sections.filter((item) => document.querySelector(item.selector));
    if (availableSections.length === 0) {
        return;
    }

    const panel = document.createElement('aside');
    panel.id = 'shortcutPanel';
    panel.setAttribute('aria-label', 'Keyboard shortcuts');
    panel.style.position = 'fixed';
    panel.style.right = '16px';
    panel.style.bottom = '16px';
    panel.style.zIndex = '9999';
    panel.style.padding = '10px 12px';
    panel.style.borderRadius = '12px';
    panel.style.background = 'rgba(255, 255, 255, 0.9)';
    panel.style.border = '1px solid rgba(26, 77, 62, 0.15)';
    panel.style.backdropFilter = 'blur(8px)';
    panel.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
    panel.style.fontSize = '12px';
    panel.style.lineHeight = '1.3';
    panel.style.color = '#1f2937';
    panel.style.maxWidth = '220px';
    panel.style.transition = 'opacity 180ms ease, transform 180ms ease';

    const title = document.createElement('strong');
    title.textContent = 'Jump keys';
    title.style.display = 'block';
    title.style.marginBottom = '6px';
    panel.appendChild(title);

    const list = document.createElement('div');
    availableSections.forEach((item) => {
        const row = document.createElement('div');
        row.textContent = `${item.key}: ${item.label}`;
        row.style.opacity = '0.85';
        row.style.marginBottom = '2px';
        list.appendChild(row);
    });

    const hint = document.createElement('div');
    hint.textContent = 'Press H to hide/show';
    hint.style.marginTop = '6px';
    hint.style.opacity = '0.65';
    hint.style.fontSize = '11px';

    panel.appendChild(list);
    panel.appendChild(hint);
    document.body.appendChild(panel);

    let hasSeenPanel = false;
    try {
        hasSeenPanel = window.localStorage.getItem(panelSeenStorageKey) === '1';
    } catch (error) {
        hasSeenPanel = false;
    }

    const applyPanelVisibility = (isHidden) => {
        panel.style.opacity = isHidden ? '0' : '1';
        panel.style.transform = isHidden ? 'translateY(8px)' : 'translateY(0)';
        panel.style.pointerEvents = isHidden ? 'none' : 'auto';
    };

    // Show on first-ever visit only; afterward keep hidden unless user presses H.
    let hidden = hasSeenPanel;
    applyPanelVisibility(hidden);

    if (!hasSeenPanel) {
        try {
            window.localStorage.setItem(panelSeenStorageKey, '1');
        } catch (error) {
            // Ignore storage failures (private mode/restricted storage).
        }
    }

    document.addEventListener('keydown', (event) => {
        const targetTag = event.target && event.target.tagName ? event.target.tagName.toLowerCase() : '';
        const isTypingTarget = targetTag === 'input' || targetTag === 'textarea' || Boolean(event.target && event.target.isContentEditable);

        if (isTypingTarget) {
            return;
        }

        if (event.key.toLowerCase() === 'h') {
            hidden = !hidden;
            applyPanelVisibility(hidden);
            return;
        }

        const match = availableSections.find((item) => item.key === event.key);
        if (!match) {
            return;
        }

        const section = document.querySelector(match.selector);
        if (!section) {
            return;
        }

        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = section.offsetTop - navHeight - 14;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
}

function initStaggerRevealWithObserver() {
    const targets = document.querySelectorAll('.reveal');
    if (targets.length === 0 || !('IntersectionObserver' in window)) {
        return;
    }

    targets.forEach((el, index) => {
        el.style.transitionDelay = `${(index % 6) * 50}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach((target) => observer.observe(target));
}

function initMicroInteractions() {
    initScrollProgressRail();
    initPointerGlowCards();
    initBlogCardReadTime();
    initKeyboardShortcutsPanel();
    initStaggerRevealWithObserver();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMicroInteractions);
} else {
    initMicroInteractions();
}



