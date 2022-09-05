function lastIndexOf(arr, elt, start= 100) {

    for (let i = start - 1; i >= 0; i--)


        if (arr[i] === elt) return i


    return -1
}

console.log(lastIndexOf([1,2,3,54,2,1,2,6],54))