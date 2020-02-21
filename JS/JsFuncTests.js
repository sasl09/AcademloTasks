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

function isPrime(num) {
  for(var i = 2; i < num; i++)
    // console.log(num%i); This line is just for debuggin
    if(num % i === 0) /*i will be increasing value with every iteration, and if our "num" % one of the values of i hits 0, our func will return false, and it's over. Not a prime number*/
    return false;
  return num > 1;
}
isPrime(9)
