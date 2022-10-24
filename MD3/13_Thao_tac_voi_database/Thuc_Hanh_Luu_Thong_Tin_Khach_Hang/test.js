const http = require('http');
const mysql = require('mysql');
const url = require('url');
const qs = require('qs');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo2006',
    charset: 'utf8_general_ci'
});
connection.connect((err)=>{
    if (err) {throw err.stack;
}
else
{
    console.log('Success Connect ');
}
})
;
const server = http.createServer(async (req, res) => {
    try {
        if (req.url === "/user" && req.method === 'POST') {
            const buffers = [];
            for await (const chunk of req) {
                buffers.push(chunk);
            }
            const data = Buffer.concat(buffers).toString();
            const userData = JSON.parse(data);
            const sql = `insert into listproduct(name)
                         values ('${userData.name}')`;
            connection.query(sql, (err, result, fields) => {
                if (err) throw err;
                res.end('success');
            });
        }
    } catch (err) {
        return res.end(err.message);
    }
});
server.listen(8000, () => {
    console.log('localhost:8000')
});





