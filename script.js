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

  if (Math.abs(diff) > 50) { // mínimo 50px para considerar swipe
    if (diff > 0) {
      changeSlide(1);  // swipe para esquerda → próxima foto
    } else {
      changeSlide(-1); // swipe para direita → foto anterior
    }
  }
});
