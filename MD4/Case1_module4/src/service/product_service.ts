import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";
import {Account} from "../model/account";

export class Product_service {
    private productRepository: any;
    private accountRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect database success')
        })
        this.productRepository = AppDataSource.getRepository(Product);
        this.accountRepository = AppDataSource.getRepository(Account);
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
            res.redirect(301, '/products',);
        }
    }
    editProduct = async (req: Request, res: Response) => {
        let files = req.files;
        console.log(files);
        let id = +req.params.id;
        if (files != null) {
            let product = req.body;
            console.log(product)
            let image = files.image as UploadedFile;
            await image.mv('./public/storage/' + image.name);
            product.image = '/storage/' + image.name;
            await this.productRepository.update({id: id}, product);
            res.redirect(301, '/products',);
        }
    }
    findId = async (req: Request, res: Response) => {
        let id = +req.params.id;
        return await this.productRepository.findOneById({id: id});
    }
    deleteProduct = async (req: Request, res: Response) => {
        let id = +req.params.id;
        await this.productRepository.delete({id: id});
        res.redirect(301, '/products');
    }
    createAccount = async (req: Request, res: Response) => {
        let newAccount = {
            username: req.body.username,
            password: req.body.password
        }
        await this.accountRepository.save(newAccount);
    }
    checkAccount = async (req: Request, res: Response) => {
        let account = await this.accountRepository.find();
        let status = false;
        for (let item of account){
            if (item.username === req.body.username && item.password === req.body.password){
                status = true;
            }
        }
        return status;
    }
    findAllAccount = async (req: Request, res: Response) => {
        let account = await this.accountRepository.find();
        return account;
    }
}

export default new Product_service();