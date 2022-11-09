"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product_controller"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/products', product_controller_1.default.getAll);
exports.productRouter.get('/create', product_controller_1.default.showFormCreate);
exports.productRouter.post('/create', product_controller_1.default.createProduct);
exports.productRouter.get('/edit/:id', product_controller_1.default.showFormEdit);
exports.productRouter.post('/edit/:id', product_controller_1.default.editP);
//# sourceMappingURL=productRouter.js.map