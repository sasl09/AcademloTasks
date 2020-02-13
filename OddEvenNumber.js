var askFor = Number(prompt("Enter a number..."))

function determiner(x) {
  while(x ==! "Cerrar" || x>0 || isNaN(x)==false){
    if(x % 2 == 0){
      console.log(x + " is even");
      x = Number(prompt("Enter another number, or enter Cerrar to close the program"));
    } else {
      console.log(x + " is odd");
      x = Number(prompt("Enter another number, or enter Cerrar to close the program"));
    }
  }
};
determiner(askFor)
