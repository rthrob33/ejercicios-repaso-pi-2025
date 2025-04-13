/**Eliminar el último producto del carrito

Tema: pop()

const carrito = ['Pan', 'Leche', 'Huevos', 'Queso']
Elimina el último producto y muestra:

El producto eliminado.
El carrito actualizado. */

const carrito = ['Pan', 'Leche', 'Huevos', 'Queso'];
const eliminado = carrito.pop();
console.log(`Producto eliminado: ${eliminado}`);
console.log(`Carrito actualizado: ${carrito}`);