import {Product_service} from "../service/product_service";
import {Request, Response} from "express";

export class Product_controller{
    private productService : Product_service
    constructor() {
        this.productService = new Product_service();
    }
    getAll = async (req:Request,res:Response)=>{
        let products= await this.productService.findAll(req,res);
        res.render('product/list',{
            listProduct:products
        });
    }
    showFormCreate = async (req:Request,res:Response)=>{
        res.render('product/create');
    }
    createProduct = async (req:Request,res:Response)=>{
        await this.productService.saveProduct(req,res);
    }
    showFormEdit = async (req:Request,res:Response)=>{
        res.render('product/edit');
    }
    editP = async (req:Request,res:Response)=>{
        await this.productService.editProduct(req,res);
    }
}
export default new Product_controller();