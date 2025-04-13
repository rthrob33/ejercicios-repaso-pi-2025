/**Ingreso a evento

Tema: operadores lógicos

let tieneEntrada = true
let estaEnLista = false
Muestra "Puede ingresar" solo si tiene entrada y está en lista. Si no, muestra "Acceso denegado". */
const readlineSync = require(`readline-sync`)
let tiendaEntrada = readlineSync.keyInYN(`Tiene entrada?`)
let estaEnlista = readlineSync.keyInYN(`Esta en la lista?`)


if (tiendaEntrada = true) {
    console.log(`Puede Ingresar`)
}if (estaEnlista = true) {
    console.log(`Puede ingresar`)
} else {
    console.log(`Usted no puede ingresar`)
}

