/**Calificación mínima

Tema: if-else

let nota = 55
Si la nota es mayor o igual a 60, imprime "Aprobado". Si no, imprime "Reprobado". */
const readlineSync = require('readline-sync')
let nota = readlineSync.question(`Cual es su nota?`)
if (nota >= 60) {
    console.log(`Aprobado`)
} else {
    console.log(`Reprobado`)
}