let array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];
for (let i = 0; i <array.length ; i++) {
    if (array[i]>=max){
        max = array[i];
    }
}
console.log(max)