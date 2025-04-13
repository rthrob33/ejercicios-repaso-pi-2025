/**Menú interactivo (simulado)

Tema: do...while

Simula un menú que se muestra al menos una vez.

Si opcion es "A", muestra "Bienvenid@".

Si opcion es "B", permita la entrada de un nombre y muestra "Bienvenid@ ${nombreIngresado}".

Repite mientras opcion no sea "3". */

let opcion;
do {
    opcion = prompt("Menú:\nA. Bienvenida genérica\nB. Bienvenida personalizada\n3. Salir");
    
    if (opcion === "A") {
        console.log("Bienvenid@");
    } else if (opcion === "B") {
        const nombreIngresado = prompt("Ingrese su nombre:");
        console.log(`Bienvenid@ ${nombreIngresado}`);
    }
} while (opcion !== "3");