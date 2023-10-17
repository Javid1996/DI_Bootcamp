const fs = require('fs');

const read = fs.readFile('Hello World.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

// const fs = require('fs');

const writeHello = fs.writeFile('Hello World.txt', 'Hello! World', function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Hello World! in console.log');
    }
});
const writeBye = fs.writeFile('Bye World.txt', 'Bye World!', function (err,) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Bye World! in console.log');
    }
});
module.exports = {read,writeHello,writeBye};