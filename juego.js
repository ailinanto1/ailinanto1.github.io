// Juego de memoria
const cartasArray = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍋', '🍑', '🍓'];
let cartas = [...cartasArray, ...cartasArray];  // Duplicar las cartas para hacer pares
cartas = cartas.sort(() => Math.random() - 0.5);  // Mezclar las cartas

const juego = document.getElementById('juego');
const mensaje = document.getElementById('mensaje');

let primeraCarta = null;
let segundaCarta = null;
let bloquearTablero = false;
let paresEncontrados = 0;
let nombreJugador = ''; 
let tiempoInicio = 0; 
let fallos = 0; 

function reiniciarJuego() {
    cartasVolteadas = [];
    cartasSeleccionadas = [];
    juego.innerHTML = '';
    paresEncontrados = 0;
    cartas = [...cartasArray, ...cartasArray].sort(() => Math.random() - 0.5);
    crearTablero();
    mensaje.textContent = '';
}

// Crear el tablero de cartas
function crearTablero() {
    // Barajar las cartas (en caso de que sea necesario aleatorizarlas)
    cartas.sort(() => 0.5 - Math.random());

    // Limpiar el tablero y reiniciar variables globales
    juego.innerHTML = ''; // Limpia el contenedor del tablero
    cartasVolteadas = []; // Reinicia el arreglo de cartas volteadas
    cartasSeleccionadas = []; // Reinicia las cartas seleccionadas
    fallos = 0; // Reinicia el contador de fallos
    tiempoInicio = Date.now(); // Marca el inicio del tiempo

    // Crear las cartas en el tablero
    cartas.forEach((simbolo, index) => {
        const carta = document.createElement('div');
        carta.classList.add('carta'); // Clase para estilos en CSS
        carta.dataset.simbolo = simbolo; // Simbolo para verificar parejas
        carta.dataset.index = index; // Índice para identificar la carta

        // Agregar evento para voltear la carta
        carta.addEventListener('click', voltearCarta);

        // Agregar la carta al contenedor del tablero
        juego.appendChild(carta);
    });
}

function verificarPareja() {
    const [carta1, carta2] = cartasSeleccionadas;

    if (carta1.valor === carta2.valor) {
        // Si coinciden, desactiva las cartas.
        cartasVolteadas.push(carta1, carta2);
    } else {
        // Si no coinciden, aumenta los fallos.
        fallos++;
        setTimeout(() => {
            carta1.elemento.classList.remove('volteada');
            carta2.elemento.classList.remove('volteada');
        }, 1000);
    }

    // Comprueba si el juego ha terminado.
    if (cartasVolteadas.length === cartas.length) {
        finalizarJuego();
    }

    cartasSeleccionadas = [];
}

// Voltear carta
function voltearCarta(event) {
    if (bloquearTablero) return;
    const carta = event.target;

    // Evitar que el usuario seleccione la misma carta dos veces
    if (carta === primeraCarta) return;

    carta.classList.add('volteada');
    carta.textContent = carta.dataset.simbolo;

    if (!primeraCarta) {
        // Primer clic
        primeraCarta = carta;
    } else {
        // Segundo clic
        segundaCarta = carta;
        bloquearTablero = true;

        // Verificar si las cartas coinciden
        if (primeraCarta.dataset.simbolo === segundaCarta.dataset.simbolo) {
            // Son iguales
            paresEncontrados++;
            reiniciarCartas();
            if (paresEncontrados === cartasArray.length) {
                mensaje.textContent = "¡Felicidades! Has encontrado todos los pares.";
            }
        } else {
            // No son iguales, voltearlas nuevamente
            setTimeout(() => {
                primeraCarta.classList.remove('volteada');
                primeraCarta.textContent = '';
                segundaCarta.classList.remove('volteada');
                segundaCarta.textContent = '';
                reiniciarCartas();
            }, 1000);
        }
    }
}

function finalizarJuego() {
    const tiempoFin = (Date.now() - tiempoInicio) / 1000;

    // Crear contenedor para resultados
    const resultados = document.createElement('div');
    resultados.classList.add('resultados');

    // Crear el título
    const titulo = document.createElement('h2');
    titulo.textContent = '¡Juego Terminado!';
    resultados.appendChild(titulo);

    // Crear la tabla
    const tabla = document.createElement('table');

    // Crear encabezados
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Tiempo (segundos)</th>
            <th>Fallos</th>
        </tr>`;
    tabla.appendChild(thead);

    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    tbody.innerHTML = `
        <tr>
            <td>${nombreJugador}</td>
            <td>${tiempoFin.toFixed(2)}</td>
            <td>${fallos}</td>
        </tr>`;
    tabla.appendChild(tbody);

    resultados.appendChild(tabla);

    // Crear el botón de reinicio
    const botonReiniciar = document.createElement('button');
    botonReiniciar.id = 'reiniciar';
    botonReiniciar.textContent = 'Reiniciar Juego';
    resultados.appendChild(botonReiniciar);

    document.body.appendChild(resultados);

    // Evento para reiniciar el juego
    botonReiniciar.addEventListener('click', () => {
        resultados.remove();
        reiniciarJuego();
    });
}

function reiniciarCartas() {
    primeraCarta = null;
    segundaCarta = null;
    bloquearTablero = false;
}

// Inicializar el juego
crearTablero();

// Reiniciar juego
reiniciarJuego();











// Scroll suave para el enlace de la flecha
document.querySelector('.flecha-inicio').addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el salto instantáneo

    // Desplazar suavemente al inicio
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});