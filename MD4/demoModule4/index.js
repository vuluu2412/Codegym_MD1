const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const bodyParser= require('body-parser');
const mysql = require('mysql');
let products = [
    {
        id: 1,
        name: 'MinhAnh',
        image: 'https://64.media.tumblr.com/2672d2341b1735d480b667f9cc56f839/8ad748bd47484711-5a/s1280x1920/bfee7da362f1af3c7cae8cc1b7f35ee6ffdc9cef.jpg'
    },
    {
        id: 2,
        name: 'Em',
        image: 'https://64.media.tumblr.com/32968f251b2637db7629c0be2b3e79d3/25a00bf427f54f07-b3/s1280x1920/f88e8339861061edb289eca044957ddc40b1e12c.jpg'
    },
    {
        id: 3,
        name: 'Hieu',
        image: 'https://64.media.tumblr.com/6d732adc1c94c3c92f093123005591a7/c0ba5fa8f0008bdf-53/s640x960/67eb84203181891d59452142e41441dfaf433df7.jpg'
    }
];
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'module4',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log("connect success");
})

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.set('layout', 'index');
app.use(express.static('public'));
app.use(layouts);
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get('/', (req, res) => {
    const sql = `select * from product`;
    connection.query(sql,(err,data)=>{
        if (err){
            console.log(err)
        }
        res.render('product/show', {
            products: data
        })
    })

});
app.get('/create', (req, res) => {
    res.render('product/create');
})
app.listen(3000, () => {
    console.log(`server is running at localhost 3000`)
});
app.post('/create', (req, res) => {
    let product =
        {
            id: req.body.id,
            name: req.body.name,
            image: req.body.image
        }
    products.push(product);
    res.redirect('/');
});



