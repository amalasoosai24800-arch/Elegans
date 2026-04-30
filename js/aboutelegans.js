//==================================
//=======ABOUTPAGE-HTML===============
gsap.registerPlugin(ScrollTrigger);
    // Title
gsap.from(".df-title", {
  opacity:0,
  y:40,
  duration:1,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".digital-future",
    start:"top 75%"
  }
});

// Video + content
gsap.from(".df-video", {
  opacity:0,
  x:-60,
  duration:1,
  scrollTrigger:{
    trigger:".df-row",
    start:"top 75%"
  }
});

if (window.innerWidth > 768) {
  gsap.from(".df-content > *", {
    opacity:0,
    y:40,
    stagger:.15,
    duration:1,
    scrollTrigger:{
      trigger:".df-content",
      start:"top 75%"
    }
  });
} else {
  gsap.from(".df-content > *", {
    opacity:0,
    duration:.8,
    stagger:.1,
    scrollTrigger:{
      trigger:".df-content",
      start:"top 80%"
    }
  });
}


gsap.to(".df-divider span", {
  width:"260px",
  duration:1.3,
  ease:"power3.out",
  scrollTrigger:{
    trigger:".df-divider",
    start:"top 75%",
    end:"bottom top", 
    toggleActions:"play reverse play reverse"
  }
});

// WHY US ANIMATION
gsap.from(".df-why-inner > *", {
  opacity:0,
  y:40,
  stagger:.2,
  duration:1,
  scrollTrigger:{
    trigger:".df-why-full",
    start:"top 75%"
  }
});
gsap.from(".philosophy-value", {
  scrollTrigger: {
    trigger: ".philosophy-values",
    start: "top 75%",
  },
  y: 90,
  rotateX: -16,
  opacity: 0,
  stagger: 0.2,
  duration: 1.1,
  ease: "power4.out"
});

