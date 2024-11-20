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
    function actualizarTablaRadio(tablaId) {
        const radios = document.getElementsByName("contacto");
        let valorSeleccionado = "";

        // Encontrar el radio seleccionado
        for (const radio of radios) {
            if (radio.checked) {
                valorSeleccionado = radio.value;
                break;
            }
        }

        // Actualizar el contenido en la tabla
        document.getElementById(tablaId).textContent = valorSeleccionado;
    }

    actualizarTablaRadio();

    // Poner los datos en la tabla
    function actualizarTabla(inputId, tablaId) {
        // Verificar si el campo es parte de los checkboxes de suscripción
        if (inputId === 'noticias' || inputId === 'promociones' || inputId === 'alertas' || inputId === 'eventos') {
            const checkboxes = document.querySelectorAll('input[name="suscripcion"]:checked'); // Selecciona solo los checkboxes marcados
            const valoresSeleccionados = Array.from(checkboxes).map(checkbox => checkbox.value); // Obtén los valores de los checkboxes seleccionados
            document.getElementById(tablaId).textContent = valoresSeleccionados.join(', '); // Muestra los valores seleccionados en la tabla
        } else {
            // Para otros campos, solo toma el valor directo del input
            const valor = document.getElementById(inputId).value;
            document.getElementById(tablaId).textContent = valor;
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