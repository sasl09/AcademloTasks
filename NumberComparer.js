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
