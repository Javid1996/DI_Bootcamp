


//Write some simple Javascript code that will join all the items in the array above, and console.log the result.

let sentence = ["my","favorite","color","is","blue"];
sentenceString=sentence.toString();
console.log(sentenceString);




// Exercise 2 : Mixup

// Create 2 variables. The values should be strings. For example:

let str1 = "Marko";
let str2 = "Polo";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let mar=str1.slice(0,3);
let ko = str1.slice(2);
let po = str2.slice(0,2);
let lo = str2.slice(2);
// ! slice etdikden sonra herflerin yerini bdeyisdirmeyi isteyir



// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

let swapResult = mar + lo + " " + po + ko;



// 4. Finally console.log the new concatenated string.

console.log(swapResult);





// Exercise 3 : Calculator

// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1. 
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1=prompt("please add a first number");
console.log(+num1);
console.log(typeof(+num1));
let num2=prompt("please add a second number");
let sum = +num1 + +num2;
//! number() metodundan istifade daha uygun
alert(`Do you want to sum ${+num1} and ${+num2}?`);
alert(`The sum of ${+num1} and ${+num2} is ${+sum}`)




