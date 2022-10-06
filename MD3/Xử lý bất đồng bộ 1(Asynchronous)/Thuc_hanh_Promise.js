let onMyBirthday = (isKayoSick)=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
           if (!isKayoSick){
               resolve(2);
           } else {
               reject(new Error('i am sad'))
           }
       },2000)
    })
}
onMyBirthday(false)
    .then(result=>{
        console.log(`i have ${result} cakes`)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log('Party')
    })
