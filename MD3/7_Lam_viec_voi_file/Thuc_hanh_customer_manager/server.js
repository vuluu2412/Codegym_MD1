const http = require('http');
const fs =require('fs');
let server = http.createServer((req, res)=>{
    let dataFile = '';
    let html = '';
    fs.readFile('./data.txt',"utf-8",(err, str)=>{
        dataFile = str.split(',');
        dataFile.forEach((value, index) => {
            html += '<tr>';
            html += `<td>${index+1}</td>`
            html += `<td>${value}</td>`
            html += `<td><button class = "btn btn-danger">Delete</button></td>`
            html += `<td><button class = "btn btn-danger">Update</button></td>`
            html += `</tr>`
        });
    });
    fs.readFile('./index.html','utf-8',(err, data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        data = data.replace('{list-user}',html)
    res.write(data)
    res.end()
    })
})
server.listen('8011',()=>{
    console.log('Server running port 8011')
})