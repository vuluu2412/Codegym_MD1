const http = require('http');
const fs = require('fs');
const url = require ('url');
const server = http.createServer((req, res) => {
    let parseUrl = url.parse(req.url,true);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    let chosenHandler = (typeof (router[trimPath])!=="undefined")?router[trimPath]:handlers.notFound;
    chosenHandler(req,res);
});
server.listen(3003,()=>{
    console.log('Server is running 3003')
})
const handlers = {};
handlers.products = (rep, res) => {
    fs.readFile('./products.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
handlers.users = (rep, res) => {
    fs.readFile('./users.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
handlers.notFound = (rep, res) => {
    fs.readFile('./notfound.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
const router = {
    'users': handlers.users,
    'products': handlers.products
}

