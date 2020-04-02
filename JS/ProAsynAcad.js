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
