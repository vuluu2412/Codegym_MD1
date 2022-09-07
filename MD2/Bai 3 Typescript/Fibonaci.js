function Fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}
var n = 1000;
var sum = 0;
for (var i = 0; i <= n; i++) {
    console.log(Fibonacci(i));
    sum += Fibonacci(i);
}
console.log(sum);
