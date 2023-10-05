
// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// const compareToTen = () => {
//     let x = Math.floor(Math.random() * 20);
//     return x;
// }

function compareToTen(num){

     const prom = new Promise((resolve, reject) =>{
    
        if(num<=10){
            resolve('the result is less than a 10');
        }else{
            reject('the result is more than a 10');
        }
        
    }); return prom 
} 


compareToTen(1)
  .then(result => console.log(result))
 .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
