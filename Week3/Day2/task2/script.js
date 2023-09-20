
// Exercise 2 : Work With Forms


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.



let form = document.getElementsByTagName("form")[0];
console.log(form) ;



let inputFirstName = document.getElementById('fname');
let inputLastName = document.getElementById('lname');
let inputSubmit = document.getElementById('submit');

console.log(inputFirstName);
console.log(inputLastName);
console.log(inputSubmit);

// Retrieve the inputs by their name attribute and console.log them.

let inputFirstName2 = document.getElementsByName('firstname');
let inputLastName2 = document.getElementsByName('lastname');

console.log(inputFirstName2);
console.log(inputLastName2);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

form.addEventListener("submit",submitName)

function submitName(event){
    alert("submit")
    event.preventDefault()
     
}

// !!! TAMAMLANMAYIB