window.onload = () => {
  // Remueve la clase que pausa las animaciones al terminar de cargar la ventana
  document.body.classList.remove("container");
};

// Selección de elementos del DOM
const music = document.getElementById("music");
const msg = document.getElementById("mensagem");

/**
 * Inicia la reproducción de audio y maneja los estados visuales del mensaje.
 */
function startMusic() {
  music.play();

  msg.innerText = "Obrigado, boa música, ela não tá completa kkkkk, espero que goste :)";

  // Transición de desvanecimiento
  setTimeout(() => {
    msg.style.opacity = "0";
  }, 2000);

  // Quita el elemento del flujo visual después de la animación
  setTimeout(() => {
    msg.style.display = "none";
  }, 3000);

  // Remueve el detector para evitar múltiples activaciones
  document.removeEventListener("click", startMusic);
}

// Escucha el evento de clic en cualquier parte de la pantalla
document.addEventListener("click", startMusic);