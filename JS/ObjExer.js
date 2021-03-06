// /*
// 1. Crear una función regular que muestre todos los numeros enteros positivos
// que existen entre el numero 1 y numero 2
// Tip: Usar una estructura de control de ciclo for
//
// Validaciones: Comprobar que el numero 2 no sea menor que el numero1, comprobar
// que el numero1 y numero2 sean numeros enteros positivos.
//
// Entrada / Input: numero1 = 4, numero2 = 9
//
// Salida / Output: 5, 6, 7, 8 (se puede utilizar un console.log para imprimir en
// consola cada numero)
//
// */
//
var count = 0;
var countTot = 0;
function betweenNums(a,b) {
  let check = b > a && a == parseInt(a) && b == parseInt(b) ? (a = a, b = b) : console.log("Not the numbers looked for..." + "\n" + "\n" + "Converting to integers if numbers entered are floats. Otherwise, if second number entered is bigger than the first one, the program will stop..." + "\n")
  for(let i = parseInt(a+1); i < parseInt(b); i++) {
    console.log(i) ;
  }
};

betweenNums(4,9) /*This is a one liner*/
//
//
// /* 2. Crear una función anonima para calcular si un numero es primo
// Tip: Usar un ciclo que vaya del 2 al numero a comprobar y revisar si ese numero
// se puede dividir entre la variable que va iterando en el ciclo -> si se puede
// dividir entonces no será un numero primo, si el numero no se puede dividir quiere
// decir que si será un numero primo
//
// Validaciones: Verificar que el numero ingresado sea entero positivo.
//
// Entrada/Input: 37
// Salida/Output: El numero 37 es un numero primo
//
// Entrada/Input: 34
// Salida/Output: El numero 34 no es un numero primo
// */
// let i = 2
// let primeNum = false;
// (function(num){
//   while(i < num){
//     if(num % i === 0){
//       i = num; /*This will make our while loop stop on next iteration*/
//       primeNum = false;
//     }else{
//       primeNum = true;
//     }
//     i++; /*In case it keeps going and there's no "false stop"*/
//   }
//   if(primeNum){
//     console.log("Number " + num + " is a prime number");
//   }else{
//     console.log("Number " + num + " is not a prime number")
//   }
// }(9));
// /*
// 3. Crear una función regular con dos parametros y un callback la función regular
// deberá tener un ciclo que vaya desde el primer numero hasta el segundo numero
// ingresados, por ultimo el callback deberá de tener la instrucción para mostrar
// en consola los numeros que sean pares entre ese rango.
//
// Validaciones: Verificar que los numeros ingresados sea entero positivo y que el
// numero1 sea menor que numero2.
//
// Entrada/Input: 8, 20
// Salida/Output: 8, 10, 12, 14, 16, 18, 20
//
// Entrada/Input: 20, 30
// Salida/Output: 20, 22, 24, 26, 28, 30
// */
//
// function runThroughIt(x,y,someFunc) {
//   for(let i = x; i < y; i++) {
//       someFunc(i);
//   }
// };
//
// var check = function(x) {
//   if(x%2 === 0 && x > 0 && x == parseInt(x)) {
//     console.log(x);
//   } else {
//     console.log("Not an integer, a positive value, or and even number...")
//   }
// };
//
// runThroughIt(-3,19,check)
//
// /*
// 4. Crear una función de flecha que muestre la tabla de multiplicar del numero
// ingresado.
// Input/Entrada: 8
// Output/Salida: 8x1 = 8
// 8x2 = 16
// 8x3 = 24
// 8xn = ...
// 8x10 = 80
// (Del 1 al 10)
// */
//
// const arrow = (a,b) => {
//   let i = 1;
//   while(i <= b) {
//     console.log(a*i);
//     i++;
//   }
// };
//
// console.log(arrow(8,10));
//
//
// /*Or same one as above but a one liner*/
//
// const arrow = (a,b) => {let i = 1; while(i <= b) {console.log(a*i); i++; }};
// console.log(arrow(8,10));
//
//
//
// /* 5. Crear una función regular que tenga como parametros
// un numero y una función de flecha como callback.
//
// Esta función regular deberá de tener un ciclo que vaya del 1 al numero ingresado.
// Dentro del ciclo deberás de llamar a la función que declaraste como parametro.
// La función de flecha deberá de tener un parametro para multiplicar el numero dentro
// de otro ciclo del 1 al 10 de tal forma de que el resultado será las tablas de
// multiplicar de 1 a n (numero ingresado)
//
// Validaciones: numero1 sea entero y > 1 (numero1 mayor que 1)
// Input/Entrada: 7
// Output/Salida: 1x1 = 1, 1x2 = 2, 1x3 = 3 ... 1x10 = 10
// 2x1 = 2 ... 2x10 = 20
// 3x1 = 3 ... 3x10 = 30
// 4x1 = 4 ... 4x10 = 40
// 5x1 = 5 ... 5x10 = 50
// 6x1 = 6 ... 6x10 = 60
// 7x1 = 7 ... 7x10 = 70
// */
//
//
// var z = Number(prompt("Enter a number between 1 and infinity: "));
//
// const arrow = (a,b) => {let i = 1; while(i <= b) {console.log(a*i);i++;}console.log("\n")};
//
// function checking(y){
//   if(y >= 1 && y !== isNaN(y)) {
//         multip(y, arrow)
//     };
//   while(y === isNaN(y) || y < 1) {
//       y = Number(prompt("Enter a number between 1 and infinity: "));
//       if(y >= 1 && y !== isNaN(y)) {
//         multip(y, arrow)
//     }
//   }
// };
//
// function multip(x, arrowFunc){
//   for(let i = 1; i <= x; i++) {
//     if(x !== isNaN(x)){
//       arrow(i,10)
//     }
//   }
// };
//
// checking(z)
//
//
//
// // Assignment 6:
// // 1. Escribe una función de flecha que tome un arreglo de números como argumento y regrese el último elemento de ese arreglo
// // Entrada/Input:
// // [3, 3, 2, 10, 9]
// // [8, 2, 9, 20, 9, 1, 39, 20]
// // Salida/Output: 9
// // Salida/Output: 20
// //
//
//
// let sendLastBack = (arr) => {
//   console.log(arr.length);
//   console.log(arr[arr.length -1]);
// }
//
// sendLastBack([3,3,2,10,9])
// sendLastBack([8,2,9,20,9,1,39,20])
//
//
//
//
// // 2. Escribe una función anónima que tome un arreglo de números como argumento y sustituye todos los números impares por su mismo valor multiplicado por 3
// // Entrada/Input: [5, 2, 10, 3, 9]
// // Salida/Output: [15, 2, 10, 9, 27]
// //
//
// (function(arr){
//   arr.forEach((element, index) => {
//     if (element % 2 !== 0) {
//       arr[index] *= 3;
//     }
//   });
//   console.log(arr);
// }([3,3,2,10,9]));
//
//
//
// // 3. Escribe una función de flecha que tome un arreglo de números como argumento y muestra el resultado de la sumatoria de todos los números
// // Entrada/Input: [10, 30, 15, 25, 5]
// // Salida/Output: 85
//
//
// let arr = [10,30,15,25,5];
// let total = 0;
// arr.forEach(element => total += element);
//   console.log(total);
//
//
// // Extra code to create an object from two arrays:
//
// let columns = ["Daniel", "Arturo", "Tito"];
// let rows = [1, 2, 3];
// var newarray = [];
// var emptyObj = {};
//   for (var i = 0; i < rows.length; i ++) {
//     var obj = {};
//     obj[rows[i]] = columns[i];
//     newarray.push(obj); /*This in case we wanna save our object in an array */
//     emptyObj = Object.assign(obj, emptyObj); /*This in case we wanna merge our object with another object */
//     obj = Object.assign(obj, obj); /*This is just the first empty object we created and this is how we append every new item created by each iteration... */
// };
//
// // console.log(newarray); /*This is the array that contains our object */
// console.log(obj); /*This is our original object, though in the end is the same as the second one we created, unless we decide not to use any secondary object to merge it with */
// //console.log(emptyObj); /*Here's the new merged object*/
//
//
//
// /*Extra code for arrow functions*/
//
// let arr = [3,5,7,8,9];
// let total = 0;
// arr.forEach(element => total += element);
//   console.log(total);
//
// /*This one will get you each index and value*/
// arr.forEach((element, index) => {
//     console.log(`Current index: ${index}`);
//     console.log(element);
// });
//
// /*This is a one liner arrow function*/
// arr.forEach(element => { for(let i = 0; i < 1; i++){total += element;}}); console.log(total);
