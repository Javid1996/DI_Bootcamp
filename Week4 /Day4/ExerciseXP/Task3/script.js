// Using this object 

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


const users = { user1: 18273, user2: 92833, user3: 90315 }


const usersArray = Object.entries(users);
console.log(usersArray);
// let a,b;
// [a,b]=usersArray[i];
// let userContainer=[]
let usersArray2 = usersArray.map((element) => { ;
    // let el;
   return [element[0],  element[1] *= 2 ];
    // return userContainer.push(el);
} );
console.log("🚀 ~ file: script.js:24 ~ usersArray2 ~ usersArray2:", usersArray2)


// usersArray2.push(element)
console.log(usersArray2);