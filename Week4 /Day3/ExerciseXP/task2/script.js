const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];



//  Using the map() method, push into a new array the firstname of the user and a welcome message. 
//  You should get an array that looks like this :

let helloUsers = users.map((arr) => {
    return 'Hello' +" "+ arr.firstName;  
})
console.log(helloUsers);


// Using the filter() method, create a new array, containing only the Full Stack Residents.

// let filtered = users.filter((user) =>  {return user.role == 'Full Stack Resident'});
// console.log(filtered);

// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.


let filtered = users.filter((user) =>  {return user.role == 'Full Stack Resident'}).map((user) =>{ return user.lastName});
// let filteredLastName = filtered.map(user => user.lastName );
console.log(filtered);