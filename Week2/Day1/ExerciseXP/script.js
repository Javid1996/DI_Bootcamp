
// Exercise 1

let food = "pasta";
let meal= "dinner"; 
console.log (`I eat  ${food} at every  ${meal}`);


// Exercise 2

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log("I watched" + myWatchedSeriesLength + "series :" + myWatchedSeriesSentence);

//Part2
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2,1,"the big bang theory");

//Add, at the end of the array, the name of another series you watched.
myWatchedSeries.push("breaking bad");

//Add, at the beginning of the array, the name of your favorite series.
myWatchedSeries.unshift("dance of the dragons");

//Delete the series “black mirror”.
myWatchedSeries.splice(1,1);

//Console.log the third letter of the series “money heist”.
let thirdLetter=myWatchedSeries[2];
console.log(thirdLetter);

//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
console.log(myWatchedSeries);



//Exercise 3 The Temperature Converter

let tc = 25;
let tf = tc;

tf*=9;
tf/=5;
tf+=32;
console.log(tc+"°C is "+ tf + "°F");


//Exercise 4

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: It will output 55, because 34(a) and 21(b) are numbers
    // Actual:

    a = 2;

    console.log(a+b) //second expression
    // Prediction:It will output 23, because a takes a value 2 and b equals 21 ,and they are numbers
    // Actual:

    //What is the value of c?
    //let c has no assignment and is undefined.

   /* Analyse the code below, what will be the outcome?
    console.log(3 + 4 + '5');*/
     // Prediction: It will output 75, because 3 and 4 are numbers, but 5 is a string type
    // Actual:








    //Exercise 5 : Guess The Answers #2
    //What is the output of each of the expressions below?

    typeof(15)
// Prediction: number
// Actual:number

typeof(5.5)
// Prediction: number(decimal)
// Actual: number

typeof(NaN)
// Prediction: NaN
// Actual:number

typeof("hello")
// Prediction: String
// Actual:string

typeof(true)
// Prediction: boolean
// Actual:boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: "hamburgers" because both of them are strings
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual:NaN

"1" + "3"
// Prediction: 13
// Actual:13

"1" - "3"
// Prediction: javascript try to convert variables to number,and we have 1-3=-2
// Actual:  -2

"johnny" + 5
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5
// Prediction: NaN(js cannot convert string to number)
// Actual: NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: we compare only the values of the variables, => 1==1, true
// Actual:true

1 === "1"
// Prediction: variable types are not the same, that is why it is false.
// Actual: false



// console.log(typeof(15));
// console.log(typeof(5.5));
// console.log(typeof(NaN));
// console.log(typeof("hello"));
// console.log(typeof(true));
// console.log(typeof(1 != 2));
// console.log("hamburger" + "s");
// console.log("hamburgers" - "s");
// console.log("1" + "3");
// console.log("1" - "3");
// console.log("johnny" + 5);
// console.log("johnny" - 5);
// console.log(99 * "hello");
// console.log(1 != 1);
// console.log(1 == "1");
// console.log(1 === "1");






// Exercise 6 : Guess The Answers #3


5 + "34"
// Prediction: 34 is a string , 5 is a number, so we get 534
// Actual: 534

5 - "4"
// Prediction: javascript convert string to number, so we get 5-4=1
// Actual: 1

10 % 5
// Prediction: 10/5= 2.0 , cause the number is not decimal . we get 0
// Actual: 0

5 % 10
// Prediction: we have 0.5 ,and take 5 from decimal part
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction:  null
// Actual: 

" " + 0
// Prediction: string +0 = 0
// Actual: 0

true + true
// Prediction: true has value 1, false 0, 1+1=2
// Actual:2

true + false
// Prediction: true has the value 1, false 0, so 1+0=1
// Actual:

false + true
// Prediction: true has the value 1, false 0, so 0+1=1
// Actual:

false - true  
// Prediction: true has the value 1, false 0, so 0-1=-1
// Actual:

!true
// Prediction: not true = false 
// Actual: false

3 - 4
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// Prediction: we can not subtract strings, so we get NaN
// Actual:NaN


// console.log(5 + "34");
// console.log(5 - "4");
// console.log(10 % 5);
// console.log(5 % 10);
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log(" " + 0);
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// console.log(!true);
// console.log(3 - 4);
// console.log("Bob" - "bill");













