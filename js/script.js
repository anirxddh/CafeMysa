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
            title: "Coffee Culture in Ranchi is Growing — And Cafe Mysa is Leading It",
            body: `
                <p>Ranchi has quietly but confidently stepped into its café era. Walk through New Alkapuri, Harmu, or Kanke Road today and you'll find coffee shops that hold their own against anything in Bengaluru or Pune — but among all the new openings, one name keeps rising to the top of every local conversation: Cafe Mysa.</p>
                <p>Tucked along Bypass Road in New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002 — this place has become more than just somewhere to grab a cup of coffee. It has become a destination, a habit, and for many people across Ranchi, an essential part of how they start their mornings, wind down their evenings, or simply slow down in the middle of a busy week.</p>
                <p>Open every single day from 7:30 AM all the way to 2:00 AM, Cafe Mysa accommodates early risers, students, working professionals, and night owls alike. That kind of generosity with hours — rare among cafés anywhere in Jharkhand, let alone Ranchi — sends a message: this place is built for real people with real schedules, not just for the weekend brunch crowd.</p>
                <p>The location on Bypass Road is easy to reach whether you're coming from Morabadi, Booty More, Kantatoli, or the residential stretches around Daud Nagar. From the moment you step inside, the outside world seems to shift a little further away.</p>
                <p>The ambience is warm and considered — cosy without being cramped, stylish without tipping into cold or performative. Reviewers have described it as feeling like “an oasis in the middle of a busy city,” the kind of space where solitude feels earned and conversation feels easy.</p>
                <p>The lighting is gentle, the seating is built for comfort, and the atmosphere carries that rare quality where you feel no pressure to leave — a quality that has earned Cafe Mysa a 4.4-star rating on Google across more than 1,200 reviews, which for a café in Ranchi is not just impressive but genuinely difficult to sustain.</p>
                <p>That kind of consistent positive response, built across hundreds of visits and thousands of interactions, tells you something no amount of marketing can manufacture: people come here, enjoy themselves, and come back.</p>
                <p>The coffee is a big part of why. From carefully pulled espresso drinks to cold brews to creative seasonal frappes — the strawberry matcha frappe has become something of a signature, praised by visitors for its “perfect balance of strawberry sweetness with matcha.”</p>
                <p>The drinks menu is designed for people who have moved well past the instant-coffee stage and want something made with intention. The team behind the bar takes its craft seriously, and it shows in both flavour and consistency.</p>
                <p>What truly separates Cafe Mysa from the growing crowd of coffee shops in Ranchi, though, is the fact that the food matches the drinks in ambition and execution.</p>
                <p>This is not a café that treats the menu as an afterthought. The chicken lasagna is a dish regulars mention by name. The chicken steak sizzler arrives with drama and flavour, and the fish fingers — crispy, fresh, and well-seasoned — have earned their own loyal following.</p>
                <p>For those with a sweet tooth, the Ferrero Rocher milkshake is rich and indulgent in exactly the right way, and the brownie sizzler is the kind of dessert that ends a meal on a high note.</p>
                <p>The menu spans continental flavours, café classics, and desserts that feel genuinely crafted rather than bought in.</p>
                <p>Whether you're a student, a family, a professional passing through Ranchi, or a couple out for the evening, Cafe Mysa delivers something worth returning for.</p>
                <p>In a city whose café scene is growing quickly and confidently, Cafe Mysa isn't just keeping up — it's setting the pace.</p>
                <p>If you haven't been yet, the address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002, the phone is +91 92638 54720, and the doors are open from 7:30 AM to 2:00 AM every day.</p>
            `
        },
        blog2: {
            title: "Ranchi’s Most Aesthetic Cafe for Photos and Hangouts",
            body: `
                <p>There is a moment that happens in every great café — the moment you walk in and immediately reach for your phone, not because you planned to, but because the space in front of you simply demands to be captured.</p>
                <p>That moment happens consistently at Cafe Mysa, located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, and it is a big part of why this café has become the most talked-about hangout spot among Ranchi's students, young professionals, and anyone who believes that where you sit matters as much as what you order.</p>
                <p>A café today is not just a place to consume food and drink — it is a place where people come to feel something, to slow down, to connect, and yes, to capture moments worth sharing.</p>
                <p>Cafe Mysa understands this completely, and its interiors reflect that at every turn. The lighting is warm and deliberate — the kind that softens everything just enough and makes faces glow naturally.</p>
                <p>The seating is thoughtfully arranged so that every corner feels intentional. Every seat is a good seat, and every angle is a potential frame.</p>
                <p>The décor balances cosy and stylish — warm in texture, yet visually sharp enough to avoid feeling dated.</p>
                <p>This is not accidental. Ranchi’s café scene has grown rapidly, and people now understand the difference between a place that looks good and one that *feels* good.</p>
                <p>Cafe Mysa has earned its reputation not through one dramatic design choice, but through a hundred small, thoughtful decisions.</p>
                <p>What makes Cafe Mysa more than just aesthetic, however, is the experience behind the visuals.</p>
                <p>The coffee is crafted with care — the strawberry matcha frappe has become a signature drink, praised widely for its balance and originality.</p>
                <p>The food goes beyond expectations. Chicken lasagna, chicken steak sizzler, fish fingers, Ferrero Rocher milkshake, and brownie sizzler all deliver both in taste and presentation.</p>
                <p>This is a place where people stay, order across courses, and enjoy the experience.</p>
                <p>Open daily from 7:30 AM to 2:00 AM, the café adapts to every mood — brunch, study sessions, evening hangouts, and late-night conversations.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, Cafe Mysa stands as Ranchi’s most complete aesthetic café experience.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002, and the number is +91 92638 54720.</p>
            `
        },
        blog3: {
            title: "Where Ranchi’s Instagram Crowd Loves to Hang Out",
            body: `
                <p>There is a certain kind of place that the internet has made people hunger for — a space that looks as good as it feels.</p>
                <p>In Ranchi, that place is Cafe Mysa.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, Cafe Mysa has become the city's go-to destination for content creators, students, couples, and friend groups.</p>
                <p>What makes it special is that it achieves this without feeling forced or artificial.</p>
                <p>The interiors are thoughtfully designed — warm lighting, cosy seating, modern décor, and photogenic corners everywhere you look.</p>
                <p>Every detail contributes to a space that feels alive rather than staged.</p>
                <p>This is why Ranchi’s Instagram crowd keeps returning — consistency.</p>
                <p>Whether morning or evening, every visit offers something visually unique.</p>
                <p>The café is open from 7:30 AM to 2:00 AM, making it accessible at all times of the day.</p>
                <p>The drinks and food are just as photogenic as the space itself.</p>
                <p>The strawberry matcha frappe is one of the most shared drinks in Ranchi — visually striking and genuinely delicious.</p>
                <p>The Ferrero Rocher milkshake is indulgent and eye-catching.</p>
                <p>The brownie sizzler arrives sizzling, creating a moment that is almost impossible not to capture.</p>
                <p>The food menu complements the experience — chicken lasagna, chicken steak sizzler, and fish fingers are consistently well-presented and satisfying.</p>
                <p>This combination has earned Cafe Mysa a 4.4-star rating across more than 1,200 reviews.</p>
                <p>Students, professionals, and visitors from cities like Jamshedpur, Dhanbad, and Bokaro all make it a point to visit.</p>
                <p>Cafe Mysa is not just visually appealing — it is genuinely enjoyable.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002, and the café is open every day from 7:30 AM to 2:00 AM.</p>
            `
        },
        blog4: {
            title: "Where Couples in Ranchi Love to Spend Their Evenings",
            body: `
                <p>There is something quietly powerful about the right café at the right hour.</p>
                <p>In Ranchi, that place is Cafe Mysa.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it has become a naturally romantic spot without trying too hard.</p>
                <p>The lighting is warm and intimate, the seating is thoughtfully spaced, and the ambience allows conversations to flow naturally.</p>
                <p>Unlike louder restaurants, Cafe Mysa keeps its energy calm and relaxed.</p>
                <p>This makes it ideal for meaningful, unhurried conversations.</p>
                <p>The café is open from 7:30 AM to 2:00 AM, making it perfect for morning dates, evening outings, and late-night conversations.</p>
                <p>The food and drinks enhance the experience.</p>
                <p>The brownie sizzler creates a shared moment, the Ferrero Rocher milkshake adds indulgence, and dishes like chicken steak sizzler and chicken lasagna make full meals satisfying.</p>
                <p>Fish fingers offer a lighter, shareable option.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, the café has built a reputation for consistency and comfort.</p>
                <p>For couples in Ranchi, Cafe Mysa offers an experience that feels effortless yet special.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
            `
        },
        blog5: {
            title: "The Café Ranchi Locals Keep Recommending",
            body: `
                <p>The best places in any city rarely announce themselves loudly. They grow through honest recommendations — one person telling another about a genuinely good experience.</p>
                <p>In Ranchi, that place is Cafe Mysa.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it has built its reputation through consistency rather than marketing.</p>
                <p>Students, professionals, families, and creatives across Ranchi all seem to arrive at the same conclusion: this café delivers.</p>
                <p>The space is warm and thoughtfully designed, with cosy seating, soft lighting, and a balanced atmosphere that feels lively but not overwhelming.</p>
                <p>There are no rough edges to the experience — everything flows smoothly.</p>
                <p>Open daily from 7:30 AM to 2:00 AM, Cafe Mysa is available whenever people need it.</p>
                <p>The coffee is crafted with care, with the strawberry matcha frappe standing out as a signature favourite.</p>
                <p>The food is equally strong — chicken lasagna, chicken steak sizzler, fish fingers, brownie sizzler, and Ferrero Rocher milkshake all contribute to a menu worth recommending.</p>
                <p>This consistency has earned the café a 4.4-star rating across more than 1,200 reviews.</p>
                <p>In Ranchi’s growing café scene, Cafe Mysa has become the place people naturally suggest when asked where to go.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
            `
        },
        blog6: {
            title: "How One Café Is Winning Hearts Across Ranchi",
            body: `
                <p>Every city eventually finds a café that becomes more than just a place to eat — a shared reference point.</p>
                <p>In Ranchi, that café is Cafe Mysa.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it has been steadily winning people over through consistent experiences.</p>
                <p>The ambience is warm and inviting, with soft lighting, comfortable seating, and modern décor that balances style and comfort.</p>
                <p>The service adds to the experience — attentive, genuine, and welcoming.</p>
                <p>Open every day from 7:30 AM to 2:00 AM, Cafe Mysa fits into every part of the day.</p>
                <p>What turns visitors into regulars is the quality of the food and coffee.</p>
                <p>The strawberry matcha frappe has become a widely recognised signature drink.</p>
                <p>The chicken lasagna, chicken steak sizzler, fish fingers, brownie sizzler, and Ferrero Rocher milkshake all deliver consistently.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, the café has built a loyal following across Ranchi and beyond.</p>
                <p>Cafe Mysa has become a place people return to — not just for what it offers, but for how it makes them feel.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
            `
        },
        blog7: {
            title: "A Perfect Weekend Escape in the Middle of Ranchi",
            body: `
                <p>There is a kind of exhaustion that builds during the week — and weekends are meant to break that rhythm.</p>
                <p>In Ranchi, Cafe Mysa offers exactly that escape.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it provides a space where time slows down.</p>
                <p>Weekend mornings here are calm and inviting, with warm lighting and a relaxed atmosphere.</p>
                <p>Friends, families, and couples often find themselves staying longer than planned.</p>
                <p>The café offers a break from the usual pace — a place to sit, talk, and unwind without pressure.</p>
                <p>Open from 7:30 AM to 2:00 AM, it accommodates every kind of weekend plan.</p>
                <p>The food complements the experience perfectly.</p>
                <p>The chicken lasagna anchors slow brunches, the chicken steak sizzler adds richness, and fish fingers offer easy sharing.</p>
                <p>The brownie sizzler serves as the perfect dessert, while drinks like the strawberry matcha frappe and Ferrero Rocher milkshake enhance the experience.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, Cafe Mysa has become Ranchi’s go-to weekend café.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
            `
        },
        blog8: {
            title: "A Student-Friendly Café Ranchi’s Young Crowd Loves",
            body: `
                <p>Student life in Ranchi can be demanding, and finding the right space to unwind matters.</p>
                <p>Cafe Mysa has become that space.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it offers an environment that feels welcoming and relaxed.</p>
                <p>The seating supports both group discussions and solo study sessions.</p>
                <p>The lighting is warm, and the atmosphere allows students to stay without feeling rushed.</p>
                <p>Open daily from 7:30 AM to 2:00 AM, it fits perfectly into student schedules.</p>
                <p>The coffee menu caters to all preferences, with the strawberry matcha frappe standing out.</p>
                <p>The food menu is equally strong — chicken lasagna, chicken steak sizzler, fish fingers, brownie sizzler, and Ferrero Rocher milkshake all offer quality and variety.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, Cafe Mysa has become a favourite among Ranchi’s student community.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
            `
        },
        blog9: {
            title: "The Café in Ranchi That Feels Like a Second Home",
            body: `
                <p>There is a difference between a café you visit and a café you belong to.</p>
                <p>In Ranchi, Cafe Mysa has become that second kind of place.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it offers a space that feels familiar and welcoming.</p>
                <p>The ambience is warm, the seating is comfortable, and the service feels personal without being intrusive.</p>
                <p>Open every day from 7:30 AM to 2:00 AM, it remains accessible at all times.</p>
                <p>The food and coffee reinforce the experience.</p>
                <p>The chicken lasagna, chicken steak sizzler, fish fingers, brownie sizzler, and Ferrero Rocher milkshake have become favourites among regulars.</p>
                <p>The strawberry matcha frappe remains a standout drink.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, Cafe Mysa has built a loyal community.</p>
                <p>It is not just a café — it is a place people return to again and again.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
            `
        },
        blog10: {
            title: "The Café in Ranchi Everyone Ends Up Talking About",
            body: `
                <p>Some cafés grow through marketing. Others grow through conversation.</p>
                <p>Cafe Mysa belongs to the latter.</p>
                <p>Located on Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand — 834002, it has become one of the most talked-about cafés in the city.</p>
                <p>The atmosphere is warm, inviting, and thoughtfully designed.</p>
                <p>People come in for a quick visit and often stay much longer than planned.</p>
                <p>Open from 7:30 AM to 2:00 AM daily, it fits into every schedule.</p>
                <p>The coffee is crafted with care, with the strawberry matcha frappe leading the menu.</p>
                <p>The food delivers consistently — chicken lasagna, chicken steak sizzler, fish fingers, brownie sizzler, and Ferrero Rocher milkshake all contribute to the experience.</p>
                <p>With a 4.4-star rating across more than 1,200 reviews, the reputation is built on real experiences.</p>
                <p>Cafe Mysa continues to be the place people recommend, revisit, and talk about.</p>
                <p>The address is Bypass Road, New Alkapuri, Daud Nagar, Ranchi, Jharkhand 834002.</p>
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



