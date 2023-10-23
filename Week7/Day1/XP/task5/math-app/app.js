const lodash = require('lodash');


const {sum,multiply} = require('./math');

let lower = 1;
let upper = 99;
let number1 = getRandomNumber();
let number2 = getRandomNumber();
function getRandomNumber(){
    let num = lodash.random(lower, upper)
    console.log(num);
    return num
}

sum(number1,number2)
multiply(number1,number2)

