// Typing and deleting effect for portfolio roles
const roles = [
  "Web Developer",
  "Flutter Developer",
  "Problem Solver",
  "Drummer",
];
const typingElement = document.querySelector(".typing-effect");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseTime = 1200;

function typeRole() {
  if (!typingElement) return;
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
    } else {
      setTimeout(typeRole, typingSpeed / 2);
    }
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeRole, pauseTime);
    } else {
      setTimeout(typeRole, typingSpeed);
    }
  }
}
typeRole();

// Smooth scroll for About and Skills links in navbar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('nav ul li a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const nav = document.querySelector("nav");
          const navHeight = nav ? nav.offsetHeight : 0;
          const top =
            target.getBoundingClientRect().top +
            window.scrollY -
            navHeight -
            20;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });
});

// Responsive Interests Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const sliderTrack = document.querySelector('.slider-track');
const totalSlides = slides.length;
const visibleSlides = window.innerWidth < 700 ? 1 : 3;

function updateSlider() {
  const visible = window.innerWidth < 700 ? 1 : 3;
  sliderTrack.style.transform = `translateX(-${currentSlide * (100 / visible)}%)`;
}

function moveSlide(direction) {
  const visible = window.innerWidth < 700 ? 1 : 3;
  currentSlide = (currentSlide + direction + (totalSlides - visible + 1)) % (totalSlides - visible + 1);
  updateSlider();
}

// Auto-rotate slides every 2 seconds
let sliderInterval = setInterval(() => {
  moveSlide(1);
}, 4000);

// Update slider on window resize
window.addEventListener('resize', () => {
  updateSlider();
});

// Initialize slider position
document.addEventListener('DOMContentLoaded', updateSlider);
