const http = require('http');
const fs = require('fs');
const url = require('url');
const StringDecoder = require('string_decoder');
const server = http.createServer((req, res) => {
    // res.end('Hello Node Js');
    let parseUrl = url.parse(req.url, true);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    let chosenHandler = (typeof (router[trimPath]) !== "undefined") ? router[trimPath] : handlers.notFound;
    chosenHandler(req, res);
});
server.listen(3005, () => {
    console.log('Server is running 3005')
})
const handlers = {};
handlers.home = (req, res) => {
    fs.readFile('./view/home.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
handlers.login = (req, res) => {
    fs.readFile('./view/login.html', (err, data) => {
        if(req.method==="GET"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } else if (req.method==="POST") {
            //
            res.writeHead(301, {'location' : '/profile'});
            res.end();
        }
    });
};
handlers.register = (req, res) => {
    fs.readFile('./view/register.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
handlers.profile = (req, res) => {
    fs.readFile('./view/profile.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};
handlers.notFound = (req, res) => {
    fs.readFile('./view/notfound.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};


const router = {
    'home': handlers.home,
    'login': handlers.login,
    'register': handlers.register,
    'profile': handlers.profile
}