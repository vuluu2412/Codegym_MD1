const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('qs');
// const {encode} = require("qs/lib/utils");
let server = http.createServer((req, res) => {
    let urlParse = url.parse(req.url, true)
    let pathName = urlParse.pathname
    let arrParse = pathName.split('/');
    let trimPath = arrParse[1];
    let chosenHandler;
    if (typeof router[trimPath] === "undefined") {
        chosenHandler = handler.notFound;
    } else {
        chosenHandler = router[trimPath];
    }
    chosenHandler(req, res, arrParse[2]);
});

let handler = {};
handler.home = (req, res) => {
    let dataHtml = '';
    let dataString = fs.readFileSync('./data/data.json', {encoding: "utf-8", flag: "r"});
    let dataObj = JSON.parse(dataString);
    dataObj.forEach((item, index) => {
        dataHtml += `${index + 1}: ${item.name},${item.password} | <a href="edit/${index}">Sửa</a>  |  <a href="delete/${index}">Xóa</a><br>`
    })
    fs.readFile('./view/home.html', "utf-8", (err, index) => {
        res.writeHead(200, 'text/html');
        index = index.replace('{users}', dataHtml);
        res.write(index);
        res.end();
    })
}
handler.register = (req, res) => {
    if (req.method === "GET") {
        fs.readFile('./view/register.html', "utf-8", (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let users = [];
            const userInfo = qs.parse(data);
            fs.readFile('./data/data.json', "utf-8", (err, dataJson) => {
                users = JSON.parse(dataJson);
                users.push(userInfo);
                users = JSON.stringify(users);
                fs.writeFile('./data/data.json', users, err => {
                    console.log(err);
                });
            })
        })
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}
handler.login = (req, res) => {
    fs.readFile('./view/login.html', "utf-8", (err, data) => {
        res.writeHead(200, 'text/html');
        res.write(data);
        res.end();
    })
}
handler.notFound = (req, res) => {
    fs.readFile('./view/notFound.html', "utf-8", (err, data) => {
        res.writeHead(200, 'text/html');
        res.write(data);
        res.end();
    })
}
handler.proFile = (req, res) => {
    fs.readFile('./view/profile.html', "utf-8", (err, data) => {
        res.writeHead(200, 'text/html');
        res.write(data);
        res.end();
    })
}
handler.edit = (req, res, index) => {
    if (req.method === "GET") {
        fs.readFile('./view/edit.html', "utf-8", (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let users = [];
            let usersInfo = qs.parse(data);
            fs.readFile('./data/data.json', 'utf-8', (err, dataJson) => {
                users = JSON.parse(dataJson);
                for (let i = 0; i < users.length; i++) {
                    if (i === +index) {
                        users[i] = usersInfo;
                    }
                }
                users = JSON.stringify(users);
                fs.writeFile('./data/data.json', users, err => {
                    console.log(err);
                })
            })
        })
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}
handler.delete = (req,res,index)=>{
    if (req.method === "GET") {
        fs.readFile('./view/delete.html', "utf-8", (err, data) => {
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            let users = [];
            // let usersInfo = qs.parse(data);
            fs.readFile('./data/data.json', 'utf-8', (err, dataJson) => {
                users = JSON.parse(dataJson);
                users.splice(index,1);
                users = JSON.stringify(users);
                fs.writeFile('./data/data.json', users, err => {
                    console.log(err);
                })
            })
        })
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}
let router = {
    "home": handler.home,
    "login": handler.login,
    "register": handler.register,
    "edit": handler.edit,
    "delete":handler.delete
}
server.listen(5001, () => {
    console.log('Server running 5001')
})
