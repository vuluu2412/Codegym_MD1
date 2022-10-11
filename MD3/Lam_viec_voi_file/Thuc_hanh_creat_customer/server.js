const http = require('http');
const fs = require('fs');
const qs = require('qs');
let server = http.createServer((req, res)=>{
    let methodRequest = req.method;
    if (methodRequest==="GET"){
        fs.readFile('./creat.html','utf-8',(err, data)=>{
            res.setHeader('Content-Type','text/html')
            res.write(data);
            res.end();
        })
    } else {
        let data = ''
        req.on('data',chunk => {
            data +=chunk;
        })
        req.on('end',()=>{
            let name = qs.parse(data).name;
            fs.writeFile('./data.txt',name + " , ",{flag:'a'},err => {
                if (err){
                    console.log('err')
                    return;
                }
                return res.end('Create success')
            })
        })
        req.on('error',()=>{
            console.log('error')
        })
    }
})
server.listen('8002',()=>{
    console.log('Server running port 8002')
})
