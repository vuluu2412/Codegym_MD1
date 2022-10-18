const mySQL = require('mysql');
const connection = mySQL.createConnection({
    host:'localhost',
    user: 'root',
    password:'123456',
    database:'studentmanager',
    charset: 'utf8_general_ci'
});
connection.connect(err=>{
    if(err){
        console.log(err);
    } else {
        console.log('connect success');
    }
})
const sql = 'select * from class,mark,student,subject'
connection.query(sql,(err,result)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log(result)
    }
})
// const sqlSelect = 'select * from class';
// connection.query(sqlSelect, (err, results, fields) => {
//     if (err) throw err;
//     console.log(results, "select")
// });