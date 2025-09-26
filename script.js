// Scroll Reveal
ScrollReveal().reveal('section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: true
});

// Modal da Galeria
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
