 import people from './data.js';
 import {test,test2} from './data.js';
let sum = 0;

people.forEach(element => {
    sum +=element.age;     
});

let avr =sum/3;

console.log(avr);


