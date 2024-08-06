// Ejercicio 1

//const positivoNegativoCero = (num) => {
//if (num > 0) {
//console.log("Positivo");
//} else if (num < 0) {
//console.log("Negativo");
//} else {
//console.log("El numero es 0");
//}
//};

//positivoNegativoCero(10);
//positivoNegativoCero(-2);
//positivoNegativoCero(0);

//Ejercicio 2

//const calcularDescuento = (precio, descuento) => {
//const calcDescuento = precio * (descuento / 100);
//return calcDescuento
//console.log(calcDescuento);
//};

//calcularDescuento(1000, 2);

//Ejercicio 3

//const categoriaEdad = (num) => {
//if (num <= 12) {
//console.log("niño");
//} else if (num <= 19) {
//console.log("adolescente");
//} else {
//console.log("mayor");
//}
//};

//categoriaEdad(10);
//categoriaEdad(18);
//categoriaEdad(35);

//Ejercicio 4

//const contraseñaPredefinida = 123456;
//const contraseña = prompt("Ingrese contraseña");
//if (contraseña == contraseñaPredefinida) {
//alert("Contraseña Correcta, acceso otorgado");
//} else {
//alert("contraseña Incorrecta, acceso denegado");
//}

//Ejercicio 5

//function recorrerParImpar(num) {
//for (let i = 0; i <= num; i++) {
//if (i % 2 == 0) {
//console.log(`el numero ${i} es par`);
//} else {
//console.log(`el numero ${i} es impar`);
//}
//}
//}

//recorrerParImpar(15);

//Ejercicio 6

const calcularEdadEnDias = (edad) => {
  const totalDias = edad * 365;
  console.log(`Tu edad ${edad} en dias son ${totalDias}`);
};

calcularEdadEnDias(29);
