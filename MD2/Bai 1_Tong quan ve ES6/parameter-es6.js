function multiply(a,b){
    return a*b;
}
let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5,8);
console.log(num2);


function multiply(c,d=2){
    return c*d;
}
let number1 = multiply(5);
console.log(number1);
let number2 = multiply(5,8);
console.log(number2);


class Geeks{
    constructor(x,y=3) {
        console.log(x*y);
    }
}
let obj = new Geeks(5);
let obj1 = new Geeks(5,4);
