/**Validar correo electrónico

Tema: lógica dentro de función

Crea una función validarCorreo(correo). Debe verificar si el string contiene "@" y "."

Si es así, muestra "Correo válido", si no, "Correo inválido".

Solicita un correo al usuario. */

function validarCorreo(correo) {
    return correo.includes('@') && correo.includes('.');
}

const correo = prompt("Ingrese su correo electrónico:");
console.log(validarCorreo(correo) ? "Correo válido" : "Correo inválido");