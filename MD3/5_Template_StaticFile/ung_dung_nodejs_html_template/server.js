const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    fs.readFile('./register.html','utf-8',(err, str)=>{
        if (err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('404 Not Found')
        }
        let userName = 'Admin';
        str = str.replace('{username}',userName)
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(str);
        res.end();
    })
});

server.listen(3009,()=>{
    console.log('server is running 3009')
})