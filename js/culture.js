/* ---------- MODAL JS ---------- */
const cards = document.querySelectorAll('.team-card_c');
const modals = document.getElementById('profileModal');
const closeBtn = document.querySelector('.closeBtn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('modalName').innerText = card.dataset.name;
    document.getElementById('modalRole').innerText = card.dataset.role;
    document.getElementById('modalInfo').innerText = card.dataset.info;
    modals.style.display = 'flex';
  });
});

if (closeBtn) {
  closeBtn.onclick = () => modals.style.display = 'none';
}

window.onclick = (e) => {
  if (e.target == modals) modals.style.display = 'none';
};

/* ---------- GSAP ---------- */
gsap.registerPlugin(ScrollTrigger);

/* Hero text animation */
gsap.from('.hero_section_c h1', {
  y: 40,
  opacity: 0,
  duration: 0.8,
  delay: 0.2
});

gsap.from('.hero_section_c p', {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.4
});

/* Expand image animation */
gsap.to(".expand-image-wrap", {
  scrollTrigger: {
    trigger: ".expand-image-section",
    start: "top center",
    end: "bottom center",
    scrub: true
  },
  width: window.innerWidth < 768 ? "100vw" : "100vw",
  height: window.innerWidth < 768 ? "60vh" : "100vh",
  borderRadius: "0px"
});

/* Scroll heading animation */
gsap.fromTo(".scroll-heading",
  { x: 80, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".scroll-text-section",
      start: "top 85%",
      end: "top 35%",
      scrub: true
    }
  }
);