
function Fibonacci(n) {
    if (n <= 1) {
        return 1
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
let n = 5;
let sum = 0;
for (let i = 0; i <=n ; i++) {
    console.log(Fibonacci(i));
    sum+=Fibonacci(i);
}
console.log(sum)
