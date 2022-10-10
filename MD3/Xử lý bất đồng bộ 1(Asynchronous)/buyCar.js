function buyCar(number) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (number>=1000){
                reject();
            } else {
                // console.log(number);
                document.getElementById('rs').innerHTML=number
                resolve();
            }
        },1000)
    })
}

function init(){
    let number = document.getElementById('ip').value
    if (number>0){
        buyCar(number)
            .then(()=>{
                document.getElementById('rs').innerHTML="Ban chua du tien"
            })
            .catch(()=>{
                document.getElementById('rs').innerHTML="Ban da du tien"
            })
    } else alert('Nhập lại số lớn hơn 0')
}