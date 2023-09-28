

// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });

//   Analyze this code, what will be the output ?
//2,4,6 cause typeof method returns string


[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );

//   Analyze this code, what will be the output ?
//[1,2,0,1,2,3]


const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})


// What is the value of i ? i is an index of arrayNum array,so i guess i will be equal 0,1,2,3,4,5 in the console.log

