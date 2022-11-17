import express from 'express';
import mongoose from "mongoose";
import {router} from "./src/router/router";
mongoose.connect('mongodb://127.0.0.1:27017/demoLoginMd4').then(()=>{
    console.log('Connection Success');
})
const app = express();
app.use(express.json())
app.use('',router);
app.listen(3000,()=>{
    console.log('Server is running 3000')
});