

function startLocoMotive(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
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