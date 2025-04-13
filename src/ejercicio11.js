/**11. Puede conducir o no

Tema: operadores lógicos &&

let edad = 22
let tieneLicencia = true
Usa una condición para verificar si puede conducir. */
const readlineSync = require('readline-sync')
let edad = readlineSync.question('Cual es su edad?')
let tieneLicencia = readlineSync.keyInYN(`Posee licencia de conducir?`)

if (edad >= 18 && tieneLicencia) {
    console.log(`si puedes conducir.`)
} else {
    console.log(`No puedes conducir`)
}

