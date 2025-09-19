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
