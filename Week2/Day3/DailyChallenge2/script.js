const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)


let strNumbers = numbers.toString();
console.log(strNumbers);

let joinPlusNumber = numbers.join('+');
console.log(joinPlusNumber);

let joinSpaceNumber = numbers.join(' ');
console.log(joinSpaceNumber);

let joinZeroNumber = numbers.join('');
console.log(joinZeroNumber);
