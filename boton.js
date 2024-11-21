// Función para mostrar/ocultar todo el currículum
function toggleCurriculum() {
    const completos = document.querySelectorAll(".completo");
    const resumenes = document.querySelectorAll(".resumen");
    const boton = document.getElementById("toggleButton");

    completos.forEach((elemento) => {
        elemento.style.display = elemento.style.display === "none" ? "block" : "none";
    });

    resumenes.forEach((elemento) => {
        elemento.style.display = elemento.style.display === "none" ? "block" : "none";
    });

    // Cambiar el texto del botón según el estado
    boton.textContent = boton.textContent === "Leer más" ? "Leer menos" : "Leer más";
}