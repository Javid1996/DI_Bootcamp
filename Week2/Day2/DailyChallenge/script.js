
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. 
// For example, “The movie is not that bad, I like it”.

// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).

// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable).

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. 
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.





let sentence = "It's not bad to start learning something new";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

console.log(wordNot);
console.log(wordBad);

// !!! + yazmaga ehtiyac yoxdur indexof number return edir
if(+wordNot<+wordBad){

    sentence = "It's GOOD to start learning something new";
    
    console.log(sentence);
} else{
    sentence = "It's not bad to start learning something new";
    console.log(sentence);
}
//!!! tapsiriqda hemin stringi modifikasiya etmeyini isteyir
//!!! not bad stringlerini silib good yazmalisan replace() splice() ve s.

