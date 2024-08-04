// 1)
//Escribí una función que reciba como parámetro un nombre y que imprima en consola “hola, soy {nombre} “.

//function imprimirNombre(nombre) {
//console.log(`Hola, soy ${nombre}`);
//}
//imprimirNombre("Emanuel");

//Con sintaxis de flecha

//const imprimirNombre = (nombre) => {
//console.log(`Hola, soy ${nombre}`);
//};

//imprimirNombre("Lucas");

//2)
//Escribí una función que imprima en consola la suma de dos números pasados por parámetro.

//function suma(num1, num2) {
//console.log(num1 + num2);
//}

//suma(5, 6);

//Con sintaxis de flecha

//const suma = (num1, num2) => {
//console.log(num1 + num2);
//};

//suma(8, 5);

//3)
//Escribí una función que reciba dos números por parámetro, multiplique a cada uno por dos y luego imprima por consola la suma de ambos números multiplicados.

//function sumarMultiplicados(num1, num2) {
//console.log(num1 * 2 + num2 * 2);
//}

//sumarMultiplicados(1, 4);

//Con sintaxis de flecha

//const sumarMultiplicados = (num1, num2) => {
//console.log(num1 * 2 + num2 * 2);
//};

//sumarMultiplicados(8, 9);

//4)
//Escribí una función que pueda recibir un número como parámetro y que imprima por consola la tabla de multiplicación del 1 al 10 de ese número.
//Nota: El mensaje en consola debe ser "user-friendly" (Ej. : El “(número) multiplicado por (número actual de la tabla) es igual a (resultado) “)

//function tablaDel(numero) {
//for (let i = 0; i <= 10; i++) {
//console.log(
//`El numero ${numero} multiplicado por ${i} es igual a ${numero * i}`
//);
//}
//}

//tablaDel(10);

//Con sintaxis de flecha

//const tablaDelConFlecha = (numero) => {
//for (let i = 0; i <= 10; i++) {
//console.log(
//`El numero ${numero} multiplicado por ${i} es igual a ${numero * i}`
//);
//}
//};

//tablaDelConFlecha(10);

//5)
//Escribí una función que reciba dos números por parámetro y que imprima por consola todo el intervalo entre ambos números, incluyéndolos. Por ejemplo , si ingresamos 1 y 3 deben imprimirse en consola los números “1” , “2” y “3”. Sin son iguales, que se imprima “Ambos números son iguales”.

//function intervaloEntre(num1, num2) {
//let numeroActual = num1;

//if (numeroActual > num2) {
//console.log(numeroActual);
//while (numeroActual > num2) {
//numeroActual--;
//console.log(numeroActual);
//}
//} else {
//console.log("Ambos numeros son iguales");
//}
//}

//intervaloEntre(40, 20);

//Con sintaxis de flecha

//const intervaloEntreConFlecha = (num1, num2) => {
//let numeroActual = num1;

//if (numeroActual > num2) {
//console.log(numeroActual);
//while (numeroActual > num2) {
//numeroActual--;
//console.log(numeroActual);
//}
//} else if (numeroActual < num2) {
//console.log(numeroActual);
//while (numeroActual < num2) {
//numeroActual++;
//console.log(numeroActual);
//}
//} else {
//console.log("Ambos numeros son iguales");
//}
//};

//intervaloEntreConFlecha(40, 20);

//6)
//Llegamos al último ejercicio. ¿Estás listo? vas a tener que :

//- Escribir las funciones “sumar” , “restar” , “multiplicar” “dividir” que puedan recibir dos parámetros e imprima en consola el resultado de la operación matemática correspondiente

//- Escribir una función que reciba dos números y una función como parámetros y que muestre en consola el resultado correspondiente a la operación matemática pasada como parámetro.
