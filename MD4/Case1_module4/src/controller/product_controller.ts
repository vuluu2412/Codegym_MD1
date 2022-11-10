import {Product_service} from "../service/product_service";
import {Request, Response} from "express";
import {Detail_service} from "../service/detail_service";

export class Product_controller {
    private productService: Product_service
    private detailService: Detail_service

    constructor() {
        this.productService = new Product_service();
        this.detailService = new Detail_service();
    }

    getAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        res.render('product/list', {
            listProduct: products
        });
    }
    showFormCreate = async (req: Request, res: Response) => {
        res.render('product/create');
    }
    createProduct = async (req: Request, res: Response) => {
        await this.productService.saveProduct(req, res);
    }
    showFormEdit = async (req: Request, res: Response) => {
        let product = await this.productService.findId(req, res);
        res.render('product/edit', {
            productHtml: product
        });
    }
    editP = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res);
    }
    showFormDelete = async (req: Request, res: Response) => {
        res.render('product/delete')
    }

    deleteP = async (req: Request, res: Response) => {
        await this.productService.deleteProduct(req, res);
    }

    showDetail = async (req: Request, res: Response) => {
        let productDetail = await this.productService.findId(req, res);
        console.log(productDetail);
        let listDetail = await this.detailService.findId(req, res);
        console.log(listDetail)
        res.render('product/detail', {
            productD: productDetail,
            listDetail: listDetail

        });
    }
}

export default new Product_controller();