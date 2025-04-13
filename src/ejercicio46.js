/**Calcular promedio de notas

Tema: reduce()

const notas = [80, 90, 70, 100]
Usa reduce() para obtener la suma de las notas y luego calcula el promedio. */

const notas = [80, 90, 70, 100];
const suma = notas.reduce((total, nota) => total + nota, 0);
const promedio = suma / notas.length;
console.log(`Promedio: ${promedio}`);