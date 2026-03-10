// ScrollReveal
ScrollReveal().reveal('.hero h1, .hero p, .hero .btn', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.sobre, .galeria, .contato, .membros', { delay: 200, distance: '50px', origin: 'bottom' });

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

function outsideClick(event) {
  if (event.target === lightbox) closeLightbox();
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
    diff > 0 ? changeSlide(1) : changeSlide(-1);
  }
});

// Filtro de membros
function filtrarMembros(status, btn) {
  document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
  btn.classList.add('ativo');

  const cards = document.querySelectorAll('.membro-card');
  cards.forEach(card => {
    if (card.dataset.status === status) {
      card.style.display = 'flex';
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      card.style.display = 'none';
    }
  });
}

// ScrollReveal para membros
ScrollReveal().reveal('.membro-card', { delay: 100, distance: '30px', origin: 'bottom', interval: 80 });
