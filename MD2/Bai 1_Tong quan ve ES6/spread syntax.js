function sum(x,y,z){
    return x+y+z;
}
const number = [1,2,3];
console.log(sum(...number))

const a = [1,2];
const b = [3,4,5];
const c = [...a,...b];
console.log(c);


const obj1={n1:1, n2:2};
const obj2 = {...obj1};
console.log(obj2);