"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_controller = void 0;
const product_service_1 = require("../service/product_service");
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
            res.render('product/edit');
        };
        this.editP = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.productService = new product_service_1.Product_service();
    }
}
exports.Product_controller = Product_controller;
exports.default = new Product_controller();
//# sourceMappingURL=product_controller.js.map