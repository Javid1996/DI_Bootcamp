const fs = require('fs');

// const readFile = fs.readFile('source.txt','utf-8')



// fs.readFileSync("example_file.txt", "utf8"));


const readSource = fs.readFile('source.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log('source.txt');
});

const readDestination = fs.readFile('destination.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log('destination.txt');
});

// fs.readdirSync('source.txt').forEach(file => {
//     console.log(file);
//   });