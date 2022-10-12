function printNumber(number) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (number<=0){
                reject();
            } else {
                // console.log(number);
                document.getElementById('rs').innerHTML=number
                resolve(printNumber(number-=1));
            }
        },1000)
    })
}

function init(){
    let number = document.getElementById('ip').value
    if (number>0){
        printNumber(number)
            .then()
            .catch(()=>{
                document.getElementById('rs').innerHTML="Happy New Year"
            })
    } else alert('Nhập lại số lớn hơn 0')
}