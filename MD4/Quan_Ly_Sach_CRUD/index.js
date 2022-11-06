const mysql = require('mysql');
const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'module4',
    charset: 'utf8_general_ci'
});
// let books = [{}];
app.use(bodyParser.json());
const upload = multer();
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.get("/create",(req, res)=>{
    res.render("./product/create")
});
app.get("/product/detail", (req, res) => {
    const sql = "Select * FROM product WHERE id =" + req.query.id;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result, 'result')
        res.render("./product/detail", {item: result[0]});
    });
})
app.get('/', (req, res) => {
    const sql = `select * from product`;
    connection.query(sql,(err,data)=>{
        if (err){
            console.log(err)
        }
        res.render('./product/index', {
            products: data
        })
    })
});
app.post("/product/create", upload.none(), (req, res) => {
    const { name, price, author} = req.body;
    const sqlInsert = "INSERT INTO product (name, price, author) VALUES ?";
    const value = [
        [name, price, author]
    ];
    connection.query(sqlInsert, [value], function (err, result) {
        if (err) throw err;
        console.log(value);
        res.render("./product/success");
    });
    // let book =
    //     {
    //         id: req.body.id,
    //         name: req.body.name,
    //         price: req.body.price,
    //         author: req.body.author
    //     }
    // books.push(book);
    // res.redirect('/');
});
app.listen(PORT, () => {
    console.log("Server running on port:" + PORT);
});
connection.connect((err)=> {
    if (err) {
        throw err.stack;
    }
    else {
        console.log("connect success");
    }
});