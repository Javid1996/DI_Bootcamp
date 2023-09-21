// Declare a global variable named allBoldItems.

let allBoldItems=[];
// allBoldItems=getBoldItems() ;  

console.log(allBoldItems);

// Create a function called getBoldItems() that takes no parameter. 
// This function should collect all the bold items 
// inside the paragraph and assign them to the allBoldItems variable.

getBoldItems();
function getBoldItems(){

   let StrongList=document.getElementsByTagName('strong');
    // allBoldItems = StrongList;
     console.log(StrongList);

     for(let i of StrongList){
        allBoldItems.push(i);

        // StrongList[i].push()
     }
}
// Create a function called highlight() 
// that changes the color of all the bold text to blue.
function highlight(){

//    getBoldItems() ;  
    for(let item of allBoldItems){
        item.style.color = "red"
    }
}

// Create a function called returnItemsToDefault()
//  that changes the color of all the bold text back to black.
function returnItemsToDefault(){
      
    // getBoldItems() ;  

    for(let item of allBoldItems){
        item.style.color = "black"
    }
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
//  and the function returnItemsToDefault() on mouseout 
//  (ie. when the mouse pointer is moved out of the paragraph).

let p1 = document.getElementsByTagName('p')[0];
console.log(p1);
p1.addEventListener('mouseover', highlight)
p1.addEventListener('mouseout', returnItemsToDefault)

// !!! duzelis lazimdir