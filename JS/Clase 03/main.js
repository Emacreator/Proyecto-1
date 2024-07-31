//for (let i = 1; i <= 10; i++) {
//console.log(`el numero que estamos iterando es $(i)`);
//console.log(`===`);
//console.log(i);
//}

//Break

//for (let i = 0; i <= 10; i++) {
//if (i === 5) {
//break;
//}
//if (i === 5) break;
//console.log(i);
//}

//Continue

//for (let i = 1; i <= 10; i++) {
//if (i === 4) {
//console.log(`numero ${i} salteado`);
//continue;
//}
//if (i === 4) continue;
//console.log(i);
//}

//Saltear numeros pares

//for (let i = 1; i <= 80; i++) {
//if (i % 2 === 0) {
//console.log(`El numero ${i} es par`);
//continue;
//break;
//} else {
//console.log(`El numero ${i} es impar`);
//}
//}

//Sumar todos los numeros desde n hasta n

/*
Una variable para guardarme cuanto vale la suma total
0 + 1 = 1
1 + 2 = 3
3 + 4 = 7
 */

let suma = 0;

for (let i = 1; i <= 10; i++) {
  console.log(`Vuelta: ${i}`);
  console.log(`Suma vale: ${suma}`);
  //console.log(`suma vale ahora: ${suma = suma + i}`)
  console.log(`Suma vale ahora: ${(suma += i)}`);
  console.log(`=======================`);
}
