const http = require('http');
const fs =require('fs');
let server = http.createServer((req, res)=>{
    let dataFile = '';
    let html = '';
    fs.readFile('./data.json',"utf-8",(err, str)=>{
        dataFile = JSON.parse(str);
        // let dataString = JSON.stringify(dataFile);
        // console.log(dataFile);
        // console.log(dataString);
        dataFile.forEach((value) => {
            html += '<tr>';
            html += `<td>${value.id}</td>`
            html += `<td>${value.name}</td>`
            html += `<td>${value.price}</td>`
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
server.listen('8017',()=>{
    console.log('Server running port 8017')
})