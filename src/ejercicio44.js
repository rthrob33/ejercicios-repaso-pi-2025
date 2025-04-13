/**Aplicar IVA a productos

Tema: map()

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
]
Crea un nuevo arreglo con los precios incluyendo 12% de IVA.

Muestra el nuevo arreglo con los precios modificados.

 */

const productos = [
    { nombre: 'Zapatos', precio: 100 },
    { nombre: 'Camisa', precio: 80 },
];

const productosConIVA = productos.map(producto => ({
    nombre: producto.nombre,
    precio: producto.precio * 1.12
}));

console.log(productosConIVA);