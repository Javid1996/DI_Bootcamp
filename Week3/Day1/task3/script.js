// 🌟 Exercise 3 : Change The Navbar


// Add the code above, to your HTML file

 




// Using Javascript, in the <div>, change the value of the id attribute from 
// navBar to socialNetworkNavigation, using the setAttribute method.
let firstDiv = document.getElementById("navBar");

firstDiv.setAttribute('id',"socialNetworkNavigation");

console.log(socialNetworkNavigation.id);
// socialNetworkNavigation.id = "ididid";
// console.log(firstDiv);




// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered 
// list (<ul>), using the appendChild method.

let newLi = document.createElement('li');

let newLiTextNode = document.createTextNode('Logout');

let ulList = document.getElementsByTagName("ul")[0];

newLi.appendChild(newLiTextNode);

ulList.appendChild(newLi);

console.log(ulList);


// Use the firstElementChild and the lastElementChild 
// properties to retrieve the first and
// last <li> elements from their parent element (<ul>). 
//Display the text of each link. (Hint: use the textContent property).


let liList1 = ulList.firstElementChild.textContent;
let liList6 = ulList.lastElementChild.textContent;
console.log(liList1);
console.log(liList6);



