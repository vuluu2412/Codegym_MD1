const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get('/',(req, res)=>{
    res.render('create');
})
app.get('/create',(req, res)=>{
    res.render('view',{arrayStaff:arrayStaff});
});
const arrayStaff = [
    {
        id:1,
        name:"minhanh",
        department:"coder"
    }
]
app.post('/create',(req, res)=>{
    let staff = {
        id:req.body.id,
        name:req.body.name,
        department:req.body.department
    }
    console.log(staff);
    arrayStaff.push(staff);
    console.log(arrayStaff);
    res.redirect('create');
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})