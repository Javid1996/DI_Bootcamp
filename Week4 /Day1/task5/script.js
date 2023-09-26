// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


// colors.forEach((color,index,) => {
    
    
//     console.log(`${index+1} choise is ${color}`)

    
// });

// colors.forEach((color) => {color=="Violet" ? console.log("Yeah") : console.log("No...") ;  });



const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

// Write a JavaScript program that displays the colors in the following order : 
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let originalIndex =(index)=>(
     index>3 ? ordinal[0]: ordinal[index] 
    //  !!! variable ad sehv idi , sonda console.log edib neticeye baxmayi unutmayin
)


colors.forEach((color,index) => {
    
    console.log(`${index+1}${originalIndex(index+1)} choise is ${color}`)
});