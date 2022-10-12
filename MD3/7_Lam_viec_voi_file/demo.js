const fs = require('fs');
const content = 'Some content 1 2 3 4 5'

//******* Đọc File *************
// fs.readFile('C:\\Users\\Admin\\Desktop\\CodeGym\\MD3\\7_Lam_viec_voi_file\\test.txt','utf-8',(err,data)=>{
// if(err){
//     console.error(err)
//     return
// }
//     console.log(data)
// })


//********Ghi File ************
fs.writeFile('C:\\Users\\Admin\\Desktop\\CodeGym\\MD3\\7_Lam_viec_voi_file\\test.txt',content,err => {
    if (err){
        console.error(err)
        return
    }
})

//************* Nối vào một file***********
// fs.appendFile('file.log',content,err => {
//     if (err){
//         console.error(err)
//         return
//     }
// })




// *********Xóa File*********
fs.unlink('test.txt',(err)=>{
    if (err)throw err;
    console.log('File deleted')
})



