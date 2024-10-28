//menu de navegacion sticky:
// Seleccionar el elemento de navegación
const nav = document.querySelector("nav");
const header = document.querySelector("header");

// Detectar la posición inicial del header
const headerBottom = header.offsetTop + header.offsetHeight;

// Agregar evento de scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > headerBottom) {
        nav.classList.add("sticky-nav");
    } else {
        nav.classList.remove("sticky-nav");
    }
});