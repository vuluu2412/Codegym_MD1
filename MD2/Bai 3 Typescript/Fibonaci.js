function Fibonacci(n) {
    if (n === void 0) { n = 100; }
    if (n <= 2) {
        return 1;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
function sum(n) {
    if (n === void 0) { n = 10; }
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        sum = sum + Fibonacci(n);
    }
    return sum;
}
console.log(sum);
