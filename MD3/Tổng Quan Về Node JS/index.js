// let calculator = require('./calc');
// let x = 50, y = 10;
// console.log("Addition of 50 and 10 is "
//     + calculator.add(x, y));
//
// console.log("Subtraction of 50 and 10 is "
//     + calculator.sub(x, y));
//
// console.log("Multiplication of 50 and 10 is "
//     + calculator.mult(x, y));
//
// console.log("Division of 50 and 10 is "
//     + calculator.div(x, y));

// const fs = require('fs');
//
// const filepath = 'text.txt';
//
// // Reads a file in a synchronous and blocking way
// const data = fs.readFileSync(filepath, {encoding: 'utf8'});
//
// // Prints the content of file
// console.log(data);
//
// // This section calculates the sum of numbers from 1 to 10
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum = sum + i;
// }
//
// // Prints the sum
// console.log('Sum: ', sum);


const fs = require('fs');

const filepath = 'text.txt';

// Reads a file in a asynchronous and non-blocking way
fs.readFile(filepath, {encoding: 'utf8'}, (err, data) => {
    // Prints the content of file
    console.log(data);
});


// This section calculates the sum of numbers from 1 to 10
let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum + i;
}

// Prints the sum
console.log('Sum: ', sum);