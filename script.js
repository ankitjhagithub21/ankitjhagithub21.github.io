gsap.registerPlugin(ScrollTrigger);

function startLocoMotive() {

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

startLocoMotive()

function startTyping() {

  const typed = new Typed('#typed', {
    strings: ['Full Stack Developer', "Open Source Contributor", 'Freelancer'],
    typeSpeed: 60,
    loop: true,
    cursorChar: ''
  });


}

startTyping()


function cursorAnimation() {


  document.querySelector('#main').addEventListener('mousemove', (e) => {
      gsap.to('#crsr',{
        x:e.clientX-15,
        y:e.clientY-15
      })
  });
}


cursorAnimation()


function page2Animation() {
  gsap.from("#intro-text span", {
    y:100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",       
      start: "top 60%",
      end:"top 20%",
      scrub:1 
    }
  });
}


page2Animation()

