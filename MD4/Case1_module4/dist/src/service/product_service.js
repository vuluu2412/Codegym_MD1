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
        this.saveProduct = async (req, res) => {
            let files = req.files;
            if (files != null) {
                let product = req.body;
                console.log(product);
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.save(product);
                res.redirect(301, '/products');
            }
        };
        this.editProduct = async (req, res) => {
            let files = req.files;
            let id = +req.params.id;
            if (files != null) {
                let product = req.body;
                console.log(product);
                let image = files.image;
                await image.mv('./public/storage/' + image.name);
                product.image = 'storage/' + image.name;
                await this.productRepository.update({ id: id }, product);
                res.redirect(301, '/products');
            }
        };
        this.findId = async (req, res) => {
            let id = +req.params.id;
            return await this.productRepository.findOneById({ id: id });
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