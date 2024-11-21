// Actualiza los datos de la tabla con base en el input
function actualizarTabla(idInput, idTabla) {
    const input = document.getElementById(idInput);
    const celda = document.getElementById(idTabla);

    if (input.type === "checkbox") {
        // Manejar checkboxes seleccionados
        const checkboxes = document.querySelectorAll(`input[name="${input.name}"]:checked`);
        const valores = Array.from(checkboxes).map(checkbox => checkbox.value);
        celda.textContent = valores.join(", ");
    } else {
        // Manejar otros tipos de input
        celda.textContent = input.value;
    }
}

// Actualiza los datos de la tabla con base en los radios seleccionados
function actualizarTablaRadio(idTabla) {
    const seleccion = document.querySelector('input[name="contacto"]:checked');
    const celda = document.getElementById(idTabla);

    if (seleccion) {
        celda.textContent = seleccion.value;
    }
}

// Maneja la validación del código postal y actualiza la tabla
document.getElementById('codigo-postal').addEventListener('input', function () {
    const celda = document.getElementById('tablaCorreo-postal');
    if (this.checkValidity()) {
        this.style.borderColor = ""; // Vuelve a normal si es válido
        celda.textContent = this.value;
    } else {
        this.style.borderColor = "red"; // Destaca el campo en rojo si es inválido
        celda.textContent = ""; // Borra el valor en la tabla
    }
});

// Botón "Cargar" para actualizar toda la tabla
document.querySelector('button[type="button"]').addEventListener('click', function () {
    // Lista de IDs de inputs y sus celdas correspondientes
    const inputs = [
        { idInput: 'nombre', idTabla: 'tablaNombre' },
        { idInput: 'apellido', idTabla: 'tablaApellido' },
        { idInput: 'email', idTabla: 'tablaEmail' },
        { idInput: 'telefono', idTabla: 'tablaTelefono' },
        { idInput: 'edad', idTabla: 'tablaEdad' },
        { idInput: 'direccion', idTabla: 'tablaDireccion' },
        { idInput: 'provincia', idTabla: 'tablaProvincia' }
    ];

    // Actualizar todos los campos de texto, número, etc.
    inputs.forEach(input => actualizarTabla(input.idInput, input.idTabla));

    // Actualizar radios
    actualizarTablaRadio('tablaContacto');

    // Actualizar checkboxes (Suscripción)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const valoresCheckbox = Array.from(checkboxes).map(checkbox => checkbox.value);
    document.getElementById('tablaSuscripcion').textContent = valoresCheckbox.join(", ");
});