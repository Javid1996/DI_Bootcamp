
function makeAllCaps(array){

    return new Promise((resolve, reject) =>{
        if(array.every((element)=>typeof(element)==='string')){
            let newArr = array.map((e) => e.toUpperCase());

            resolve(newArr);
        }else{
            reject('element of the array is not a string')
        }


    });
}



function sortWords(Array2){

return new Promise((resolve,reject)=> {

    if(Array2.length>4){
        resolve(Array2.sort())
    }else{
        reject('array length is less than 4')
    }
     


});

}






// //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


    //   !!! EXERCISE 2 TAMAMLANMAYIB