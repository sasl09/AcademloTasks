let array = [1,1,1,2,3,4,5,5,5,6,2,2,2,3];
let total = [];
let empty = array;
let x = 0;
for(let i = 0; i<array.length; i++) {
  x = array[i];
  if(x in total) {
    empty.pop(x);
  }else{
    total.push(x);
  }
console.log(total);
// console.log(empty);
};
