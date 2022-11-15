import {Router} from "express";
const bookRouter = Router();
import {Book} from "../schemas/book.model";
import multer from 'multer';
const upload = multer();
bookRouter.get('/products',(req,res)=>{
        res.render("createBook");
});

bookRouter.post('/products',upload.none(),async (req,res)=>{
    try{
        const bookNew = new Book(req.body);
        const book= await bookNew.save();
        if(book){
            res.render("success");
        } else {
            res.render("error");
        }
    } catch (err){
        res.render("error")
    }
});
