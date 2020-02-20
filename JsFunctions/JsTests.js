// This is just a small arrow funct we made:
//
// var flecha = (a,b) => a+b;
// console.log(flecha(1,5));

// This code will print numbers between two given values (a,b), and will check if b > a, and if both numbers are ints:

var count = 0;
var countTot = 0;
function betweenNums(a,b) {
  let check = b > a && a == parseInt(a) && b == parseInt(b) ? runIt(a,b) : console.log("Not an integer, or second number bigger than first.");
runIt(a,b)
};

function runIt(a,b) {
    for(let i = parseInt(a+1); i < parseInt(b); i++) {
    console.log(i) ;
  }
}

betweenNums(4.1,9) /*Returns our console.log error*/
betweenNums(4,9) /*Returns the result expected*/



// This function will find numeros primos:

let i = 2, primo = false;
(function(numero){
  while(i < numero){
    if(numero%i === 0){
      i = numero;
    }else{
      primo = true;
    }
    i++;
  }
  if(primo){
    console.log("El numero " + numero+ " es un numero primo");
  }else{
    console.log("El numero " + numero + " no es un numero primo")
  }
}(37));
