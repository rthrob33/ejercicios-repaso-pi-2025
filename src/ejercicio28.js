/**Validación de contraseña

Tema: verificación en do...while

const CONTRASENA_CORRECTA = 'claveSegura'
Repite el ingreso de contraseña hasta que coincida con la correcta.

Muestra "Contraseña incorrecta" cada vez que falle y "Acceso permitido" al final. */

const CONTRASENA_CORRECTA = 'claveSegura';
let contrasena;

do {
    contrasena = prompt("Ingrese la contraseña:");
    if (contrasena !== CONTRASENA_CORRECTA) {
        console.log("Contraseña incorrecta");
    }
} while (contrasena !== CONTRASENA_CORRECTA);

console.log("Acceso permitido");