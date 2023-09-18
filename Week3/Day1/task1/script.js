// Exercise 1 : Users

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// 

let div1 = document.querySelector("div");
console.log(div1);

// Change the name “Pete” to “Richard”.
let ulList1 = document.getElementsByClassName("list")[0];
let liList2 = ulList1.lastElementChild.textContent;
console.log(liList2);
liList2 = "Richard";
console.log(liList2);


// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)

let ulList2 = document.getElementsByClassName("list")[1];
let liList2_1 = ulList2.children[1].textContent;
console.log(liList2_1);
console.log(ulList2.removeChild(ulList2.children[1]));
console.log(ulList2);


// Change each first name of the two <ul>'s to your name. (Hint : use a loop)
let ulList = document.getElementsByTagName("ul");
console.log(ulList);


for(let item of ulList){
    console.log(item.firstElementChild);
    console.log(ulList);
    item.firstElementChild.textContent= "Cavid";
    
}







// Exercise 2 : Users And Style
