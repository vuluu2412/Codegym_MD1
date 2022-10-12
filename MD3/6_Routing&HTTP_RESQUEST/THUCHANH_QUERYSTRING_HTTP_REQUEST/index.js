const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const server = http.createServer((req,res)=>{
    let parseUrl= url.parse(req.url,true);
    let queryStringObject = parseUrl.query;
    res.end('Hello Node Js');
    console.log(queryStringObject);
})
server.listen(3000,()=>{
    console.log('Server running 3000')
})