function sum (num1,num2){
    let total = num1+num2;
    console.log( 'sum:  ' + total)
    return total;
}

function multiply(num1,num2){
    let total = num1*num2;
    console.log('multiply:  ' + total);
    return total
}

module.exports = {sum,multiply}