/*=========Services===========
/*==============================

/* ===================== GSAP ANIMATION =====================*/
gsap.from(".hero-content-left h1", {y:60,opacity:0,duration:1,ease:"power3.out"});
gsap.from(".hero-divider", {height:0,opacity:0,duration:1.2,delay:0.2,ease:"power3.out"});
gsap.from(".hero-content-right", {y:60,opacity:0,duration:1,delay:0.4,ease:"power3.out"});
gsap.from(".btn-appointment", {scale:0.6,opacity:0,duration:0.8,delay:0.7,ease:"power3.out"});

const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});


//=====================================
//=========ICON PATTERN================
const boxes = document.querySelectorAll('.service-box');

window.addEventListener('scroll',()=>{
    boxes.forEach(box=>{
        const top = box.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            box.style.opacity="1";
            box.style.transform="translateY(0)";
        }
    });
});
