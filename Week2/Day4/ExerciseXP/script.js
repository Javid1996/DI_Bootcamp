//  Exercise 1 : Information

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.



function infoAboutMe(){
    console.log(`My name is ${name}, i am ${age} years old, and my hobby is ${hobbies}`)
}

let name="Javid";
let age = 26;
hobbies = "skiing";

infoAboutMe()



// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")



function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`Your name is ${personName},  you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}



infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")







// 🌟 Exercise 2 : Tips

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill. 

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.


function calculateTip(){
    
    let bill=prompt("Please add amount of the bill");
    let tip;
    if(!isNaN(bill)){
        if(bill<50){
            tip=bill*0.2;
            console.log(`Tip: ${tip} ; Final bill: ${tip+bill}`)
        }else if(bill>=50 && bill<=200){
            tip=bill*0.15;
            console.log(`Tip: ${tip} ; Final bill: ${tip+bill}`)
        }else if(bill>200){
            tip=bill*0.1;
            console.log(`Tip: ${tip} ; Final bill: ${tip+bill}`)
        }
    }else{
        console.log("you add not a number")
    }
}

calculateTip();





//  Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.


// function isDivisible(){

//     for(let i =0; i<=500;i++){
//         let container=0
//         whyle(i%23==0){
//             container+=i;
//         }

//     }
// }