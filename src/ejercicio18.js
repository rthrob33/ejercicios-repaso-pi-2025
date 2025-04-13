/**Validar usuario y contraseña

Tema: doble condición

let usuario = 'admin'
let contrasena = '1234'
Verifica si ambos valores son correctos.

Si lo son, imprime "Acceso permitido"; si no, "Datos incorrectos".*/
const readlineSync = require('readline-sync')
const USUARIO_CORRECTO = 'admin'
const CONTRASEÑA_CORRECTA = '1234'

let usuario = readlineSync.prompt('Usuario:')
let contraseña = readlineSync.prompt('Contraseña: ')

if (usuario === USUARIO_CORRECTO && contraseña === CONTRASEÑA_CORRECTA) {
    console.log('Acceso aceptado 🔐')
} else {
    console.log('acceso denegado 🔐')
}

