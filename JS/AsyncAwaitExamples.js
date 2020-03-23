const util = require("util"); //This is how you import the "util" module, which will help us convert
//the "setTimeout" asynchronous callback func into a synchronous one, with the "promisify" function.
const sleep = util.promisify(setTimeout); //This is how you use the .promisify() function.

module.exports = { //This is some sort of object that contains two functions that will be exported onto
//our main js file to simulate server requests (We'll use async/await to make them synchronous).

//This will run both blocks of code within their previously set timers:

  async taskOne() {
    await sleep(4000);
    return "VALUE ONE";
  },

  async taskTwo(){
    await sleep(2000);
    return "VALUE TWO";
  }

};

//This will stop all of our code when it reaches the first error (which we intentionally created by
//using "throw new Error("SOME ERROR");")
//
// async taskOne() {
//   throw new Error("SOME ERROR");
//   await sleep(4000);
//   return "VALUE ONE";
// },
//
// async taskTwo(){
//   await sleep(2000);
//   return "VALUE TWO";
// }
//
// };
//
//
// //This will catch the first error, but it won't stop there, and it will continue to the next block of code.
//
// async taskOne() {
//   try {
//     throw new Error("SOME ERROR");
//     await sleep(4000);
//     return "VALUE ONE";
//   } catch(e) {
//     console.log(e);
//   }
// },
//
// async taskTwo() {
//   try{
//     await sleep(2000);
//     return "VALUE TWO";
//   } catch(e) {
//     console.log(e);
//   }
// }
//
// };
