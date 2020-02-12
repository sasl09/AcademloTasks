// This the classic and long way of doing it:

// function determiner(x,y) {
//   if(x > y) {
//     console.log(x + " is bigger than: " + y);
//   }
//   else if (x < y) {
//     console.log(y + " is bigger than: " + x);
//   }
//   else if (x == y) {
//     console.log(x + " equals: " + y);
//   }
// };
// determiner(2,3)



// This is the same as above, but shorter and cooler...

// var askFor = parseInt(prompt("Enter a number..."))
// var askFor2 = parseInt(prompt("Enter a number..."))
// function determiner(x,y) {
//   var determine =(x > y ? console.log(x + " is bigger than: " + y): y > x ? console.log(y + " is bigger than: " + x) : console.log(x + " equals: " + y));
//  };
// determiner(askFor,askFor2)


// And this is the same as above, but adding a NaN checker:

var askFor = parseInt(prompt("Enter a number..."))
var askFor2 = parseInt(prompt("Enter a number..."))
function promptIt(x, y) {
  if (isNaN(x) || isNaN(y)) {
    alert("That's not a number...")
    x = parseInt(prompt("Enter a number..."));
    y = parseInt(prompt("Enter a number..."));
    determiner(x,y)
  } else {
    determiner(x,y)
  }
};

function determiner(x,y) {
  var determine =(x > y ? console.log(x + " is bigger than: " + y): y > x ? console.log(y + " is bigger than: " + x) : console.log(x + " equals: " + y));
 };
promptIt(askFor,askFor2)
