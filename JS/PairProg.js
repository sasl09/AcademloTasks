// 1. Escribe una función de flecha que tome un numero de más de dos dígitos como
// argumento y que muestre como resultado la diferencia entre el producto de todos
// sus dígitos y la suma de todos sus dígitos
// Entrada/Input: 234
// Salida/Output: 15
// Explicación:
// Producto de los dígitos = 2 * 3 * 4 = 24
// Suma de los dígitos = 2 + 3 + 4 = 9
// Resultado = 24 - 9 = 15
//

/*This is my code*/
var x = Number(prompt("Enter a two digit number: "));

var a = Array.from(x.toString()).map(Number);
console.log(a);
var b = 0;
var c = 0;
var totalSum = 0;
var totalMult = 1;
for(let i = 0; i < a.length; i ++) {
  var b = a[i];
  totalSum += b;
  console.log(totalSum);
  var c = a[i];
  totalMult *= c;
  console.log(totalMult);
};

var total = totalMult-totalSum;
if(total < 0){
  total *= -1;
};
console.log(total);


/*This is Sergio's*/
let x = Number(prompt("Enter a two digit number: "));
const multAdd = (x) => {
    console.log(x);
    let totalSum = 0;
    let totalMult = 1;

    x.toString().split('').forEach(c => totalSum += parseInt(c));
    console.log(totalSum);

    x.toString().split('').forEach(c => totalMult *= parseInt(c));
    console.log(totalMult);

    let total = totalMult - totalSum;
    console.log(total);
  }

  multAdd(x)


// 2. Escribe una función de flecha que tome un arreglo de números como argumento y
// busca cuál de los números es el mayor de todos y cuál es el menor
//
// Entrada/Input: [32, 30, 21, 23, 90]
// Salida/Output: El mayor es 90 y el menor es 21
//
// Tendrán 50 minutos para terminar los 3 puntos, favor de subir el archivo .js con su
// solución


let array = [32, 30, 21, 23, 90]


let maxandmin = (array) => {
  let max = Math.max(...array);
  let min = Math.min(...array);
  console.log(`El numero mayor es: ${max}`);
  console.log(`El numero mayor es: ${min}`);

}
maxandmin(array)


// 3. Escribe una función de flecha que reciba como argumento un arreglo de numeros positivos, la
// función deberá transformar ese arreglo a un numero entero y sumarle uno
// Entrada/Input: [1,2,3]
// Salida/Output: 124
//
// Entrada/Input: [4,3,2,1]
// Salida/Output: 4322


// let array = [4,3,2,1];
let array = [1,2,3];
let arr = 0;
let mergeThem = (array) => {
if (arr in array < 0) {
  console.log("No negative numbers...")
}else{
  let merger = "";
  let element = "";
  let total = 0;
  for(let i =0; i<array.length;i++){
      element = array[i].toString();
      merger += element;
  }
  total = parseInt(merger)+1;
  console.log(total);
  }
};
mergeThem(array)



// (Este punto es opcional) 4. Escribe una función de flecha que reciba como argumento un arreglo y
// elimine los elementos duplicados dentro de ese arreglo para que sólo quede un elemento de estos que
// estaban repetidos; por último muestra el tamaño del arreglo y cómo quedaría el arreglo una vez que se
// eliminan esos elementos.
//
// Entrada/Input: [1,1,2]
// Salida/Output: El tamaño del arreglo es 2 y el arreglo quedaría de la siguiente forma: [1, 2]
//
// Entrada/Input: [3, 2, 3, 4, 5, 3]
// Salida/Ouput: El tamaño del arreglo es 4 y el arreglo quedaría de la siguiente forma: [3, 2, 4, 5]
//
// Tendrán 50 minutos para terminar los 3 puntos, favor de subir el archivo .js con su solución

// Using filter:
let array = [1,1,2];
// let array = [1,1,2,3,3,3,2,1,4];
// let array = [3, 2, 3, 4, 5, 3];
var z = array.filter((a, b) => array.indexOf(a) === b)
console.log("The size of the array is: "+z.length+ "\n" + z);



// Another way:
function removeDuplicates(array) {
  let a = []
  array.map(x => {
    if(!a.includes(x)) {
      a.push(x)
    }
    })
  return a
};

removeDuplicates(array)


// Now using an object:
function removeDuplicates(array) {
  let x = {};
  array.forEach(function(i) {
    if(!x[i]) {
      x[i] = true
    }
  })
  return Object.keys(x)
};

removeDuplicates(array)



// This one actually creates a set from the values in the array, and a set automatically does not accept
// any repeated elements:

// Remember the "..." (spread operator) creates an array from going from beginning to end of another array,
// or taking values from an iteration:


let array = [1,2,2,3,3,4,5,5,5,5,6,1,2,3,8];
function removeDuplicates(array) {
  array.splice(0, array.length, ...(new Set(array)))
  console.log(array);
};

removeDuplicates(array)
