const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo2006',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) {
        throw err.stack;
    }
    else {
        console.log("connect success");
        const sql = "CREATE TABLE listproduct (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,name varchar(30) not null, address varchar(30))";
        connection.query(sql, function (err) {
            if (err) {
                console.log(err);
            };
            console.log('Create table success');
            connection.end();
        });
        return;
    }
});