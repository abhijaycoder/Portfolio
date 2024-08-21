// toogle navabr code starting

document.getElementById('more').addEventListener('click', () => {
    document.querySelector('.hideOnlist').style.visibility = 'visible';
  });
  
  document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.hideOnlist').style.visibility = 'hidden';
  });

// toggle navabar code end

// gsap code is going to start from here

gsap.to("#navbar",{
  backgroundColor: "#fff",
  color: "black",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -5%",
    end: "top -6%",
    scrub: 1,
  }
});

gsap.to("#navbar__logo ", {
  color: "black",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -5%",
    end: "top -6%",
    scrub: 1,
  }
})
