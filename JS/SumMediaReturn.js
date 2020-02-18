
var askFor = Number(prompt("Enter a number..."))

function determiner(x) {
  var store = [];
  while(x>0){
    store.push(x);
    alert("Enter more numbers, or enter a negative number to get results...");
    x=Number(prompt("Enter a number..."));
  }
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  console.log(arrSum(store));
  var total = arrSum(store);
  var len = store.length;
  console.log(total/len);
 };
determiner(askFor)
