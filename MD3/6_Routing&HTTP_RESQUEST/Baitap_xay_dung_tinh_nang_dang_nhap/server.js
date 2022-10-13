const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('qs');
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
        if (req.method === "GET") {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } else if (req.method === "POST") {
            let path = "./home"
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', () => {
                const userInfo = qs.parse(data) // Nhận đối tượng từ file Register
                let dataRegister = fs.readFileSync('./data/data.json', {encoding: 'utf-8', flag: 'r'}); // Đọc data từ file Json,kiểu dữ liệu trả về l string
                let dataObj = JSON.parse(dataRegister); // Chuyển dữ liệu từ string sang Obj
                for (let i = 0; i < dataObj.length; i++) {
                    if (userInfo.name === dataObj[i].name && userInfo.password === dataObj[i].password) {
                        path = "./profile";
                        break;
                    }
                }
                res.writeHead(301, {'location': path});
                res.end();
            })
        }
    });
}
handlers.register = (req, res) => {
    fs.readFile('./view/register.html', (err, data) => {
        if (req.method === "GET") {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } else if (req.method === "POST") {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', () => {
                const userInfo = qs.parse(data) // Nhận đối tượng từ file Register
                let dataRegister = fs.readFileSync('./data/data.json', {encoding: 'utf-8', flag: 'r'}); // Đọc data từ file Json,kiểu dữ liệu trả về l string
                let dataObj = JSON.parse(dataRegister); // Chuyển dữ liệu từ string sang Obj
                // console.log(dataObj);
                dataObj.push(userInfo); // Đẩy đối tượng vào mảng đối tượng
                // console.log(dataObj)
                let content = JSON.stringify(dataObj); // Chuyển từ mảng đối tuợng thành string.
                // console.log(content);
                fs.writeFile("./data/data.json", content, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Write Done")
                })
            })
            req.on('error', () => {
                console.log('error')
            })
            res.writeHead(301, {'location': '/login'});
            res.end();
        }

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