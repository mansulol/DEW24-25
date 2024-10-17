let constructionTime = 1000; // Tiempo en milisegundos para crear un nuevo ladrillo
let gameContainer = document.querySelector("#contenedor-brick"); // Contenedor donde se mostrarán los ladrillos
let currentX = 0; // Posición X inicial para los ladrillos
const brickWidth = 50; // Ancho del ladrillo puesto por nosotros

// Crear un ladrillo cada segundo
setInterval(createBrick, constructionTime);

// Función para crear un ladrillo
function createBrick() {
  // Verifica si hay espacio suficiente en el contenedor
  if (currentX + brickWidth <= gameContainer.clientWidth) {
    let brick = document.createElement("div"); // Crea un nuevo div
    brick.className = "img_brick"; // Asigna la clase "brick
    brick.src = "./img/brick.png";
    // Establece las propiedades de estilo
    brick.style.left = currentX + "px"; // Establece la posición X actual
    brick.style.top = gameContainer.clientHeight / 2 - brickWidth / 2 + "px"; // Centra verticalmente
    currentX += brickWidth; // Actualiza la posición X para el próximo ladrillo //removeChild
    // Añade el ladrillo al contenedor
    gameContainer.appendChild(brick);
    // Maneja el clic en el ladrillo
    brick.addEventListener("click", function () {
      gameContainer.removeChild(brick); // Elimina el ladrillo al hacer clic
    });
  } else {
    // Reinicia la posición X si se alcanzó el borde derecho
    currentX = 0;
  }
}
