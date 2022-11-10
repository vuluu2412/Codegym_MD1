"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_controller = void 0;
const product_service_1 = require("../service/product_service");
const detail_service_1 = require("../service/detail_service");
class Product_controller {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.showFormCreate = async (req, res) => {
            res.render('product/create');
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.showFormEdit = async (req, res) => {
            let product = await this.productService.findId(req, res);
            res.render('product/edit', {
                productHtml: product
            });
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.showFormDelete = async (req, res) => {
            res.render('product/delete');
        };
        this.deleteP = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.showDetail = async (req, res) => {
            let productDetail = await this.productService.findId(req, res);
            console.log(productDetail);
            let listDetail = await this.detailService.findId(req, res);
            console.log(listDetail);
            res.render('product/detail', {
                productD: productDetail,
                listDetail: listDetail
            });
        };
        this.productService = new product_service_1.Product_service();
        this.detailService = new detail_service_1.Detail_service();
    }
}
exports.Product_controller = Product_controller;
exports.default = new Product_controller();
//# sourceMappingURL=product_controller.js.map