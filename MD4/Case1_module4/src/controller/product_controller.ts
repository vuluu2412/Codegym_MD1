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
    showLogin = async (req: Request, res: Response) => {
        res.render('login/login');
    }
    login = async (req: Request, res: Response) => {
        let status = await this.productService.checkAccount(req, res);
        if (status === true) {
            res.redirect(301, '/products')
        } else {
            res.redirect(301, '/register')
        }
    }
    showRegister = async (req: Request, res: Response) => {
        res.render('login/register');
    }
    register = async (req: Request, res: Response) => {
        let listAccount = await this.productService.findAllAccount(req, res)
        let flag = false;
        for (let item of listAccount) {
            if (item.username === req.body.username) {
                flag = true;
                break;
            }
        }
        if (flag === true) {
            res.redirect(301, '/register')
        } else {
            await this.productService.createAccount(req, res);
            res.redirect(301, '/login')
        }
    }
}

export default new Product_controller();