/**Descuento por edad

Tema: condición múltiple

let edad = 68
Muestra "Descuento especial" si tiene menos de 12 o más de 65 años. De lo contrario, muestra "Sin descuento". */
const readlineSync = require(`readline-sync`)
let edad = readlineSync.question(`Cual es su edad?`)
if (edad <= 12 | edad >= 65) {
    console.log(`Descuento especial`)
} else {
    console.log(`Sin descuento`)
}
