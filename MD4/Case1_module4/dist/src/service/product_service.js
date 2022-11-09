"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_service = void 0;
const data_source_1 = require("../data-source");
const product_1 = require("../model/product");
class Product_service {
    constructor() {
        this.findAll = async (req, res) => {
            let products = await this.productRepository.find();
            return products;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect database success');
        });
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.Product_service = Product_service;
exports.default = new Product_service();
//# sourceMappingURL=product_service.js.map