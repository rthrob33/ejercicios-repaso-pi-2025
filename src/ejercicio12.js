/**12. Mayoría de edad

Tema: if-else

let edad = 17
Si la edad es mayor o igual a 18, muestra "Eres mayor de edad". Si no, muestra "Eres menor de edad". */

const readlineSync = require('readline-sync')
let edad = readlineSync.question(`Que edad tienes?`)

if (edad >= 18) {
    console.log(`Eres mayor de edad`)
}else {
    console.log(`Eres menor de edad`)
}