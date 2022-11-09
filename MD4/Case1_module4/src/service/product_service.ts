import {AppDataSource} from "../data-source";
import {Product} from "../model/product";
import {Request, Response} from "express";

export class Product_service {
    private productRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection =>{
            console.log('Connect database success')
        })
        this.productRepository = AppDataSource.getRepository(Product)
    }

    findAll = async (req: Request, res: Response) => {
        let products = await this.productRepository.find();
        return products;
    }
}

export default new Product_service();