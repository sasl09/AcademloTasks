const { taskOne, taskTwo } = require("./AsyncAwaitExamples");

//THIS IS WHAT THE CALL SEQUENCIAL CODE WITH ASYNC AWAIT:

//This will execute our blocks one by one until each has received response from our "made up server (AsyncAwaitExamples.js)"
// async function main() {
//   console.time("Measuring Time");
//   const valueOne = await taskOne();
//   const valueTwo = await taskTwo();
//   console.timeEnd("Measuring Time")
//
//   console.log("Task one: ", valueOne);
//   console.log("Task two: ", valueTwo);
// }
//
// main();
//
// //We can actually catch the errors here too, in case there's an error on this file.
//
// async function main() {
//   try {
//     console.time("Measuring Time");
//     const valueOne = await taskOne();
//     const valueTwo = await taskTwo();
//     console.timeEnd("Measuring Time")
//
//     console.log("Task one: ", valueOne);
//     console.log("Task two: ", valueTwo);
//   }catch(e) {
//     console.log(e);
//   }
// }
//
// main();
//


//THIS IS THE PARALLEL WAY OF DOING IT (TWO OR MORE TASKS ON SAME LINE OF CODE, WITHIN THE SAME AWAIT COMMAND):

//This one's kinda cool since it will perform two tasks at the same time, and therefore it will be faster,
//for instance, the sequential way takes 6 seconds on both since it has to wait 4 seconds to execute the
//first one, and then 2 more for the second one, while this parallel way takes 4 seconds on both.

async function main() {
  try {
    console.time("Measuring Time");
    const results = await Promise.all([taskOne(), taskTwo()])
    console.timeEnd("Measuring Time")

    console.log("Task one: ", results[0]);
    console.log("Task two: ", results[1]);
  }catch(e) {
    console.log(e);
  }
}

main();
