// 1. Escribe una función regular que tome como argumento un arreglo y multiplica por dos cada elemento dentro del arreglo utilizando el método map
//
// Entrada/Input: [3,2,5,6,19]
// Salida/Output: [6,4,10,12,38]


let array = [1,2,3,4,5,6,7,8];
function mult(arr){
  let y = arr.map(x => x * 2)
  console.log(y);
};

mult(array)



// 2. Escribe una función de flecha que tome un arreglo de números y filtre aquellos que son mayores o iguales a 20
// Entrada/Input: [21, 15, 8, 29, 20, 1, 79]
// Salida/Output: [21, 29, 20, 79]


let array = [21, 15, 8, 29, 20, 1, 79];
let y = array.filter(x => x >= 20)
console.log(y);



//
// 3. Escribe una función de flecha que tome un arreglo de números y filtra aquellos que son impares
// Entrada/Input: [4, 3, 2, 3, 7, 8]
// Salida/Output: [3, 3, 7]



let array = [4, 3, 2, 3, 7, 8];
let y = array.filter(x => x % 2 !== 0)
console.log(y);



// 4. Escribe una función de flecha que tome un arreglo de números y regrese el promedio de todos los elementos
// dentro del arreglo usando el método reduce
// Entrada/Input: [5, 3, 2, 1, 8, 10]
// Salida/Output: 29/6 = 4.83 ...


let array = [5, 3, 2, 1, 8, 10];
let y = array.reduce((x, y) => x += y);
let z = y/array.length;
console.log(z);
