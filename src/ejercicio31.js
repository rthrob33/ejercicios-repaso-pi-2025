/**Contar números pares

Tema: condición dentro de for

const numeros = [2, 7, 10, 15, 22, 33]
Cuenta cuántos números del arreglo son pares. */

const numeros = [2, 7, 10, 15, 22, 33];
let contadorPares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        contadorPares++;
    }
}

console.log(`Cantidad de números pares: ${contadorPares}`);