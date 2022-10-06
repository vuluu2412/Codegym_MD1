// let promise = new Promise(function (resolve,reject){
//
// });

let happyHanding = (message)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (message==='Yes'){
                resolve ('Em đồng ý')
            } else {
                reject(new Error('Không đồng ý'))
            }
        },5000)
    });
}
happyHanding('Yes').then(result=>{
    console.log(result)
})