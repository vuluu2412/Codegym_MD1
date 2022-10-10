// document.write("Hi");
// document.write("<br>");
//
// setTimeout(() => {
//     document.write("Let us see what happens");
// }, 2000);
//
// document.write("<br>");
// document.write("End");
// document.write("<br>");



// **************************Callback:***********************
// function asyncFunction(callback) {
//     console.log("Start");
//     setTimeout(() => {
//         callback();
//     }, 1000);
//     console.log("Waiting");
// }
//
// let printEnd = function() {
//     console.log("End");
// }
// asyncFunction(printEnd)

// **************************Promise:***********************
// function printNumber(number) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (number<0){
//                 reject();
//             } else {
//                 console.log(number);
//                 resolve();
//             }
//         },1000)
//     })
// }
//  printNumber(10)
//     // .then(()=>printNumber(9))
//     // .then(()=>printNumber(8))
//     // .then(()=>printNumber(7))
//     // .then(()=>printNumber(6))
//     // .then(()=>printNumber(5))
//     // .then(()=>printNumber(4))
//     // .then(()=>printNumber(3))
//     // .then(()=>printNumber(2))
//     // .then(()=>printNumber(1))
//     // .then(()=>printNumber(-1))
//     .catch(()=>{
//         console.log('Happy New Year')
//     })


//*******Async/Await***********

function printNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number < 0) {
                reject('number < 0')
            } else {
                console.log(number)
                resolve();
            }
        }, 1000)
    })
}

async function printAll(){
    await printNumber(1);
    await printNumber(2);
    await printNumber(-3);
}

printAll().then(r => console.log('oke'))
    .catch(err => console.log(err))



