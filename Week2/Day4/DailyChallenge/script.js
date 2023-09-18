let container=[];
function  arrayMaker(){

    for(let i=0 ; i<5; i++){
        let word = prompt('Please add a word');
        container.push(word);
    }
    
}
const words =container;

arrayMaker();



let MaxLengthOfWords=MaxLengthOfWordsFinder();

function MaxLengthOfWordsFinder(){
let MaxLengthOfWords=0;
    for(let word of words){
       
        let wordLength = word.length;
        if(wordLength>MaxLengthOfWords){
            MaxLengthOfWords=wordLength;
        }
    }
    return MaxLengthOfWords;
}

let spaceToAdd;
let space;
function createWordRow(){
    for(let word of words){
    spaceToAdd= MaxLengthOfWords-word.length+1;
    space=" ".repeat(spaceToAdd);
    console.log("* " + word + space + "*"); 
    }
}


let numberOfStars=MaxLengthOfWords+4;

let starsRow= createStarsRow()


function createStarsRow(){
    let starRow = "";
    for(let i = 0;i < numberOfStars; i++ ){
        starRow+= "*";
    }
 return starRow
}


console.log(starsRow);
let wordRow= createWordRow();
console.log(starsRow);


// console.log (`number of stars ${numberOfStars}`)




