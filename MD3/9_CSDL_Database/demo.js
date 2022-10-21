const mySQL = require('mysql');
const connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'studentmanager',
    charset: 'utf8_general_ci'
});
connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect success');
    }
})
// Tru vấn dữ liệu MySQL trong Nodejs
// const sql = 'select * from class,mark,student,subject'
// connection.query(sql, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result)
//     }
// })
// Thêm bảng mới
// const sql = "Create table city (id int not null primary key auto_increment, name varchar(30) not null , zipcode varchar(6))";
// connection.query(sql,function (err){
//     if(err){
//         console.log(err);
//     };
//     console.log('Create table success');
// });
// const sqlSelect = 'select * from class';
// connection.query(sqlSelect, (err, results, fields) => {
//     if (err) throw err;
//     console.log(results, "select")
// });


// Thêm dữ liệu vào bảng

const sql = "insert into city(name,zipcode) values ('SonLa',26),('HaNoi',29),('LaoCai',24)";
connection.query(sql,function (err){
    if (err) throw err;
        console.log('insert data success');

});

