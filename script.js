let currentIndex = 0;
const images = document.querySelectorAll(".galeria-container img");

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

// Atalhos do teclado
document.addEventListener("keydown", function(event) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox.style.display === "block") {
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      changeSlide(-1);
    } else if (event.key === "ArrowRight") {
      changeSlide(1);
    }
  }
});

// Animações com ScrollReveal
ScrollReveal().reveal('.hero-text', {
  duration: 2000,
  origin: 'top',
  distance: '50px'
});

ScrollReveal().reveal('.sobre', {
  duration: 2000,
  origin: 'left',
  distance: '60px'
});

ScrollReveal().reveal('.galeria-item', {
  duration: 2000,
  origin: 'bottom',
  distance: '40px',
  interval: 200
});

ScrollReveal().reveal('.contato', {
  duration: 2000,
  origin: 'right',
  distance: '60px'
});
