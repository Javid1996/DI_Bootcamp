

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.





let div1 = document.querySelector("div");
 div1.style.backgroundColor = 'lightBlue'
 div1.style.padding= "15px"

 console.log(div1);


//  / Do not display the <li> that contains the text node “John”. 
// (the first <li> of the <ul>)

let ulList = document.querySelector('ul');

let liList1 = ulList.firstElementChild;

liList1.style.display = "none";



// Add a border to the <li> that contains the text node “Pete”. 
// (the second <li> of the <ul>)

let liList2 = ulList.lastElementChild;
liList2 = ulList.style.border = "3px solid blue " 


// Change the font size of the whole body.

let wholeBody = document.body;
wholeBody.style.fontSize = "24px"