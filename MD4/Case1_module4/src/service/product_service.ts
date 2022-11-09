import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";

export class Product_service {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect database success')
        })
        this.productRepository = AppDataSource.getRepository(Product)
    }

    findAll = async (req: Request, res: Response) => {
        let products = await this.productRepository.find();
        return products;
    }
    saveProduct = async (req: Request, res: Response) => {
        let files = req.files;
        if (files != null) {
            let product = req.body;
            console.log(product)
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.save(product);
            res.redirect(301,'/products',);
        }
    }
    editProduct = async (req: Request, res: Response) => {
        let files = req.files;
        let id = +req.params.id;
        if (files != null) {
            let product = req.body;
            console.log(product)
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = 'storage/' + image.name;
            await this.productRepository.update({id:id},product);
            res.redirect(301,'/products',);
        }
    }
    findId = async (req:Request,res:Response)=>{
        let id = +req.params.id;
       return await this.productRepository.findOneById({id:id});
    }
}

export default new Product_service();