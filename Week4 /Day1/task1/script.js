// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:
// funcOne()   //inside the funcOne function 3`
// #1.2 What will happen if the variable is declared 
// with const instead of let ? Error,because a is const , and we can not change the value of const

//#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()   //0      const 0  
// funcTwo()       //5    const Error
// funcThree()     //5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?  alert 0 then  Error


//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive() gives us an alert `inside the funcFive function hello`

//#4
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?  inside the funcSix function test

//#5
const a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? alert(`in the if block 5`);
// outside of the if block 2`