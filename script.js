// --- 1. Animación de "Fade-in on Scroll" (Aparición al hacer scroll) ---

// Función para añadir la clase 'fade-in-up' a los elementos que queremos animar
function setupAnimations() {
    // Añade la clase de animación a todos los elementos que quieres que aparezcan
    document.querySelectorAll('.header-title, .subtitle, .logo-container, .partial-btns, .section-title, .card-col, .footer-custom').forEach(el => {
        el.classList.add('fade-in-up');
    });
}

// Función para comprobar si un elemento está visible en el viewport
function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 && // Se extiende 100px más allá de la vista
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función principal del observador de scroll
function handleScrollAnimation() {
    document.querySelectorAll('.fade-in-up').forEach(el => {
        if (isVisible(el)) {
            el.classList.add('visible');
        }
    });
}

// Inicializa las animaciones
setupAnimations();

// Ejecuta la comprobación de visibilidad al cargar y al hacer scroll
window.addEventListener('load', handleScrollAnimation);
window.addEventListener('scroll', handleScrollAnimation);


// --- 2. Efecto Dinámico de "Halo" en las tarjetas de Prácticas ---

document.querySelectorAll('.card-portfolio').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        // Obtenemos la posición del ratón dentro de la tarjeta
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Posición X relativa a la tarjeta
        const y = e.clientY - rect.top;  // Posición Y relativa a la tarjeta

        // Aplicamos un efecto de brillo (radial-gradient) que sigue al ratón
        // El color es un degradado sutil de azul/blanco.
        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px, rgba(112, 129, 255, 0.15) 0%, transparent 100%),
            #1C1C27
        `;
    });

    // Restauramos el fondo original cuando el ratón sale
    card.addEventListener('mouseleave', () => {
        card.style.background = '#1C1C27'; // Vuelve al color base definido en CSS
    });
});