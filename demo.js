const msg = document.getElementById("mensagem");
const poem = document.getElementById("lyrics");

function activate() {
  // Ativa as flores (remove o "paused" e dispara as animações do CSS)
  document.body.classList.add("active");

  // Faz a mensagem de entrada desaparecer suavemente
  msg.style.opacity = "0";
  setTimeout(() => {
    msg.style.display = "none";
  }, 1000);

  // Mostra o texto dedicado com fade-in após as flores começarem a brotar (2.2 segundos)
  setTimeout(() => {
    poem.classList.add("show");
    
    // Esconde o poema suavemente após os 7 segundos (7000ms) definidos
    setTimeout(() => {
      poem.style.opacity = "0";
    }, 7000);
    
  }, 2200);

  // Remove os ouvintes de eventos para evitar cliques repetidos
  document.removeEventListener("click", activate);
  document.removeEventListener("touchend", activate);
}

// Escuta os eventos de clique na tela ou toque em celulares
document.addEventListener("click", activate);
document.addEventListener("touchend", activate);
