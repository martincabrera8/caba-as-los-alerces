
// Selecciona todas las imágenes de la galería
const images = document.querySelectorAll('.galeria_imagenes-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.boton_cerrar');

// Añade un evento click a cada imagen para abrir el lightbox
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src; // Establece la imagen en el lightbox
    });
});

// Cierra el lightbox al hacer clic en el botón de cierre
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Cierra el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

//arranca las modificaciones con jquery --Lautaro. 
