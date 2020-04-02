//Number 1:
time = new Date();
function makeDate(date){
  console.log(time.getFullYear() +'/'+ time.getMonth()+"/"+ time.getDate());
  console.log(time.getFullYear() +'-'+ time.getMonth()+"-"+ time.getDate());
};

makeDate(time)



//Number 2:
const date = new Date(2009, 10, 10);

const arrow = (date) => {
  const month = date.toLocaleString('default', { month: 'long' });
  return month;
}

console.log(arrow(date));



//Number 3:
let anonymous = function(date1,date2) {
  const diffDays = date2 > date1 ? date2 + " is more current..." : date2 < date1 ? date1 + " is more current..." : date1 + " and " + date2 + " are equal...";
  return diffDays;
}


console.log(anonymous(new Date(2021,10,3), new Date(2020,11,7)));
