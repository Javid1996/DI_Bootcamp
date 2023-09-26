
// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.

// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).

// Create an array with all your monthly expenses, both positive and negative (money made and money spent).

// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]

// Create a program that modifies the expenses (ie. the positive AND the negative expenses)
//  so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.


let bankAmount = 12000;
const percOfVat=0.18 ;

const details = ["+1300", "-900", "+870", "+1250", "-3600", "-1000"]

let currentBankAmount = getVat(details);
console.log(currentBankAmount)

bankAmount+= currentBankAmount
console.log(bankAmount);



function getVat(details){
   
    var total=0;
    details.forEach((element) => {

        let numberElement = Number(element);
        let vatAndDetails = numberElement*(percOfVat+1);
        total = total + vatAndDetails;
        // let vatValue = numberElement*percOfVat

        // total+= (vatValue + numberElement)
        // console.log(total)
    });
    // console.log(total)
    return total
}