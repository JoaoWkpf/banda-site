// ScrollReveal
ScrollReveal().reveal('.hero h1, .hero p, .hero .btn', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.sobre, .galeria, .contato', { delay: 200, distance: '50px', origin: 'bottom' });

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
