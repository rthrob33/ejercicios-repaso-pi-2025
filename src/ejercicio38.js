/**Verificar si un número es par

Tema: función condicional

Crea una función esPar(numero). La función debe retornar true si el número es par, o false si es impar.

Prueba la función con el número 7. */

function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(7) ? "7 es par" : "7 es impar");