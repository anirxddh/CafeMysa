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
 
    const blogContent = {
        blog1: {
            title: "The Window Seat at 8:10 AM",
            body: `
                <p>Every weekday morning, without fail, a school teacher walks in at 8:10 AM. She always takes the window seat on the left—not because it has the best light, but because it faces the street and she likes watching the city figure itself out.</p>
 
                <p>She places a steel tiffin beside her cup. Old habit, she once explained. She carries it everywhere, even when she's not planning to eat from it. It's just one of those objects that makes a bag feel complete.</p>
 
                <p>She calls this twenty-minute pause her "quiet class before class." Twenty minutes where no one is raising their hand, no one needs help spelling anything, and no question needs an answer. Just her, the cappuccino, and a notebook that's more underlined than written in.</p>
 
                <p>She doesn't scroll her phone. She doesn't earphone herself out of the room. She just sits there and watches people arrive and leave, the way you watch rain without any particular reason.</p>
 
                <p>Over time, the team figured out her rhythm. The cup started reaching the table just as sunlight touches the edge of that chair. Not because anyone planned it consciously—it just happened. You notice things about people when they come in every day. You start moving around their routine without even meaning to.</p>
 
                <p>She never asked for this. She never mentioned it. One day, one of the team realized it was happening and pointed it out quietly, and everyone sort of smiled and went back to work.</p>
 
                <p>That's most of what good hospitality is, honestly. Not announcements. Not gestures. Just paying attention and acting on it before someone has to say anything.</p>
 
                <p>She told us once, in passing, that this is the only part of her day where no one needs anything from her. That landed quietly. A teacher spends nine hours being needed in every possible direction—patience, explanations, encouragement, discipline, compassion—and she comes here just to exist for twenty minutes without any of that weight.</p>
 
                <p>We don't take that lightly. A person choosing to spend their only free moment in your space is not a small thing. It means the place felt safe enough, quiet enough, consistent enough to become part of someone's daily architecture.</p>
 
                <p>If you have your own "8:10 seat" here—if there's a corner or a table or a chair by the window that you've quietly decided is yours—we see it. We're glad you found it. And we'll keep it warm.</p>
            `
        },
        blog2: {
            title: "How the Strawberry Matcha Became a Ritual",
            body: `
                <p>It started with someone pointing at the menu and saying, "I'm not sure I'll like this, but okay, let me try."</p>
 
                <p>That's it. That's the whole origin story of what is now, by a significant margin, the most talked-about drink we make.</p>
 
                <p>She took a sip. Made a small face—not a bad face, just a thinking face, the kind people make when something is different from what they expected but in a way they haven't decided about yet. Then she took another sip. Then she sat back and said, "Okay. This is actually something."</p>
 
                <p>She came back two days later with three friends. Ordered four of the same thing before anyone had even sat down properly. The friends were skeptical. Then they weren't.</p>
 
                <p>A week later, they were a Friday group. Same table, roughly same time, slightly different chaos depending on the week. Then they brought cousins who were visiting from out of town. Then coworkers who'd heard about it. Then classmates from college who'd moved to Ranchi for work and needed something that felt like catching up.</p>
 
                <p>Now we sometimes hear "same table, same drink, same Friday" said like it's a password. And in a way, it is. It means: this is the place where we decompress. This is where we stop being our weekday selves for a couple of hours.</p>
 
                <p>People always ask what makes it work as a flavor. And the matcha and strawberry combination is genuinely well-balanced—there's a bitterness from the matcha that the sweetness doesn't just cover but actually plays against, and the result is something that doesn't taste like either ingredient alone. It tastes like both of them being better because the other one is there.</p>
 
                <p>But that's not really why it became what it became.</p>
 
                <p>It became a ritual because of that first Friday. Because four friends needed a reason to sit together at the end of a week that had been too long, and this drink was on the table when they finally exhaled. The body makes associations. The next time you're exhausted and you want that feeling again, you come back for the thing that was there.</p>
 
                <p>Some drinks quench thirst. Every once in a while, one of them becomes the taste of a specific kind of relief. This one did both, and we're glad it did.</p>
            `
        },
        blog3: {
            title: "After 11 PM: The Quiet Crowd",
            body: `
                <p>After 11 PM, the cafe becomes a slightly different place. Not dramatically different—the chairs are the same, the menu is the same—but the mood shifts in a way that's hard to describe without sounding vague. It gets quieter, obviously. But it also gets more honest.</p>
 
                <p>People are tired. They've been performing their daytime selves for twelve, fourteen hours. By 11 PM, they've stopped holding their posture together. Bags go on chairs instead of laps. Shoes sometimes come half off under the table. Conversations move slower and land differently.</p>
 
                <p>We see nurses after duty. Not still in scrubs, usually, but you can tell—there's a particular kind of tired that a full hospital shift produces and it sits in the shoulders and eyes in a specific way. They usually want tea and something warm to eat and a table where nobody will bother them.</p>
 
                <p>We see developers who've been staring at one problem for six hours and need to be in a room with other humans before going home. They don't want to talk about the problem. They want to sit in ambient noise and let their brain stop grinding.</p>
 
                <p>We see friends who haven't been in the same city at the same time in months. They always arrive slightly breathless, slightly disbelieving that this is actually happening. The conversation starts in the middle of something, because they've been having it in their heads for weeks already.</p>
 
                <p>Nobody at this hour is in a hurry. Nobody is performing for anyone. A table of four at 11:30 PM is completely different from a table of four at 7 PM. The laughter is shorter, more sudden, more genuine. The silences between talking are comfortable instead of awkward.</p>
 
                <p>The orders change too. More tea. More of the warm things. Less of the elaborate. People want something that doesn't require much decision-making because they've already made too many decisions today and their brain is done.</p>
 
                <p>These hours remind us that good hospitality is often quiet. It's a glass of water brought before someone asks. It's not hovering when a table goes silent for a while. It's the small, considered things that people don't notice until they're somewhere that doesn't do them.</p>
 
                <p>By midnight, the city outside has mostly decided to stop. In here, for a few more hours, there are still people who aren't ready to let the day end. We're glad they have somewhere to come.</p>
            `
        },
        blog4: {
            title: "A Birthday for Twelve, Planned in Forty Minutes",
            body: `
                <p>The call came in at 7:20 in the evening. One of the group was on the phone, speaking in the specific hushed voice of someone standing in a bathroom or a stairwell trying not to be heard.</p>
 
                <p>"We have about forty minutes. Twelve people. It's her birthday. She has no idea. We have a cake. We have literally nothing else. Can you help us?"</p>
 
                <p>Here's the thing about surprise birthdays: by the time someone calls asking for help, they're already panicking, and the panic is contagious. You have to stay calm enough for both of you or the whole thing falls apart before anyone's even arrived.</p>
 
                <p>"Come in. We'll sort it."</p>
 
                <p>Two tables became one long arrangement in about four minutes. Spare candles came out—the proper ones, not the emergency backup ones. Someone found a playlist that felt celebratory without being generic, which is harder to do than it sounds. Someone else sorted a small area near the table so the group could stand together without blocking the rest of the room.</p>
 
                <p>Nothing was expensive. Nothing was elaborate. It was just a series of small things done quickly by people who genuinely wanted it to work.</p>
 
                <p>The birthday girl arrived thinking it was just dinner. She'd had a long week and was slightly relieved it was just going to be a low-key evening. She walked in, looked at the table, looked at the faces, and then the lights shifted slightly and everyone stood up and the song started and she cried before the first line ended.</p>
 
                <p>Not sad crying. The kind that happens when something catches you off guard in the best way—when you realize people went out of their way for you on a Tuesday evening when everyone had their own things to deal with.</p>
 
                <p>The group stayed until close. The cake was finished. The table looked like a celebration had happened on it, which is exactly what it should look like.</p>
 
                <p>What worked that night wasn't budget or décor. It was the group's decision to try, the forty-minute scramble, and the team's willingness to move quickly and care about the outcome. Everyone brought one small thing to the right moment.</p>
 
                <p>That's our favorite kind of evening. The ones nobody planned perfectly but everybody felt completely.</p>
            `
        },
        blog5: {
            title: "Notes from the Kitchen Pass",
            body: `
                <p>Most guests see the finished plate. That's the point—that's what the plate is for. But the story of how it got there starts earlier, at the kitchen pass, where every dish goes through one last moment of assessment before it leaves.</p>
 
                <p>There's a question that gets asked repeatedly, sometimes out loud and sometimes just internally: "Would this feel comforting if someone ordered it after a long day?" Not "Is it technically correct?" Not "Does it look good?" Those matter, but they're earlier questions. This one is the final one.</p>
 
                <p>If the answer is uncertain, something changes. Sometimes it's the spice balance—something that reads fine on its own can feel harsh when you're already tired and your nerves are a bit frayed. Sometimes it's texture, because comfort food has a specific relationship with texture that isn't about technique but about how it feels to eat. Sometimes it's proportion—whether the dish has enough of the thing that made someone want it in the first place.</p>
 
                <p>We design a lot of the menu with sharing in mind because that's how most tables here actually eat. Someone orders, someone else points at it, someone asks for a second fork. The food should work for that—it should be portioned and structured so it reaches the middle of the table naturally rather than feeling like a dish that demands individual possession.</p>
 
                <p>There are things on the menu that look simple and took a long time to get right. Not because the technique is complicated but because "simple" is unforgiving. When there are only three things in a dish, every single one of them has to be exactly as good as it should be. There's nothing to lean on.</p>
 
                <p>The chicken lasagna took a while. Not the construction of it—that's consistent and precise—but the balance. Getting it to feel rich without being heavy, satisfying without being the kind of meal that makes you want to stop moving for two hours afterwards. The fish fingers took a while too, mostly around the seasoning, which sounds like a minor thing until you've tasted the version before we got it right and then the version after.</p>
 
                <p>Comfort food is not accidental. It is not just cooking something familiar and hoping muscle memory does the rest. It is built through small decisions, made consistently, by people who are paying attention. We are paying attention.</p>
            `
        },
        blog6: {
            title: "The People Behind the Counter",
            body: `
                <p>Most guests remember the food first. That's fair. That's usually why people come back—because something tasted right and they want it to taste right again.</p>
 
                <p>But regulars remember people. They remember the person who asked "usual?" without checking any notes, just from memory. They remember the one who noticed they looked like they'd had a rough week and suggested something lighter without making it a whole thing. They remember the small moments where someone saw them instead of just their order.</p>
 
                <p>The team here includes people across very different timings. The early-shift openers arrive before most of the city has started making decisions about the day. They set up alone or in pairs, in a quiet that only exists in cafes in the hour before the first guests arrive. The afternoon runners handle the bulk of the traffic—the lunch crowd, the post-class groups, the midday meetings. The late-night closers are a specific kind of person: patient, unhurried, good at reading when a table wants company and when it wants to be left alone.</p>
 
                <p>Different timings, same intention. Make every single person who walks in feel like they belong here.</p>
 
                <p>A lot of this work is invisible in the way that all good work is invisible. Timing a refill so it arrives before someone consciously notices they want one. Resetting a table quickly and quietly while the next guests are still coming through the door. Handling a mistake—a wrong order, a longer wait than expected—with honesty and calm, without over-explaining, without making the guest feel like they've caused a problem by having a problem.</p>
 
                <p>There's also something that doesn't get talked about enough: the energy of showing up, shift after shift, and choosing warmth on purpose. Not performed warmth, not scripted warmth—the real kind, where you're genuinely curious about how someone's day is going and you mean it when you say you're glad they came in. That's harder than it sounds. It requires actually caring, and caring is not a resource that replenishes automatically.</p>
 
                <p>The team here cares. You might not notice it explicitly. You're probably not supposed to. But you'll feel it—in the texture of the hour you spend here, in the fact that you left in a slightly better mood than you arrived in. That's them. That's what they do on purpose, every single day.</p>
            `
        },
        blog7: {
            title: "Rainy Day at Mysa",
            body: `
                <p>Monsoon afternoons in Ranchi announce themselves in a particular way. The air gets heavy and still, then the sky shifts to a specific shade of grey-green that people who've grown up here recognize immediately, and then usually within about four minutes, the rain starts and it means it.</p>
 
                <p>On one afternoon, the first few people through the door were still laughing from running. Wet bags. Damp dupattas folded over chair backs. One person with an inside-out umbrella that had clearly lost a fight. Everyone looked slightly chaotic in the way that unexpected rain makes everyone look—slightly undignified and completely fine with it.</p>
 
                <p>The team had pulled extra chairs near the entrance without being asked, because this happens enough that everyone knows what to do. Tissues appeared on the tables near the door. A pair of shoes ended up drying by the entryway and nobody made it a thing.</p>
 
                <p>The orders shifted naturally. More soup. More of the hot drinks. The cold frappes that usually move quickly on warm afternoons barely got ordered. People wanted warm things to hold. The food that went out was mostly the heavier, more comforting items—the kind of meal that feels like a reason to stay put.</p>
 
                <p>Nobody was in a hurry. The rain outside made that simple. Nobody wants to leave into a monsoon downpour before they have to, which meant tables stayed occupied longer, conversations deepened, and the usual lunch-hour energy mellowed into something more Sunday-afternoon.</p>
 
                <p>At one point, a guest offered to share her charging socket with the person at the next table. They got talking. It turned out they'd both lived abroad for a while and moved back to Ranchi around the same time for similar reasons. By the time the rain slowed down, they'd exchanged book recommendations and agreed on a café they both wanted to try in Lalpur.</p>
 
                <p>That's the thing about shared bad weather. It's a social leveler. Everyone's a little damp, everyone's schedule has been disrupted by something nobody planned for, and somehow that makes it easier to talk to the person next to you.</p>
 
                <p>By evening, the streets were wet and clean and the air had that specific post-rain smell that's one of the better smells a city can produce. People left in better moods than they'd arrived in, which had nothing to do with us and everything to do with the rain and the way a monsoon afternoon can, if you're somewhere comfortable when it happens, feel like an unexpected gift.</p>
            `
        },
        blog8: {
            title: "The Long Table Diaries",
            body: `
                <p>There's a long table near the back that has, in any given week, hosted: a mock job interview, a startup pitch rehearsal (with one person playing three different types of skeptical investor), a group assignment that was due in six hours, a product launch plan on three sticky-note covered pages, a very long breakup debrief between two friends, and one person who sat alone for four hours writing something they wouldn't tell us about.</p>
 
                <p>It's become the table that people come to when they need to actually do something, not just be somewhere. The seating works for groups and pairs. The layout means you can spread out without inconveniencing the next group. It has the right angle to the power outlets.</p>
 
                <p>Students use it for the kind of group study that starts as studying and becomes mostly talking, then becomes studying again around the third hour when the deadline starts feeling real. Freelancers use it for deep work—the kind where they put headphones on and you don't see them surface for two hours and then they suddenly pack up and leave with the specific speed of someone who has just finished something.</p>
 
                <p>Founders use it for planning sessions. These are identifiable because there's always at least one person talking with their hands a lot, and the table ends up with a ring of cups around a central zone of notebooks and phones propped at odd angles showing reference material.</p>
 
                <p>What all of them need is the same short list of things. Wi-Fi that works consistently. Service that checks in without hovering. An environment where staying for another hour doesn't feel like an imposition—where nobody is giving you looks or clearing your cup before it's empty just to signal that your time is up.</p>
 
                <p>We have watched two people start talking at that table because they were both working on problems in adjacent industries and one of them asked the other a question about something they overheard. They left with each other's contact details and, from what we understand, ended up collaborating on something a few months later.</p>
 
                <p>We've watched a group of three friends turn a table of notebooks into a business plan over the course of several Sundays. They still come in, less frantically now, and the notebooks have been replaced by a laptop and a more settled energy.</p>
 
                <p>Sometimes all progress needs is a table that doesn't rush you, decent coffee, and enough hours to think something through properly. We have all three. The rest is up to whoever sits down.</p>
            `
        },
        blog9: {
            title: "Sundays with Families",
            body: `
                <p>Sunday afternoon tables are a completely different kind of occupation. They arrive in waves—usually the grandparents first because they've been ready since noon, then the middle generation managing children and parking simultaneously, then whoever was running late and has already texted three apologies.</p>
 
                <p>The children choose seats by a logic that has nothing to do with the adults around them. The window because there's something outside. The corner because it feels like their own territory. The seat next to the grandparent because they know that's where the best snacks and the most lenient opinions live.</p>
 
                <p>Someone always asks for an extra plate "just in case." We learned early on that "just in case" usually means "definitely yes" and started bringing it without being asked. It's a small thing that saves a whole back-and-forth that nobody really wants to have.</p>
 
                <p>These tables are not about efficiency. Nothing about them is efficient and that's exactly as it should be. The menu takes a while to settle because everyone has an opinion and the children have changed their minds twice. The meal arrives over a span of time because different things cook at different speeds and families eat at different speeds anyway. The bill discussion at the end is an entire ritual in itself, with the kind of insistence and counter-insistence that suggests this conversation has been happening at every family table for at least two generations.</p>
 
                <p>There are always stories being told that someone at the table has heard before but listens to again, because the story isn't really the point—the telling of it is. The grandmother explaining something about how things used to be done. The father's version of an event that the mother's version is slightly different from. The children not fully listening but absorbing more than they realize.</p>
 
                <p>By the end of it, someone is packing food to take home for someone who couldn't make it. Someone is already suggesting next Sunday. Someone is still finishing the last sip of their tea because they're not ready to let the afternoon end.</p>
 
                <p>This is hospitality at its most fundamental: giving people a comfortable place to spend time together. Not a particularly glamorous version of what we do, but honestly, one of the most important. Good family afternoons don't happen by accident. They need a room that's okay with the noise, patient enough for the pace, and set up to make sharing easy. We try to be all of that, every Sunday, without making a fuss about it.</p>
            `
        },
        blog10: {
            title: "What Home Means Here",
            body: `
                <p>"Where every moment feels like home" is on the wall. People read it when they walk in, and occasionally someone asks what it actually means in practice. It's a fair question. Slogans are easy. Living one is the harder part.</p>
 
                <p>For us it means, practically, a short list of behaviors that get repeated without exception.</p>
 
                <p>Home means remembering. Not just orders, though that too—but the preferences around the order. The person who always wants less ice. The one who prefers the pasta with a specific small modification they mentioned once, three months ago, as if it was a minor thing. The couple who shares one dessert and always needs two spoons without having to ask. Remembering these things is not a skill. It's a decision to pay attention and keep paying attention.</p>
 
                <p>Home means handling mistakes honestly. Things go wrong in any kitchen, in any service. Dishes take longer than they should. An order comes out different from what was asked for. The honest response—"I'm sorry, here's what happened, here's what we're going to do about it"—is the only one that works. Excuses, redirection, excessive apology that turns the guest's problem into managing your feelings about the problem—none of that is what home does. Home admits the mistake and fixes it.</p>
 
                <p>Home means the same welcome on a quiet Tuesday afternoon as on a packed Friday night. It means not making people who come in during a rush feel like they've arrived at a bad time. It means not making solo diners feel like their table is a loss. It means consistency of warmth, which is harder than consistency of any technical thing, because warmth requires energy and energy requires genuine care and genuine care has to be chosen deliberately, every single day.</p>
 
                <p>Home also means you can be different versions of yourself here and all of them are welcome. Loud, celebrating, a table of twelve versions. Quiet, working, headphones in, don't-talk-to-me versions. Halfway through crying about something and needing a cup of tea and fifteen minutes before you're ready to go back outside versions. All of these have sat at these tables. All of them left without feeling like they were too much, or not enough, or the wrong kind of guest.</p>
 
                <p>If people leave feeling lighter than when they arrived—not because anything dramatic happened, but because for an hour or two they were somewhere that felt like it was on their side—then the sign on the wall is doing its job. That's what we're trying to build. Not the most impressive place in the city. Just the one that feels most like it was made for you.</p>
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



