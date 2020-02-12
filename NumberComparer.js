function determiner(x,y) {
  if(x > y) {
    console.log(x + " is bigger than: " + y);
  }
  else if (x < y) {
    console.log(y + " is bigger than: " + x);
  }
  else if (x == y) {
    console.log(x + " equals: " + y);
  }
};
determiner(2,3)

// This is the same as above, but shorter and cooler...
// var askFor = parseInt(prompt("Enter a number..."))
// var askFor2 = parseInt(prompt("Enter a number..."))
// function determiner(x,y) {
//   var determine =(x > y ? console.log(x + " is bigger than: " + y): y > x ? console.log(y + " is bigger than: " + x) : console.log(x + " equals: " + y));
//  };
// determiner(askFor,askFor2)
