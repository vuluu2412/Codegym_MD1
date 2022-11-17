"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../model/products");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await products_1.Product.find();
            console.log(products);
            return res.status(200).json(products);
        };
        this.addProduct = async (req, res) => {
            await products_1.Product.insertMany(req.body);
            return res.status(200).json({
                message: "add success"
            });
        };
        this.editProduct = async (req, res) => {
            await products_1.Product.updateMany({ _id: req.params.id }, req.body);
            return res.status(200).json({
                message: "edit success"
            });
        };
        this.deleteProduct = async (req, res) => {
            await products_1.Product.deleteOne({ _id: req.params.id }, req.body);
            return res.status(200).json({
                message: "delete success"
            });
        };
        this.findByIdProduct = async (req, res) => {
            let p = await products_1.Product.findById(req.params.id);
            res.status(200).json(p);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map