const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('qs');
let server = http.createServer((req, res) => {

    let urlParse = url.parse(req.url, true);
    let pathName = urlParse.pathname;
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
    let dataFile = '';
    let dataString = fs.readFileSync('./data/data.json', {encoding: "utf-8", flag: 'r'});
    let dataObj = JSON.parse(dataString);
    dataObj.forEach((item,index) => {
        dataFile += '<tr>';
        dataFile += `${index + 1}`
        dataFile += `<td>${item.id}</td>`
        dataFile += `<td>${item.name}</td>`
        dataFile += `<td>${item.price}</td>`
        dataFile += `<td><button class = "btn btn-danger" onclick="location.href='/delete/${index}'">Delete</button></td>`
        dataFile += `<td><button class = "btn btn-danger" onclick="location.href='/edit/${index}'">Update</button></td>`
        dataFile += `</tr>`
    });
    fs.readFile('./view/home.html', 'utf-8', (err, index) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        index = index.replace('{list-user}', dataFile);
        res.write(index)
        res.end()
    })
}
handler.add = (req, res) => {
    if (req.method === "GET") {
        fs.readFile('./view/add.html', "utf-8", (err, data) => {
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
            let add = [];
            const addInfo = qs.parse(data);
            fs.readFile('./data/data.json', "utf-8", (err, dataJson) => {
                add = JSON.parse(dataJson);
                add.push(addInfo);
                add = JSON.stringify(add);
                fs.writeFile('./data/data.json', add, err => {
                    console.log(err);
                });
            })
        })
        res.writeHead(301, {'location': '/home'});
        res.end();
    }
}
handler.notFound = (req, res) => {
    fs.readFile('./view/notFound.html', "utf-8", (err, data) => {
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
    "edit": handler.edit,
    "delete": handler.delete,
    "notFound": handler.notFound,
    "add":handler.add
}
server.listen('8017', () => {
    console.log('Server running port 8017')
})