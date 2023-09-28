// 🌟 Exercise 3 : Star Wars
// Instructions
// 

// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const stringEpic = epic.reduce((acc,value) => {
    return acc +' '+value;
}, " ")
console.log(stringEpic);