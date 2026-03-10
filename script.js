// ScrollReveal
ScrollReveal().reveal('.hero h1, .hero p, .hero .btn', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.sobre, .galeria, .video-section, .contato', { delay: 200, distance: '50px', origin: 'bottom' });

// Menu Hamburguer
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("open");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navLinks.classList.remove("open");
}

// Lightbox da galeria
let currentSlide = 0;
const images = document.querySelectorAll(".galeria-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
  currentSlide = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentSlide].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeSlide(step) {
  currentSlide = (currentSlide + step + images.length) % images.length;
  lightboxImg.src = images[currentSlide].src;
}

// Fechar clicando fora da imagem
function outsideClick(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
}

// Navegação pelo teclado (setas e ESC)
document.addEventListener("keydown", function (e) {
  if (lightbox.style.display !== "flex") return;
  if (e.key === "ArrowRight") changeSlide(1);
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "Escape") closeLightbox();
});

// Swipe no celular
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) changeSlide(1);
    else changeSlide(-1);
  }
});
