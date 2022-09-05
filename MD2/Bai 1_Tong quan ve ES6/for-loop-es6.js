
// vòng lặp for In các số tự nhiên

// function geeks(){
//     console.log("for(;;)")
//     for (let i = 0; i <=10; i+=2) {
//         console.log(i + " ")
//     }
// }
// geeks();

// For...in để in ra các đối tượng trong mảng

function geeks(){
    console.log("for...of")
    for (let i of ['Hanoi,5.9.2022,2g23']) {
        console.log(i + " ")
    }
}
geeks();

// For...of để lặp qua các thuộc tính của đối tượng

let obj = {
    name: 'Vu',
    age: '28',
    gender: 'Male'
}
console.log("for...in");
for (let i in obj){
    console.log(obj[i]+ " ");
}