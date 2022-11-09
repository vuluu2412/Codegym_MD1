import {Router} from "express";
import product_controller from "../controller/product_controller";
export const router = Router();
router.get('/products',product_controller.getAll);