// const http = require('http');
// const fs= require('fs');
// const server = http.createServer((req, res)=>{
//     const stream = fs.createReadStream(__dirname + '/data.txt')
//         stream.pipe(res)
// })
// server.listen(3000)



//********Đọc dữ liệu với stream********
// const fs = require('fs');
// let data = '';
// // Đọc file bằng streams bằng phương thức createReadStream
// const readerStream = fs.createReadStream('input.txt');
// // Kiểu mã hóa dùng là UTF8
// readerStream.setEncoding('UTF8');
// // Sự kiện khi đọc data
// readerStream.on('data',(chunk)=>{
//     data +=chunk;
// });
// // Khi kết thuc đọc data và in ra nội dung đã đọc
// readerStream.on('end',()=>{
//     console.log(data)
// });
// // Khi xảy ra lỗi in ra lỗi
// readerStream.on('error',(err)=>{
//     console.log(err.stack);
// });

//Ghi dữ liệu với streams

// const fs = require('fs');
// let data = 'hoc lap trinh123';
// const writeStream = fs.createWriteStream('outPut.txt');
// writeStream.write(data);
// writeStream.end();
// writeStream.on('finish',()=>{
//     console.log('write done');
// })
// writeStream.on('error',(err)=>{
//     console.log(err.stack)
// });


// ******Đọc/Ghi stream - Piping stream******
const fs = require('fs');
const  readerStream = fs.createReadStream('input.txt');
const writerStream = fs.createWriteStream('outPut.txt');
readerStream.pipe(writerStream);