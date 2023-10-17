const products = require("./products");

// products[0];
// products[1];
// products[2];
let searchedProduct = "table"
function search(searchedProduct){
    for(let i = 0; i<2; i++){
        if (products[i].name == searchedProduct){
            console.log(products[i].name + " " + 'is a ' +products[i].category);
        }
    }
    
}


search(searchedProduct);