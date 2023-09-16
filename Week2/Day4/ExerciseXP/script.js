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


// function calculateTip(){
    
//     let bill=prompt("Please add amount of the bill");
//     let tip;
//     let newNumber=Number(bill);
//     parseInt(newNumber);
//     if(!isNaN(newNumber)){
//         if(newNumber<50){
//             tip=newNumber*0.2;
//             console.log(`Tip: ${tip} ; Final bill: ${tip+newNumber}`)
//         }else if(newNumber>=50 && newNumber<=200){
//             tip=newNumber*0.15;
//             console.log(`Tip: ${tip} ; Final bill: ${tip+newNumber}`)
//         }else if(newNumber>200){
//             tip=newNumber*0.1;
//             console.log(`Tip: ${tip} ; Final bill: ${tip+newNumber}`)
//         }
//     }else{
//         console.log("you add not a number")
//     }
// }

// calculateTip();





//  Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.



// let container=0;
// function isDivisible(){

//     for(let i =0; i<=500;i++){
        
//         if(i%23==0){
//             container+=i;
//             console.log(i)
//         }

//     }
//     return  container;
// }

// console.log(`the sum of all numbers are ${isDivisible()}`);








// 🌟 Exercise 4 : Shopping List


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 



// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters. 

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.
// xxxxxxxxxxxxxxxxxxxxx

// let shoppingList=["banana","orange", "apple"];

// function myBill(){
    
//     for(let i of shoppingList){
//         console.log(i);
//         if(stock[i]>0){
//             console.log(`${i} : ${prices[i]} `)
//         }else{
//             console.log(`no ${i}`)
//         }
//     }
// }

// myBill();

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



// Exercise 5 : What’s In My Wallet ?
let change=[0.25,0.1,0.05,0.01];
let sum=0;
function changeEnough(itemPrice, amountOfChange){
    for(let i = 0 ; i<change.length;i++){
    
        sum+=change[i]*amountOfChange[i]
        console.log(sum)
    }

    if(sum>itemPrice){
        return true;
        
    }else{
        return false;
    }
}

console.log(changeEnough(6.25, [5,10,12,0]));





//  Exercise 6 : Vacations Costs


function hotelCost(){
   let days = prompt("how many nights you would like to stay in a hotel?");   
   let numDays=Number(days); 
   let totalAmount=0;
   if(!isNaN(days)){
    totalAmount= numDays*140;
    return totalAmount;
   }else{
    days=prompt("how many nights you would like to stay in a hotel???")
   }
}
// console.log(hotelCost());




// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$ 

function planeRideCost(){ 
    
    
    do{
        let userDestination = prompt("Please add your destination?");
        if(userDestination){
            const regex = /\d/;
            let doesItHaveNumber = regex.test(userDestination);
            if(doesItHaveNumber){
            prompt("Please remove numbers and add your destination")
            }else{
                if(doesItHaveNumber=="London"){
                    return "London:"+" "+ 183 +'$' 
                }else if(doesItHaveNumber=="Paris"){
                    return "Paris:"+" "+ 220 +'$'
                }else{
                    return "All other destination :" + " " + 300 +'$' 
                }
            }
        }
    } while(!doesItHaveNumber);
    
    // }else 
    //         {while(!doesItHaveNumber){
    //         doesItHaveNumber = prompt("Please add your destination??");
    //         }
    // }

}
    
   
// console.log(planeRideCost());


// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental. 

function rentalCarCost(){
 
 do{
    let ask= prompt(" How many days ")
    let numberAsk= Number(ask);
    var carRent=40;
    //  (carRent=40*numberAsk );
    if(numberAsk>10){
        return carRent*numberAsk*0.95
    }else{
        return carRent*numberAsk
    }
 }while(isNaN(numberAsk) )

}

// console.log(rentalCarCost());




// Define a function called totalVacationCost() 
// that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. 
// Hint: You have to call the functions hotelCost(), 
// planeRideCost() and rentalCarCost() inside the function totalVacationCost().


function totalVacationCost() {

   let y = hotelCost();
   let z = planeRideCost();
   let x = rentalCarCost();

    console.log(`The car cost: ${x}, the hotel cost: ${y}, the plane tickets cost: ${z}.`)
}




totalVacationCost() ;