// First Part

//  1 Create a JS file and link it to the index.html file.

//  2 Take a look at your html file, you should have a button with an “onclick” event. 
// This event is equal to the function playTheGame().
//  It means that when you will click on the button, the function playTheGame() will be called. 
// We will learn more about events next week ;)

// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

function playTheGame(){
 

    let conf = confirm("would like to play the game?");
    if(!conf){
        alert("no problem,Goodbye")
    } else {
        let isGuessedRight;
        const computerNumber =getRandomComputerNumber();
        for(let i = 0; i<3; i++){
           
            if(isGuessedRight){
                break;
            }
            let userPrompt=prompt("enter a number 0-10");
            let userNumber = Number(userPrompt);
            if(isNaN(userNumber)){
                alert("Sorry Not a number, Goodbye")
            } else if (!isNaN(userNumber) && userNumber>10 ){
                alert("Sorry it’s not a good number, Goodbye")
            } else if (!isNaN(userNumber) && userNumber<=10 && userNumber>=0 ){
                // console.log(computerNumber);
                isGuessedRight = compareNumbers(userNumber, computerNumber, i === 2);
                // console.log("isguessedright",isGuessedRight);
            }
        }

    }

}


function getRandomComputerNumber(){
return Math.floor(Math.random()* 11); 
}




function compareNumbers(userNumber,computerNumber,isLastChance){
    console.log("usernumber",userNumber);
    console.log("commputer number" ,computerNumber);
    
        if(userNumber === computerNumber){
            alert("WINNER")
            
        } else if(isLastChance){
            alert("out of chances")
        
        } else if(userNumber > computerNumber){
            alert("Your number is bigger then the computer’s, guess again")
            
        } else if(userNumber < computerNumber){
            alert("Your number is smaller then the computer’s, guess again")
            
        }
       return userNumber === computerNumber
    // }
}

