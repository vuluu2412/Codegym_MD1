import {Router} from "express";
import productController from "../controller/productController";

export const router = Router();
router.get('/products',productController.getAll);
router.post('/products', productController.addProduct);
router.put('/products/:id', productController.editProduct);
router.delete('/products/:id', productController.deleteProduct);