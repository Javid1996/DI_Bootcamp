

// //  Exercise 1 : List Of People


// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?



const people = ["Greg", "Mary", "Devon", "James"];

// // Write code to remove “Greg” from the people array.
// people

console.log(people.shift());
console.log(people);

// Write code to replace “James” to “Jason”.
console.log(people.splice(2,1,"Jason"));
console.log(people);

// Write code to add your name to the end of the people array.

people.push("Javid");
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf('Mary'));


// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
// Write code to make a copy of the people array using the slice method.
console.log(people.slice(1,3));
let copyArr=people.slice(1,3);


// Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(copyArr.indexOf("Foo")); // this value is not in the array


// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

console.log(copyArr[copyArr.length-1]);



// Part II - Loops

// Using a loop, iterate through the people array and console.log each person.

for(let i=0 ; i<people.length; i++){
    console.log(people[i]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” . 
// Hint: take a look at the break statement in the lesson.

console.log()


for (let i = 0; i <=people.length; i++) {
    console.log(people[i]);
    if (i === people.indexOf("Devon")) {     
        break;
      }
  }





//   Exercise 2 : Your Favorite Colors


// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["blue","green","grey","maroon","red"];

for(let i in colors)
{
   
    console.log(` My #${+i+1} color is ${colors[i]}`);
}






//  Exercise 3 : Repeat The Question

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// xxxxxxx


// let x = prompt("Please add a number");
// let num = parseInt(x);
// console.log(num);

// if(!num){
//     console.log('wrong data');
// }else{
//     if(+num>10){
        
//         console.log("Your number has been accepted");
//     }else{
//         prompt("Please add a number larger than 10");
//     }

// }




// Exercise 4 

// Copy and paste the above object to your Javascript file.


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}




// Console.log the number of floors in the building.
console.log(building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment. 

console.log(`${building.nameOfTenants[1]} : ${building.numberOfRoomsAndRent.dan[0]} rooms , ${building.numberOfRoomsAndRent.dan[1]} per month `);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let danRent=building.numberOfRoomsAndRent.dan[1];
let davidRent=building.numberOfRoomsAndRent.david[1];


if( sarahRent + davidRent > danRent ){
  
    building.numberOfRoomsAndRent.dan.splice(1,1,1200);

}
console.log(building.numberOfRoomsAndRent.dan[1]);






// 🌟 Exercise 5 : Family



// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family = {
    surname: 'Aliyev',
    number: 4,

}

for(let i in family){
    console.log(i);
    console.log(family[i]);
} 


// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  

//   Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for(let x in details){
    console.log(details[x]);
    console.log(x);
}


let container="";
for( let i in details){
 container = container + "  " +i + "  " + details[i];   
}

console.log(container);







// Exercise 7 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// alphabeticalNames=names.sort();
// console.log(alphabeticalNames);

// let secret= [];

// for(let i=0; i<alphabeticalNames.length; i++){
    
//     secret;
    // let x = console.log(alphabeticalNames[i][0]);
//     secret.push(x);
//     console.log(secret);
// }
    // console.log(secret);


    alphabeticalNames=names.sort();
    console.log(alphabeticalNames);
    let newArr=[];

    for(let i=0; i<alphabeticalNames.length; i++){

    let str = alphabeticalNames[i];
    str=str[0];
    newArr.push(str);
    console.log(str);
    
   
    }
    
    console.log(newArr);





    