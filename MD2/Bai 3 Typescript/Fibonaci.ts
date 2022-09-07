
function Fibonacci(n=100) {
    if (n <= 2) {
        return 1
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
function sum(n=10){
    let sum = 0;
    for (let i=0;i<=n;i++){
        sum = sum + Fibonacci(n)
    }
    return sum;
}
