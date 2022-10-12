const http = require('http');
const fs = require('fs');
const qs = require('qs');
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./calculator.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            const calInfo = qs.parse(data);
            let nb1 = +calInfo.number1;
            let nb2 = +calInfo.number2;
            fs.readFile('./result.html', 'utf-8', (err, datahtml) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(calInfo);
                    if (calInfo.sl === "+") {
                        datahtml = datahtml.replace('{result}', nb1 + nb2)
                    }
                    if (calInfo.sl === "-") {
                        datahtml = datahtml.replace('{result}', nb1 - nb2)
                    }
                    if (calInfo.sl === "*") {
                        datahtml = datahtml.replace('{result}', nb1 * nb2)
                    }
                    if (calInfo.sl === "/") {
                        datahtml = datahtml.replace('{result}', nb1 / nb2)
                    }
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(datahtml);
                    res.end();
                }
            })
        })
        req.on('error', () => {
            console.log('error')
        })
    }
})
server.listen(8001, () => {
    console.log('server running at localhost: 8001')
})

