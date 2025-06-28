gsap.registerPlugin(ScrollTrigger);

function startTyping() {
    new Typed('#typed', {
        strings: ['Full Stack Developer', "Open Source Contributor", 'Freelancer'],
        typeSpeed: 60,
        loop: true,
        cursorChar: ''
    });

}

startTyping()

function aboutPageAnimation() {
    gsap.from("#about span", {
        y: 100,
        x: -100,
        opacity: 0,                // Fully transparent
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,              // Delay between each span
        scrollTrigger: {
            trigger: "#about",       // Element to trigger animation
            scroller: "body",        // Use body as scroller
            start: "top 80%",        // When the top of #about hits 80% of viewport
            end: "top 10%",          // Optional: when to end
            scrub: 1         // Show start/end markers for debugging
        }
    });
}

aboutPageAnimation();

function skillAnimation() {

    gsap.to("#progress", {
        width: "100%",
        duration: 2,
        scrollTrigger: {
            trigger: "#skills",
            scroller: "body",
            start: "top 100%",
            end: "top 30%",
            scrub: 1,
            // markers:true
        }
    });

    gsap.from(".skill", {

        opacity: 0,
        scale: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#skills",
            scroller: "body",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            // markers:true
        }
    });
}

skillAnimation()
