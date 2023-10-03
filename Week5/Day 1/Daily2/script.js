function allTruthy(a, b, c) {
   
    argumentsArray = Array.from(arguments);
 
    // console.log(argumentsArray);

    argumentsArray.every((element) => {
        if( !element === false){
            return console.log('true');
        }else{
             return  console.log('false');
        }
    });
 
    
}

// console.log(allTruthy(true, true,true));
// console.log(allTruthy(false,true,true));
// console.log(allTruthy(1,2,'string'));
allTruthy(true,true,true);
allTruthy(false,true,true);
allTruthy(0,1,2);
allTruthy(2,5,'str');
allTruthy(true,2,'true');
