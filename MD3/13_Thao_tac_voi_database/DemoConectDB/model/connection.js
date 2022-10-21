const mysql = require('mysql');

class Connection {
    static configToMySql = {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'demo2006',
        charset: 'utf8_general_ci'
    }

    static getConnection() {
        return mysql.createConnection(Connection.configToMySql);
    }

    static connecting() {
        Connection.getConnection().connect(error => {
            if (error) {
                console.log(error);
            } else {
                console.log('Connection success')
            }
        });
    }
}
module.exports = Connection;