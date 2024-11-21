document.addEventListener('DOMContentLoaded', () => {
    // Función para hacer un menu de navegacion sticky:
    // Seleccionar el elemento de navegación
    const nav = document.querySelector("nav");
    const header = document.querySelector("header");

    if (header && nav) {
        // Detectar la posición inicial del header
        const headerBottom = header.offsetTop + header.offsetHeight;
        console.log('Posición del header:', headerBottom);
    }

    // Scroll suave para el enlace de la flecha
    document.querySelector('.flecha-inicio').addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el salto instantáneo

        // Desplazar suavemente al inicio
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Función para actualizar la tabla con el radio seleccionado
    function actualizarTablaRadio(idTabla) {
        const seleccion = document.querySelector('input[name="contacto"]:checked');
        if (seleccion) {
            document.getElementById(idTabla).textContent = seleccion.value;
        }
    }
    
    actualizarTablaRadio();

    // Poner los datos en la tabla
    function actualizarTabla(idInput, idTabla) {
        const input = document.getElementById(idInput);
        const celda = document.getElementById(idTabla);
    
        if (input.type === "checkbox") {
            const checkboxes = document.querySelectorAll(`input[name="${input.name}"]:checked`);
            const valores = Array.from(checkboxes).map(checkbox => checkbox.value);
            celda.textContent = valores.join(", ");
        } else {
            celda.textContent = input.value;
        }
    }    

    actualizarTabla();

    // Función para mostrar/ocultar todo el currículum
    function toggleCurriculum() {
        console.log("Botón clickeado");
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

    toggleCurriculum();
});