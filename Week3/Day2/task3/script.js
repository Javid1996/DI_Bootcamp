// Declare a global variable named allBoldItems.

// let allBoldItems=getBoldItems();

const allBoldItems =[]

// allBoldItems=getBoldItems() ;  

console.log(allBoldItems);

// Create a function called getBoldItems() that takes no parameter. 
// This function should collect all the bold items 
// inside the paragraph and assign them to the allBoldItems variable.


function getBoldItems(){

   let StrongList=document.getElementsByTagName('strong');
    allBoldItems = StrongList;
    
    // !!! functionun icerisindeki deyeri goturmek ucun hemin deyeri return etmek lazimdir
    // !!! ve ya bos array yaradib hemin itemleri o arrayin icerisine pushlamaq
     
}
// Create a function called highlight() 
// that changes the color of all the bold text to blue.
function highlight(item){

   getBoldItems() ;  
    for(let item in allBoldItems){
        item.style.color = "red"
    }
}

// Create a function called returnItemsToDefault()
//  that changes the color of all the bold text back to black.
function returnItemsToDefault(item){
      
    getBoldItems() ;  

    for(let item in allBoldItems){
        item.style.color = "black"
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
//  and the function returnItemsToDefault() on mouseout 
//  (ie. when the mouse pointer is moved out of the paragraph).

let p1 = document.getElementsByTagName('p')[0];
p1.addEventListener('mouseover', highlight)
p1.addEventListener('mouseout', returnItemsToDefault)

// !!! duzelis lazimdir