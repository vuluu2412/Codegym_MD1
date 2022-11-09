"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const productRouter_1 = require("./productRouter");
exports.router = (0, express_1.Router)();
exports.router.use('', productRouter_1.productRouter);
//# sourceMappingURL=router.js.map