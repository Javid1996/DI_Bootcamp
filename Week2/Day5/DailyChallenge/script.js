let numberOfBottles = getUserAnswer();
let numberOfBottlesForTakeDown = 1;

function getUserAnswer(){
    let answer= prompt("Please add number of bottles");
    let numberOfBottles = Number(answer);
        if(isNaN(numberOfBottles)){
             alert("Please add a number");
        }
        return numberOfBottles;
}

// l

// let song = getASong(numberOfBottles,numberOfBottlesForTakeDown);

function getASong(numberOfBottles,takeDownNumber){
    let bottleOrBottles = getbottleOrBottles(numberOfBottles);
    let song = `${numberOfBottles} ${bottleOrBottles} of beer on the wall
    ${numberOfBottles} ${bottleOrBottles} of beer
    Take ${takeDownNumber} down, ${getPassItorPassThem(takeDownNumber)} around
    ${numberOfBottles-takeDownNumber} ${getbottleOrBottles(numberOfBottles-takeDownNumber)} of beer on the wall`;
    return song;
}


while(numberOfBottles>0 && numberOfBottles>=numberOfBottlesForTakeDown){

    let song = getASong(numberOfBottles,numberOfBottlesForTakeDown);
    console.log(song)
    numberOfBottles=numberOfBottles - numberOfBottlesForTakeDown;
    numberOfBottlesForTakeDown++;
    if(numberOfBottles < numberOfBottlesForTakeDown){
        console.log( getASong(numberOfBottles,numberOfBottles));
    }
}


function getbottleOrBottles(number){
    if(number>1){
        return "bottles"
    }else{
        return "bottle"
    }
}

function getPassItorPassThem(takeDownNumber){
    if(takeDownNumber>1){
        return "pass them"
    }else{
        return "pass it"
    }
}
