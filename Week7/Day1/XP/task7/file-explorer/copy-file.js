const fs = require('fs');
let data;
// const [] = someData;
const someData = fs.copyFile('source.txt', 'destination.txt', function (err) { 
    if (err){ 
       return console.log(err);
    }
});


// const toDestination = fs.writeFile('destination.txt', 'someData', function (err) { 
//     if (err){ 
//         console.log(err);
//     }
//     else{
//         console.log('Hello World! in console.log');
//     }
// });

// const someData = fs.copyFile('source.txt', 'destination.txt', function (err) { 
//     if (err){ 
//        return console.log(err);
//     }
//     else{
//        return console.log(data);
//     }
// });
