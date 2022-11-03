const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get('/', (req, res) => {
    res.render('blog');
});
app.get('/blog', (req, res) => {
    res.render('view', {arrayPost: arrayPost});
});

const arrayPost = [
    {
        title: "MinhAnh share link ao dai",
        content: "mat hoc sinh, nguc phu huynh"
    },
    {
        title: "cogiao share link ao dai",
        content: "mat hoc sinh, nguc phu huynh"
    },
    {
        title: "thaygiao share link ao dai",
        content: "mat hoc sinh, nguc phu huynh"
    },

];
app.post('/blog', (req, res) => {
    let post = {
        title:req.body.title,
        content:req.body.content
    }
    console.log(post);
    arrayPost.push(post);
    console.log(arrayPost);
    res.redirect('blog');
    console.log(req.body)
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})