// Variables del juego
let ganadas = 0;
let perdidas = 0;
let empates = 0;
let rondasJugadas = 0;
const rondasTotales = 3;

// Elementos del DOM
const juego = document.getElementById('juego');
const resultado = document.getElementById('resultado');
const final = document.getElementById('final');
const ganadasElement = document.getElementById('ganadas');
const perdidasElement = document.getElementById('perdidas');
const empatesElement = document.getElementById('empates');

// Opciones del juego
const opciones = {
    1: { nombre: 'Piedra', emoji: '🪨' },
    2: { nombre: 'Papel', emoji: '🧻' },
    3: { nombre: 'Tijera', emoji: '✂️' }
};

// Función para jugar
function jugar(opcionJugador) {
    const opcionPC = Math.floor(Math.random() * 3) + 1;
    
    let mensaje = '';
    
    if (opcionJugador === opcionPC) {
        mensaje = "¡Empate! 😅";
        empates++;
    } else if (
        (opcionJugador === 1 && opcionPC === 3) || 
        (opcionJugador === 2 && opcionPC === 1) || 
        (opcionJugador === 3 && opcionPC === 2)
    ) {
        mensaje = "¡Ganaste! 🎉";
        ganadas++;
    } else {
        mensaje = "¡Perdiste! 😢";
        perdidas++;
    }
    
    // Mostrar resultado
    resultado.innerHTML = `
        <p>${mensaje}</p>
        <p>Tú: ${opciones[opcionJugador].emoji} ${opciones[opcionJugador].nombre}</p>
        <p>PC: ${opciones[opcionPC].emoji} ${opciones[opcionPC].nombre}</p>
    `;
    
    // Actualizar marcador
    ganadasElement.textContent = ganadas;
    perdidasElement.textContent = perdidas;
    empatesElement.textContent = empates;
    
    rondasJugadas++;
    
    // Verificar si se acabó el juego
    if (rondasJugadas >= rondasTotales) {
        mostrarFinal();
    }
}

// Función para mostrar resultados finales
function mostrarFinal() {
    juego.style.display = 'none';
    final.style.display = 'block';
    
    final.innerHTML = `
        <h2>¡Juego Terminado!</h2>
        <p>Ganaste: ${ganadas} veces</p>
        <p>Perdiste: ${perdidas} veces</p>
        <p>Empataste: ${empates} veces</p>
        <button onclick="reiniciar()">¡Jugar otra vez!</button>
    `;
}

// Función para reiniciar el juego
function reiniciar() {
    ganadas = 0;
    perdidas = 0;
    empates = 0;
    rondasJugadas = 0;
    
    ganadasElement.textContent = '0';
    perdidasElement.textContent = '0';
    empatesElement.textContent = '0';
    
    resultado.innerHTML = '';
    final.style.display = 'none';
    juego.style.display = 'block';
}

// Event listeners para los botones
document.querySelectorAll('.boton').forEach(boton => {
    boton.addEventListener('click', () => {
        const opcion = parseInt(boton.getAttribute('data-opcion'));
        jugar(opcion);
    });
});

// Verificación de edad al inicio (simplificada)
const nombre = prompt("¿Cómo te llamas?");
const edad = prompt("¿Cuántos años tienes?");

if (edad >= 18) {
    alert(`¡Hola ${nombre}! ¡Vamos a jugar!`);
} else {
    alert(`Lo siento ${nombre}, necesitas ser mayor de edad para jugar.`);
    document.body.innerHTML = `<h1 style="color:#EF476F;">No puedes jugar🥹</h1>`;
}