"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookRouter = (0, express_1.Router)();
const book_model_1 = require("../schemas/book.model");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
bookRouter.get('/products', (req, res) => {
    res.render("createBook");
});
bookRouter.post('/products', upload.none(), async (req, res) => {
    try {
        const bookNew = new book_model_1.Book(req.body);
        const book = await bookNew.save();
        if (book) {
            res.render("success");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
//# sourceMappingURL=book.router.js.map