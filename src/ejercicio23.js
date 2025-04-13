/**Mes del año

Tema: agrupación de casos

let mes = 'abril'
Muestra cuántos días tiene el mes:

30 días → "abril", "junio", "septiembre", "noviembre"
31 días → "enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"
28 días → "febrero"
Otro → "Mes no válido" */

let mes = 'abril';

if (['abril', 'junio', 'septiembre', 'noviembre'].includes(mes)) {
    console.log('30 días');
} else if (['enero', 'marzo', 'mayo', 'julio', 'agosto', 'octubre', 'diciembre'].includes(mes)) {
    console.log('31 días');
} else if (mes === 'febrero') {
    console.log('28 días');
} else {
    console.log('Mes no válido');
}