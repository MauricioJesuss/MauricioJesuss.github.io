document.addEventListener('DOMContentLoaded', () => {
    const plantsContainer = document.querySelector('.plantas-container');
    const prevButton = document.querySelector('.btn-prev');
    const nextButton = document.querySelector('.btn-next');

    let currentIndex = 0; // Índice actual del carrusel
    const totalCards = document.querySelectorAll('.tarjeta-planta').length; // Total de tarjetas

    // Función para actualizar la posición del carrusel
    const updateCarousel = () => {
        const cardWidth = 300; // Ancho de cada tarjeta
        const offset = -currentIndex * cardWidth; // Calcular el desplazamiento
        plantsContainer.style.transform = `translateX(${offset}px)`; // Aplicar el desplazamiento
    };

    // Evento para el botón anterior
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--; // Decrementar el índice
        } else {
            currentIndex = totalCards - 1; // Volver al último índice
        }
        updateCarousel(); // Actualizar el carrusel
    });

    // Evento para el botón siguiente
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalCards - 1) {
            currentIndex++; // Incrementar el índice
        } else {
            currentIndex = 0; // Volver al primer índice
        }
        updateCarousel(); // Actualizar el carrusel
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const explorarBoton = document.querySelector('.explorar-plantas');
  
  explorarBoton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
      const targetId = this.getAttribute('href'); // Obtener el ID del objetivo
      const targetElement = document.querySelector(targetId); // Seleccionar el elemento objetivo

      // Hacer scroll suavemente al elemento objetivo
      targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Opcional: ajusta la posición a la parte superior del viewport
      });
  });
});

function animarTexto() {
    const introSection = document.getElementById('introduccion-plantas');
    introSection.classList.add('animar-texto');
    
    setTimeout(() => {
        introSection.classList.remove('animar-texto'); // Quitar la clase después de la animación
    }, 3000); // Duración de la animación en milisegundos
}

function toggleRespuesta(element) {
  const respuesta = element.nextElementSibling;
  respuesta.style.display = respuesta.style.display === "block" ? "none" : "block";
  const icon = element.querySelector('.icon');
  icon.textContent = icon.textContent === "+" ? "-" : "+"; // Cambia el icono
}












