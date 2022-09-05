let arr = [1, 2, 3, 4, 5, 6, 7];
// let square = (item) => item * item;
//
// function arraySq(func, arr) {
//     let newArr = [];
//     arr.forEach((element) => {
//         newArr.push(func(element));
//     });
//     return  newArr;
// }
//
// console.log(arraySq(square, arr));

let square = arr.map(function (n){
    return n*n;
})
console.log(square)



let square1 = arr.map(n1=>n1*n1)
console.log(square1)
