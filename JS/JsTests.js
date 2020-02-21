// This is just a small arrow funct we made:
//
// var flecha = (a,b) => a+b;
// console.log(flecha(1,5));

// This code will print numbers between two given values (a,b), and will check if b > a, and if both numbers are ints:

var count = 0;
var countTot = 0;
function betweenNums(a,b) {
  let check = b > a && a == parseInt(a) && b == parseInt(b) ? (a = a, b = b) : console.log("Not the numbers looked for..." + "\n" + "\n" + "Converting to integers if numbers entered are floats. Otherwise, if second number entered is bigger than the first one, the program will stop..." + "\n")
  for(let i = parseInt(a+1); i < parseInt(b); i++) {
    console.log(i) ;
  }
};

betweenNums(42,9) /*This is a one liner*/




var count = 0;
var countTot = 0;
function betweenNums(a,b) {
  let check = b > a && a == parseInt(a) && b == parseInt(b) ? runIt(a,b) : console.log("Not an integer, or second number bigger than first." + "Converting to integers if numbers entered are floats. Otherwise, if second number entered is bigger than the first one, the program will stop..." + "\n");
runIt(a,b)
};

function runIt(a,b) {
    for(let i = parseInt(a+1); i < parseInt(b); i++) {
    console.log(i) ;
  }
}

betweenNums(4.1,9) /*Returns our console.log error*/
betweenNums(4,9) /*Returns the result expected*/
/*This is the same as above but we have a funct within another one*/



// This function will find numeros primos:

function isPrime(num) {
  for(var i = 2; i < num; i++)
    // console.log(num%i); This line is just for debuggin
    if(num % i === 0) /*i will be increasing value with every iteration, and if our "num" % one of the values of i hits 0, our func will return false, and it's over. Not a prime number*/
    return false;
  return num > 1;
}
isPrime(9)


/*And this is the same but in an anonymous function*/

let i = 2
let primeNum = false;
(function(num){
  while(i < num){
    if(num % i === 0){
      i = num; /*This will make our while loop stop on next iteration*/
      primeNum = false;
    }else{
      primeNum = true;
    }
    i++; /*In case it keeps going and there's no "false stop"*/
  }
  if(primeNum){
    console.log("Number " + num + " is a prime number");
  }else{
    console.log("Number " + num + " is not a prime number")
  }
}(9));
