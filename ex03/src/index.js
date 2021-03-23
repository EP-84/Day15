function printManyTimes(str) {
"use strict";

// Only change code below this line
const SENTNCE = str + " is cool!";
for (let i = 0; i < str.length; i += 2) {
 console.log(SENTNCE);
}

return SENTNCE;

}
printManyTimes("Arena");
module.exports = printManyTimes;