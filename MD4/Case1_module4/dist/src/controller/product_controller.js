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
        this.productService = new product_service_1.Product_service();
    }
}
exports.Product_controller = Product_controller;
exports.default = new Product_controller();
//# sourceMappingURL=product_controller.js.map