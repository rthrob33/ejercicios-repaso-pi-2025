/**Saludo personalizado

Tema: función con parámetro, sin retorno

Crea una función llamada saludar(nombre), Debe imprimir un saludo como:

"Hola, Juan. Bienvenido a la clase de programación."

Llama a la función con el nombre ingresado por el usuario. */
function saludar(nombre) {
    console.log(`Hola, ${nombre}. Bienvenido a la clase de programación.`);
}

const nombreUsuario = prompt("Ingrese su nombre:");
saludar(nombreUsuario);