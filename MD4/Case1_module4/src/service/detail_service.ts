import {AppDataSource} from "../data-source";
import {Request, Response} from "express";
import {DetailProduct} from "../model/detailProduct";

export class Detail_service {
    private detailRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log('Connect database success')
        })
        this.detailRepository = AppDataSource.getRepository(DetailProduct)
    }
    findId = async (req:Request,res:Response)=>{
        let id = +req.params.id;
      return await this.detailRepository.find({
            where: {
                idProduct: id
            }
        });
    }
}

export default new Detail_service();