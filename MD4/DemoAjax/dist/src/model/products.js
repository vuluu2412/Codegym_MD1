"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
let ProductSchema = new mongoose_1.Schema({
    name: String,
    price: Number,
    image: String
});
let Product = (0, mongoose_1.model)('Product', ProductSchema);
exports.Product = Product;
//# sourceMappingURL=products.js.map