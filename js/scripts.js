console.log("SCRIPT LOADED");


gsap.registerPlugin(ScrollTrigger);

/* ================= PRELOADER ================= */
window.addEventListener("load", ()=>{
  gsap.to("#preloader", {opacity:0, duration:0.8, display:"none"});
});

/* ================= MENU ================= */
const menuBtn = document.getElementById("menuBtn");
const menuPopup = document.getElementById("menuPopup");
menuBtn.onclick = () => {
  if(menuPopup.style.display === "flex"){
    menuPopup.style.display = "none";
    menuBtn.textContent = "MENU";
  } else {
    menuPopup.style.display = "flex";
    menuBtn.textContent = "CLOSE";
  }
};




/* ================= HERO SEQUENCE ================= 
const heroContainer = document.getElementById("heroTextContainer");
const firstSentence = "LET’S BUILD OUR BRAND";
const spans = [];

// Create span elements for first sentence
const h1First = document.createElement("h1");
firstSentence.split("").forEach(l=>{
  const span = document.createElement("span");
  span.textContent = l===" "?"\u00A0":l;
  h1First.appendChild(span);
  spans.push(span);
});
heroContainer.appendChild(h1First);

// Hero timeline
const heroTL = gsap.timeline({
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    end:"+=400%",
    scrub:true,
    pin:true
  }
});

// First sentence appear
heroTL.fromTo(spans, 
  {y:100, opacity:0, scale:1.5},
  {y:0, opacity:1, scale:1, stagger:0.03}
);

// Pause to visualize (first scroll)
heroTL.to(spans, {y:-100, opacity:0, scale:0.8, stagger:0.03, delay:0.3});*/


/* ================= HERO SEQUENCE ================= */

const heroContainer = document.getElementById("heroTextContainer");

if (heroContainer) {

  const firstSentence = "LET’S BUILD OUR BRAND";
  const spans = [];

  // Create span elements for first sentence
  const h1First = document.createElement("h1");
  firstSentence.split("").forEach(l => {
    const span = document.createElement("span");
    span.textContent = l === " " ? "\u00A0" : l;
    h1First.appendChild(span);
    spans.push(span);
  });

  heroContainer.appendChild(h1First);

  // Hero timeline
  const heroTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=400%",
      scrub: true,
      pin: true
    }
  });

  // First sentence appear
  heroTL.fromTo(
    spans,
    { y: 100, opacity: 0, scale: 1.5 },
    { y: 0, opacity: 1, scale: 1, stagger: 0.03 }
  );

  // Exit animation
  heroTL.to(spans, {
    y: -100,
    opacity: 0,
    scale: 0.8,
    stagger: 0.03,
    delay: 0.3
  });

}












/* TITLE LETTER ANIMATION *
const title = document.querySelector(".services-title");
const text = title.innerText;

title.innerHTML = text
  .split("")
  .map(c => c === " " ? "<span>&nbsp;</span>" : `<span>${c}</span>`)
  .join("");

const introTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 65%"
  }
});

introTL.to(".services-title span", {
  y: 0,
  opacity: 1,
  stagger: 0.06,
  duration: 0.8,
  ease: "power4.out"
});

/* PANELS BOUNCE IN *
gsap.set(".services-panel", {
  y: 160,
  scale: 0.85,
  opacity: 0
});

introTL.to(".services-panel", {
  y: 0,
  scale: 1,
  opacity: 1,
  duration: 1.2,
  ease: "bounce.out",
  stagger: 0.15
}, "-=0.3");

/* IDLE BOUNCE *
const idleBounce = gsap.to(".services-panel", {
  y: -14,
  duration: 2.6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: {
    each: 0.35,
    from: "random"
  }
});

/* SCROLL → MINIMIZE + STOP BOUNCE *
ScrollTrigger.create({
  trigger: ".services-section",
  start: "center center",
  end: "bottom top",
  scrub: true,
  onUpdate: self => {
    gsap.to(".services-grid", {
      scale: gsap.utils.interpolate(1, 0.82, self.progress),
      overwrite: true
    });
    self.progress > 0.05 ? idleBounce.pause() : idleBounce.play();
  }
});

/* VIDEO HOVER *
document.querySelectorAll(".services-panel").forEach(panel => {
  const video = panel.querySelector("video");

  panel.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play().catch(()=>{});
  });

  panel.addEventListener("mouseleave", () => {
    video.pause();
  });
});*/


/* ================= SERVICES PAGE ANIMATIONS ================= */

const servicesTitle = document.querySelector(".services-title");

if (servicesTitle) {

  /* TITLE LETTER ANIMATION */
  const text = servicesTitle.innerText;

  servicesTitle.innerHTML = text
    .split("")
    .map(c => c === " " ? "<span>&nbsp;</span>" : `<span>${c}</span>`)
    .join("");

  const introTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 65%"
    }
  });

  introTL.to(".services-title span", {
    y: 0,
    opacity: 1,
    stagger: 0.06,
    duration: 0.8,
    ease: "power4.out"
  });

  /* PANELS BOUNCE IN */
  gsap.set(".services-panel", {
    y: 160,
    scale: 0.85,
    opacity: 0
  });

  introTL.to(".services-panel", {
    y: 0,
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: "bounce.out",
    stagger: 0.15
  }, "-=0.3");

  /* IDLE BOUNCE */
  const idleBounce = gsap.to(".services-panel", {
    y: -14,
    duration: 2.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    stagger: {
      each: 0.35,
      from: "random"
    }
  });

  /* SCROLL → MINIMIZE + STOP BOUNCE */
  ScrollTrigger.create({
    trigger: ".services-section",
    start: "center center",
    end: "bottom top",
    scrub: true,
    onUpdate: self => {
      gsap.to(".services-grid", {
        scale: gsap.utils.interpolate(1, 0.82, self.progress),
        overwrite: true
      });
      self.progress > 0.05 ? idleBounce.pause() : idleBounce.play();
    }
  });

  /* VIDEO HOVER */
  document.querySelectorAll(".services-panel").forEach(panel => {
    const video = panel.querySelector("video");

    if (!video) return;

    panel.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play().catch(()=>{});
    });

    panel.addEventListener("mouseleave", () => {
      video.pause();
    });
  });

}











/* =========================================================
   SERVICES SCROLL ANIMATION (LEFT / RIGHT + REVERSE)
========================================================= */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.timeline({
  scrollTrigger:{
    trigger:".service-tabs",
    start:"top 75%",
    end:"bottom center",
    scrub:true
  }
})
.from(".service-content",{ x:-120, opacity:0 })
.from(".service-video-frame",{ x:120, opacity:0 },"<");


/* =========================================================
   SERVICE CONTENT DATA
========================================================= */

const serviceContent = {
  brand: {
    overview:
      "Our brand team build identities that stand out, stay relevant and drive emotional connection through strategy, storytelling and design excellence.",
    services:
      "Brand strategy, Logo & Visual Identity, Brand Guidelines, Storytelling Workshops.",
    video: "./showreel.mp4"
  },
  experience: {
    overview:
      "We create immersive brand experiences—live, digital and physical—turning touchpoints into lasting emotional memories.",
    services:
      "Experiential events, Retail design, Digital activations, Interactive campaigns.",
    video: "./showreel.mp4"
  },
  social: {
    overview:
      "We design scroll-stopping social campaigns that spark conversations, build communities and amplify your brand voice.",
    services:
      "Social media campaigns, Content creation, Influencer collaborations, Community engagement.",
    video: "./showreel.mp4"
  },
  merch: {
    overview:
      "We craft premium wearable storytelling—merchandise that merges culture, style and brand loyalty.",
    services:
      "Custom merchandise, Apparel & accessories, Packaging, Branded giveaways.",
    video: "./Product12.mp4"
  }
};


/* =========================================================
   ELEMENTS
========================================================= */

const serviceCards = document.querySelectorAll(".service-card");
const serviceTitle = document.getElementById("serviceTitle");
const serviceText  = document.getElementById("serviceText");
const servicePanel = document.querySelector(".service-content");
const serviceVideo = document.querySelector(".service-video-frame video");
const tabs = document.querySelectorAll(".tab");


/* =========================================================
   SERVICE CARD CLICK (MAIN LOGIC)
========================================================= */

serviceCards.forEach(card => {
  card.addEventListener("click", () => {

    // Active state
    serviceCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    const key = card.dataset.service;

    // Title & text
    serviceTitle.textContent =
      key.charAt(0).toUpperCase() + key.slice(1);
    serviceText.textContent = serviceContent[key].overview;

    // Tabs reset
    tabs.forEach(t => t.classList.remove("active"));
    tabs[0].classList.add("active");

    // Text animation
    gsap.fromTo(
      servicePanel,
      { y:40, opacity:0 },
      { y:0, opacity:1, duration:0.6, ease:"power3.out" }
    );

    // Video swap (no resize)
    if(serviceVideo){
      serviceVideo.pause();
      serviceVideo.src = serviceContent[key].video;
      serviceVideo.load();
      serviceVideo.play();
    }

    // Important for ScrollTrigger stability
    ScrollTrigger.refresh();
  });
});


/* =========================================================
   TAB CLICK (OVERVIEW / SERVICES)
========================================================= */

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const activeKey =
      document.querySelector(".service-card.active").dataset.service;
    const type = tab.textContent.toLowerCase();

    serviceText.textContent =
      serviceContent[activeKey][type];
  });
});


/* =========================================================
   HERO / OTHER LIST → SCROLL TO SERVICES + ACTIVATE
========================================================= */

document.querySelectorAll("[data-jump]").forEach(item => {
  item.addEventListener("click", () => {

    const target = item.dataset.jump;

    gsap.to(window, {
      scrollTo:{
        y:"#servicesSection",
        offsetY:120
      },
      duration:1.2,
      ease:"power3.inOut",
      onComplete: () => {
        const card = document.querySelector(
          `.service-card[data-service="${target}"]`
        );
        if(card) card.click();
      }
    });

  });
});


/* =========================================================
   MAGNETIC 3D CARD EFFECT
========================================================= */

serviceCards.forEach(card => {
  if (window.matchMedia("(hover:hover)").matches) {

    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;

      card.style.transform = `
        perspective(800px)
        translate(${x * 0.1}px, ${y * 0.1}px)
        scale(1.1)
        rotateX(${y * 0.03}deg)
        rotateY(${x * 0.04}deg)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  }
});


//=========================animation
// WORK SECTION SCROLL REVEAL
const workCards = document.querySelectorAll(".work-card");

const revealWorks = new IntersectionObserver((entries)=>{
  entries.forEach((entry, index)=>{
    if(entry.isIntersecting){
      setTimeout(()=>{
        entry.target.classList.add("reveal");
      }, index * 120);   // stagger
    } else {
      entry.target.classList.remove("reveal");
    }
  });
},{
  threshold: 0.15
});

workCards.forEach(card => revealWorks.observe(card));


// SIMPLE PARALLAX ON WORK IMAGES
window.addEventListener("scroll", () => {
  document.querySelectorAll(".work-media").forEach(media=>{
    const speed = 0.15;
    const rect = media.getBoundingClientRect();
    media.style.transform = `translateY(${rect.top * speed}px) scale(1.06)`;
  });
});



//==============================
//==========CLIENT LOGO=========
/* ================= SCROLL ACTIVATED LOGO CAROUSEL ================= */

const logos = document.querySelectorAll(".client-logo");
let activeIndex = 0;

function updateActiveLogo(){

  logos.forEach((logo, i) => {
    logo.classList.toggle("active", i === activeIndex);
  });

}

updateActiveLogo();

let scrollLock = false;

window.addEventListener("wheel", () => {

  if(scrollLock) return;
  scrollLock = true;

  // advance to next logo
  activeIndex++;

  if(activeIndex >= logos.length){
    activeIndex = 0;
  }

  updateActiveLogo();

  setTimeout(() => {
    scrollLock = false;
  }, 500);

}, { passive:true });




// -------- MODAL VIEW --------
const modal = document.getElementById('logoModal');
const imgView = document.getElementById('modalImg');

function openLogo(el){
  imgView.src = el.src;
  modal.classList.add('open');
}

function closeLogo(){
  modal.classList.remove('open');
}



// ================= AUTO LOGO ROW MOVEMENT =================

const rows = document.querySelectorAll('.clients-track');

if(rows.length >= 2){

  let posRight = 0;
  let posLeft  = 0;
  const speed  = 0.35;

  function animateRows(){

    // Row 1 → Right
    posRight += speed;
    if(posRight > rows[0].scrollWidth / 2){
      posRight = 0;
    }
    rows[0].style.transform = `translateX(${posRight}px)`;

    // Row 2 → Left
    posLeft -= speed;
    if(Math.abs(posLeft) > rows[1].scrollWidth / 2){
      posLeft = 0;
    }
    rows[1].style.transform = `translateX(${posLeft}px)`;

    requestAnimationFrame(animateRows);
  }

  animateRows();
}





/* ---------------- ABOUT SCROLL LOCK ---------------- */


const aboutVideo = document.getElementById("aboutVideo");

/* ---------------- VIDEO PLAY / PAUSE ---------------- */
ScrollTrigger.create({
  trigger: ".about",
  start: "top center",
  onEnter: () => aboutVideo.play(),
  onLeaveBack: () => aboutVideo.pause()
});

/* ---------------- INITIAL STATE ---------------- */
gsap.set(".about-video", {
  zIndex: 3
});

gsap.set(".about-content", {
  zIndex: 1
});

/* ---------------- SCROLL TIMELINE ---------------- */
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});

/* ---------------- TEXT SLIDE IN ---------------- */
tl.from(".about-content", {
  x: 80,
  duration: 1,
  ease: "power3.out"
});

/* ---------------- VIDEO EXPAND FULLSCREEN ---------------- */
tl.to(".about-video", {
  width: "100vw",
  height: "100vh",
  borderRadius: 0,
  position: "absolute",
  left: "50%",
  top: 0,
  xPercent: -50,
  ease: "none"
}, 0.25);

/* ---------------- TEXT HIDE BEHIND VIDEO ---------------- */
tl.to(".about-content", {
  xPercent: -150,          // fully behind video
  duration: 0.6,
  ease: "power3.inOut"
}, 0.25);





// BACK TO TOP FUNCTION
const topBtn = document.getElementById("topBtn");

// Smooth scroll to top on click
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Show button only after scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {     // show after leaving hero
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});


// ========== TEAM CURVED WAVE INTERACTION ==========

const stage = document.getElementById("teamTrigger");

stage.addEventListener("mouseenter", () => {
  stage.classList.add("active");
});

stage.addEventListener("mouseleave", () => {
  stage.classList.remove("active");
});

stage.addEventListener("click", () => {
  stage.classList.toggle("active");
});

// Reset to video when scrolling
window.addEventListener("scroll", () => {
  stage.classList.remove("active");
});


//=================================
//=========LOCATION POPUP=========

document.querySelectorAll(".location-list li").forEach(item => {

  item.addEventListener("click", () => {

    document.getElementById("popup-city").textContent =
      item.dataset.city;

    document.getElementById("popup-address").textContent =
      item.dataset.address;

    document.getElementById("location-popup").classList.add("active");

  });

});

document.getElementById("popup-close").onclick = () => {
  document.getElementById("location-popup").classList.remove("active");
};

/* close popup by clicking outside box */
document.getElementById("location-popup").onclick = (e) =>{
  if(e.target.id === "location-popup"){
    e.target.classList.remove("active");
  }
};

document.getElementById("footerYear").textContent = new Date().getFullYear();
