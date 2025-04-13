/**Área de un triángulo

Tema: función con retorno

Crea una función calcularAreaTriangulo(base, altura). Debe retornar el área usando la fórmula (base * altura) / 2.

Llama a la función con los valores ingresados por el usuario e imprime el resultado. */

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const base = parseFloat(prompt("Ingrese la base del triángulo:"));
const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
console.log(`El área del triángulo es: ${calcularAreaTriangulo(base, altura)}`);