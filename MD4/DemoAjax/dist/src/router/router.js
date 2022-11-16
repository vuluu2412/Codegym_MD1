"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
exports.router = (0, express_1.Router)();
exports.router.get('/products', productController_1.default.getAll);
exports.router.post('/products', productController_1.default.addProduct);
exports.router.put('/products/:id', productController_1.default.editProduct);
exports.router.delete('/products/:id', productController_1.default.deleteProduct);
//# sourceMappingURL=router.js.map