import {Request, Response} from "express";
import {Product} from "../model/products";
class ProductController{
    getAll =async (req:Request,res:Response)=>{
        let products = await Product.find();
        console.log(products);
        return res.status(200).json(products);
    }
    addProduct = async (req:Request,res:Response)=>{
        await Product.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }
    editProduct = async (req:Request,res:Response)=>{
       await Product.updateMany({_id:req.params.id}, req.body);
        return res.status(200).json({
            message: "edit success"
        })
    }
    deleteProduct = async (req:Request,res:Response)=>{
        await Product.deleteOne({_id:req.params.id},req.body);
        return res.status(200).json({
            message: "delete success"
        })
    }
    findByIdProduct= async (req:Request,res:Response)=> {
      let p = await Product.findById(req.params.id);
         res.status(200).json(p)

    }
}
export default new ProductController();