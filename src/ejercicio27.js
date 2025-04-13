/** Juego del número secreto

Tema: do...while con condición

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1
console.log(`El número secreto es: ${NUMERO_SECRETO}`)
Crea un juego que pide números hasta adivinar el número secreto.

Muestra: "¡Adivinaste!" cuando el intento sea correcto.

Haz que el valor de intento cambie dentro del bucle. */

const NUMERO_SECRETO = Math.floor(Math.random() * 100) + 1;
let intento;
let adivinado = false;

do {
    intento = parseInt(prompt("Adivina el número secreto (1-100):"));
    
    if (intento === NUMERO_SECRETO) {
        console.log("¡Adivinaste!");
        adivinado = true;
    } else if (intento < NUMERO_SECRETO) {
        console.log("El número es mayor");
    } else {
        console.log("El número es menor");
    }
} while (!adivinado);