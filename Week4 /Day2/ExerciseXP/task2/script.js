// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.


function converter(kg){
let gr= kg*1000
return gr+'gr'
}

console.log(converter(3));


(function expConverter(kg){
    let gr= kg*1000;
 console.log(gr+'gr')
})(5)


const ArrowConverter = (kg) =>{let gr= kg*1000; return gr+'gr' }
console.log(ArrowConverter(8))