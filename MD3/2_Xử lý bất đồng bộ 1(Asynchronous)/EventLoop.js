// console.log("Before delay");
//
// function delayBySeconds(sec) {
//     let start = now = Date.now()
//     while(now-start < (sec*1000)) {
//         now = Date.now();
//     }
// }
//
// delayBySeconds(5);
//
// // Executes after delay of 5 seconds
// console.log("After delay");
// console.log(Date.now());




const foo = ()=> console.log("first")
const bar = ()=> {
    setTimeout(() => {
        console.log("second")
    }, 500)
    console.log("hihi")
    setTimeout(() => {
        console.log("hehe")
    }, 493)
}

const baz = ()=> console.log("third")

bar()
foo()
baz()