console.log("SCRIPT LOADED");

gsap.registerPlugin(ScrollTrigger);
if(typeof ScrollToPlugin !== "undefined") gsap.registerPlugin(ScrollToPlugin);

/* ================= PRELOADER ================= */
  window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});



/* ================= MENU ================= */
const menuBtn = document.getElementById("menuBtn");
const menuPopup = document.getElementById("menuPopup");
if(menuBtn && menuPopup){
  menuBtn.onclick = () => {
    if(menuPopup.style.display === "flex"){
      menuPopup.style.display = "none";
      menuBtn.textContent = "MENU";
    } else {
      menuPopup.style.display = "flex";
      menuBtn.textContent = "CLOSE";
    }
  };
}
/* ================= HERO SEQUENCE – INSTANT ON TOUCH / SCROLL ================= */
gsap.registerPlugin(ScrollTrigger);

const heroContainer = document.getElementById("heroTextContainer");
const heroSection = document.querySelector(".hero");

if (heroContainer && heroSection) {

  const text = "LET’S BUILD YOUR BRAND";
  const spans = [];
  const h1 = document.createElement("h1");

  /* BUILD LETTERS */
  text.split("").forEach((letter, index) => {

    const span = document.createElement("span");

    // Normal text only (NO logo replacement)
    span.textContent = letter === " " ? "\u00A0" : letter;

    const brandStart = text.indexOf("BRAND");
    if (index >= brandStart && index < brandStart + 5) {
      span.classList.add("brand-highlight");
    }

    h1.appendChild(span);
    spans.push(span);
  });

  heroContainer.appendChild(h1);

  /* CENTER TEXT */
  gsap.set(h1, {
    position: "absolute",
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50
  });

  /* INITIAL STATE */
  gsap.set(spans, { opacity: 0, y: 50 });

  /* ================= ENTER ANIMATION ================= */
  const enterTL = gsap.timeline({ paused: true });
  enterTL.to(spans, {
    opacity: 1,
    y: 0,
    stagger: 0.08,
    duration: 0.8,
    ease: "power3.out"
  });

  /* ================= EXIT ANIMATION ================= */
  const exitTL = gsap.timeline({ paused: true });
  exitTL.to(spans, {
    opacity: 0,
    y: -50,
    stagger: 0.05,
    duration: 0.45,
    ease: "power2.in"
  });

  /* PLAY ON LOAD */
  enterTL.play();

  /* ================= GESTURE DETECTION ================= */
  let exited = false;

  const triggerExit = () => {
    if (!exited) {
      exited = true;
      exitTL.play();
    }
  };

  window.addEventListener("wheel", triggerExit, { once: true });
  window.addEventListener("touchstart", triggerExit, { once: true });

  /* ================= SCROLL CONTROL ================= */
  ScrollTrigger.create({
    trigger: heroSection,
    start: "top top",
    end: "+=1",        // 1px is enough
    pin: true,
    anticipatePin: 1,

    onLeave: () => {
      triggerExit();
    },

    onEnterBack: () => {
      exited = false;
      exitTL.pause(0);
      enterTL.restart();
    }
  });
}

/* ================= SERVICES PAGE ANIMATIONS ================= */
const servicesTitle = document.querySelector(".services-title");
if(servicesTitle){
  const text = servicesTitle.innerText;
  servicesTitle.innerHTML = text.split("").map(c=>c===" "?"<span>&nbsp;</span>":`<span>${c}</span>`).join("");

  const introTL = gsap.timeline({
    scrollTrigger:{
      trigger: ".services-section",
      start: "top 65%"
    }
  });

  introTL.to(".services-title span",{y:0,opacity:1,stagger:0.02,duration:0.3,ease:"power2.out"});

  const panels = document.querySelectorAll(".services-panel");
  if(panels.length){
    gsap.set(panels,{y:160,scale:0.85,opacity:0});
    introTL.to(panels,{y:0,scale:1,opacity:1,duration:1.2,ease:"bounce.out",stagger:0.15},"-=0.3");

    const idleBounce = gsap.to(panels,{y:-14,duration:2.6,repeat:-1,yoyo:true,ease:"sine.inOut",stagger:{each:0.35,from:"random"}});

    ScrollTrigger.create({
      trigger: ".services-section",
      start:"center center",
      end:"bottom top",
      scrub:true,
      onUpdate:self=>{
        const grid = document.querySelector(".services-grid");
        if(grid) gsap.to(grid,{scale:gsap.utils.interpolate(1,0.82,self.progress),overwrite:true});
        self.progress>0.05?idleBounce.pause():idleBounce.play();
      }
    });

    panels.forEach(panel=>{
      const video = panel.querySelector("video");
      if(!video) return;
      panel.addEventListener("mouseenter",()=>{video.currentTime=0;video.play().catch(()=>{});});
      panel.addEventListener("mouseleave",()=>video.pause());
    });
  }
}

// =========================================================
// SERVICES SCROLL ANIMATION (LEFT / RIGHT + REVERSE)
// =========================================================
const serviceContentElem = document.querySelector(".service-content");
const serviceVideoFrame = document.querySelector(".service-video-frame");

if(serviceContentElem && serviceVideoFrame){
  gsap.timeline({
    scrollTrigger:{
      trigger:".service-tabs",
      start:"top 75%",
      end:"bottom center",
      scrub:true
    }
  })
  .from(serviceContentElem,{ x:-120, opacity:0 })
  .from(serviceVideoFrame,{ x:120, opacity:0 },"<");
}


/* =========================================================
   SERVICES CONTENT DATA
========================================================= */
const serviceContent = {
  brand: {
    title: "Creative ",
    overview:
      "We craft distinct visual and verbal identities that make brands instantly recognisable. From brand systems to campaigns, every element is built with intent and coherence. Our work balances aesthetics with strategy, ensuring creativity drives real impact. So your brand doesn’t just stand out, it stays remembered.",
    services:
      "Brand Strategy, Logo & Visual Identity, Brand Guidelines, Storytelling Workshops.",
    video: "./video/Creative.mp4"
  },

  experience: {
    title: "Brand Experience",
    overview:
      " We design seamless experiences across every interaction your audience has with you. From first impression to long-term engagement, every touchpoint is thoughtfully aligned. We build consistency that fosters trust and emotional connection over time. Turning every brand moment into something meaningful and memorable.",
    services:
      "Consulting , Strategy, Creative ,Photography / Video, Event / Stall Design, Merchandise,Print / Digital ",
    video: "./video/BrandEx.mp4"
  },

  social: {
    title: "Digital ",
    overview:
      "We build digital ecosystems where brands don’t just exist, they perform. From websites to campaigns, everything is designed for clarity, engagement, and growth. We align content, platforms, and strategy into one cohesive digital presence. Ensuring your brand stays relevant in a fast-moving, attention-driven world.",
    services:
      "Campaign Strategy,Influencer marketing ,Digital Ads ,content creation (conception and production),Photo & Video,Live Production ,Check MONK-E services for digital ",
    video: "./video/Digital.mp4"
  },

  merch: {
    title: "Product",
    overview:
      "We shape products that reflect your brand’s promise in form, function, and feel. From packaging to presentation, every detail is crafted to enhance desirability. We bridge strategy and sensory experience to create products people connect with. So what you offer isn’t just used. It’s chosen, valued, and remembered.",
    services:
      "Product Design,Prototype ,Product photography ,360 deg visuals ,Production? ",
    video: "./video/product.mp4"
  }
};

/* =========================================================
   ELEMENTS
========================================================= */
const serviceCards = document.querySelectorAll(".service-card");
const serviceTitle = document.getElementById("serviceTitle");
const serviceText = document.getElementById("serviceText");
const servicePanel = document.querySelector(".service-content");
const serviceVideo = document.querySelector(".service-video-frame video");
const tabs = document.querySelectorAll(".tab");

/* =========================================================
   MAIN SERVICE CARD CLICK
========================================================= */
serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.service;
    const data = serviceContent[key];
    if (!data) return;

    /* ACTIVE STATE */
    serviceCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    /* TITLE + DEFAULT TEXT */
    serviceTitle.textContent = data.title;
    serviceText.textContent = data.overview;

    /* RESET TABS */
    tabs.forEach(t => t.classList.remove("active"));
    tabs[0].classList.add("active");

    /* CONTENT ANIMATION */
    gsap.fromTo(
      servicePanel,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    /* VIDEO SWAP */
    if (serviceVideo) {
      serviceVideo.pause();
      serviceVideo.src = data.video;
      serviceVideo.load();
      serviceVideo.play().catch(() => {});
    }

    ScrollTrigger.refresh();
  });
});

/* =========================================================
   OVERVIEW / SERVICES TAB SWITCH
========================================================= */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const activeService = document.querySelector(".service-card.active");
    if (!activeService) return;

    const key = activeService.dataset.service;
    const type = tab.textContent.toLowerCase();

    serviceText.textContent = serviceContent[key][type];

    gsap.fromTo(
      serviceText,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
    );
  });
});

/* =========================================================
   HERO / OTHER SECTIONS → SCROLL & ACTIVATE
========================================================= */
document.querySelectorAll("[data-jump]").forEach(item => {
  item.addEventListener("click", () => {
    const target = item.dataset.jump;
    const servicesSection = document.getElementById("servicesSection");
    if (!servicesSection) return;

    gsap.to(window, {
      scrollTo: { y: servicesSection, offsetY: 120 },
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        const card = document.querySelector(
          `.service-card[data-service="${target}"]`
        );
        if (card) card.click();
      }
    });
  });
});

/* =========================================================
   MAGNETIC 3D HOVER EFFECT (DESKTOP ONLY)
========================================================= */
serviceCards.forEach(card => {
  if (window.matchMedia("(hover: hover)").matches) {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;

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





/* =========================================================
   TOP PANELS → SCROLL TO SERVICE & ACTIVATE
========================================================= */
const topPanels = document.querySelectorAll(".services-panel");

topPanels.forEach(panel => {
  panel.addEventListener("click", () => {
    const key = panel.dataset.service;
    const servicesSection = document.getElementById("servicesSection");

    if (!key || !servicesSection) return;

    // Scroll to section
    gsap.to(window, {
      scrollTo: { y: servicesSection, offsetY: 120 },
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        // Activate correct tab
        const card = document.querySelector(
          `.service-card[data-service="${key}"]`
        );
        if (card) card.click();
      }
    });
  });
});


//========================= WORK SECTION SCROLL REVEAL
const workCards = document.querySelectorAll(".work-card");
if(workCards.length){
  const revealWorks = new IntersectionObserver((entries)=>{
    entries.forEach((entry,index)=>{
      if(entry.isIntersecting){setTimeout(()=>{entry.target.classList.add("reveal");},index*120);}
      else entry.target.classList.remove("reveal");
    });
  },{threshold:0.15});
  workCards.forEach(card=>revealWorks.observe(card));
}

// SIMPLE PARALLAX ON WORK IMAGES
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".work-media").forEach(media=>{
    const speed=0.15;
    const rect=media.getBoundingClientRect();
    media.style.transform=`translateY(${rect.top*speed}px) scale(1.06)`;
  });
});

//============================== CLIENT LOGO
const logos = document.querySelectorAll(".client-logo");
if(logos.length){
  let activeIndex=0;
  const updateActiveLogo = ()=>logos.forEach((logo,i)=>logo.classList.toggle("active",i===activeIndex));
  updateActiveLogo();
  let scrollLock=false;
  window.addEventListener("wheel",()=>{
    if(scrollLock) return;
    scrollLock=true;
    activeIndex++;
    if(activeIndex>=logos.length) activeIndex=0;
    updateActiveLogo();
    setTimeout(()=>{scrollLock=false;},500);
  },{passive:true});
}

// LOGO MODAL
const modal = document.getElementById('logoModal');
const imgView = document.getElementById('modalImg');
if(modal && imgView){
  window.openLogo = (el)=>{imgView.src=el.src; modal.classList.add('open');};
  window.closeLogo = ()=>{modal.classList.remove('open');};
}

// AUTO LOGO ROW MOVEMENT
const rows = document.querySelectorAll('.clients-track');
if(rows.length>=2){
  let posRight=0,posLeft=0,speed=0.35;
  const animateRows=()=>{
    posRight+=speed;
    if(posRight>rows[0].scrollWidth/2) posRight=0;
    rows[0].style.transform=`translateX(${posRight}px)`;
    posLeft-=speed;
    if(Math.abs(posLeft)>rows[1].scrollWidth/2) posLeft=0;
    rows[1].style.transform=`translateX(${posLeft}px)`;
    requestAnimationFrame(animateRows);
  };
  animateRows();
}

const aboutVideo = document.getElementById("aboutVideo");

if (aboutVideo) {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });

  /* STEP 1 — TITLE ONLY */
  tl.from(".about-content h2", {
    y: 40,
    opacity: 0,
    duration: 0.6
  });

  /* STEP 2 — EVERYTHING TOGETHER */
  tl.from(
    [
      ".about-content p",
      ".pull-quote",
      ".more-us",
      ".about-video"
    ],
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1, // small stagger but still feels together
      onStart: () => {
        aboutVideo.play().catch(()=>{});
      }
    },
    "+=0.1" // tiny gap after title (optional)
  );
}
// BACK TO TOP
const topBtn = document.getElementById("topBtn");
if(topBtn){
  topBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"});});
  window.addEventListener("scroll",()=>{window.scrollY>200?topBtn.classList.add("show"):topBtn.classList.remove("show");});
}

/*=========================*/
/*====Philosophy section===*/

const video = document.getElementById("philosophyVideo");

if (video) {

  const origamiTL = gsap.timeline({ paused: true });

  origamiTL
    /* unfold paper */
    .to(".philosophy-origami-video video", {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
      duration: 1,
      ease: "power4.inOut"
    })

    /* fold edges illusion */
    .fromTo(".philosophy-origami-video video",
      { transform: "rotateX(6deg) rotateY(-6deg) scale(0.96)" },
      {
        transform: "rotateX(0deg) rotateY(0deg) scale(1)",
        duration: 0.8,
        ease: "power3.out"
      },
      0
    )

    /* content slides away */
    .to(".philosophy-origami-content", {
      xPercent: -120,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut"
    }, 0.2);

  ScrollTrigger.create({
    trigger: ".philosophy-origami",
    start: "top top",
    end: "+=1",
    pin: true,
    anticipatePin: 1,

    onEnter: () => {
      video.play();
      origamiTL.play();
    },

    onLeaveBack: () => {
      video.pause();
      origamiTL.reverse();
    }
  });
}

//============================
// TEAM CURVED WAVE
//============================
const stage = document.getElementById("teamTrigger");
if(stage){
  stage.addEventListener("mouseenter",()=>stage.classList.add("active"));
  stage.addEventListener("mouseleave",()=>stage.classList.remove("active"));
  stage.addEventListener("click",()=>stage.classList.toggle("active"));
  window.addEventListener("scroll",()=>stage.classList.remove("active"));
}

// LOCATION POPUP
const locationPopup = document.getElementById("location-popup");
const popupClose = document.getElementById("popup-close");
const locationItems = document.querySelectorAll(".location-list li");
if(locationPopup && popupClose && locationItems.length){
  locationItems.forEach(item=>{
    item.addEventListener("click",()=>{
      document.getElementById("popup-city").textContent=item.dataset.city;
      document.getElementById("popup-address").textContent=item.dataset.address;
      locationPopup.classList.add("active");
    });
  });
  popupClose.onclick = ()=>locationPopup.classList.remove("active");
  locationPopup.onclick = e=>{if(e.target.id==="location-popup") locationPopup.classList.remove("active");};
}

// FOOTER YEAR
const footerYear = document.getElementById("footerYear");
if(footerYear) footerYear.textContent = new Date().getFullYear();



