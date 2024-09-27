// Selecciona el contenedor de las imágenes
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

// Contador de imágenes
let counter = 0;

// Función para cambiar de imagen automáticamente
function nextImage() {
    counter++;

    // Resetea el contador si llega al final de las imágenes
    if (counter >= images.length) {
        counter = 0;
    }

    // Mueve el carrusel
    carouselSlide.style.transform = 'translateX(' + (-counter * 100) + '%)';
}

// Cambia de imagen cada 3 segundos
setInterval(nextImage, 3000);
