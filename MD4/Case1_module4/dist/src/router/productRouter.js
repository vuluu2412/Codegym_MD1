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
exports.productRouter.get('/delete/:id', product_controller_1.default.showFormDelete);
exports.productRouter.post('/delete/:id', product_controller_1.default.deleteP);
exports.productRouter.get('/detail/:id', product_controller_1.default.showDetail);
exports.productRouter.get('/login', product_controller_1.default.showLogin);
exports.productRouter.post('/login', product_controller_1.default.login);
exports.productRouter.get('/register', product_controller_1.default.showRegister);
exports.productRouter.post('/register', product_controller_1.default.register);
//# sourceMappingURL=productRouter.js.map