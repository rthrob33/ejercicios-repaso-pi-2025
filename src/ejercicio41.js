/**Generar contraseña aleatoria

Tema: lógica con bucle dentro de función

Crea una función generarContraseña(longitud). Debe retornar una contraseña aleatoria con letras y números.

Ejemplo: "a7d3g8" si la longitud es 6.

(No necesitas usar caracteres especiales). */

function generarContraseña(longitud) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let contraseña = '';
    
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }
    
    return contraseña;
}

console.log(generarContraseña(6));