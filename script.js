// Captura o formulário e impede envio "de verdade"
document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso! 🎶 Entraremos em contato em breve.");
});
