import {Router} from "express";
import product_controller from "../controller/product_controller";
export const productRouter = Router();
productRouter.get('/products',product_controller.getAll);
productRouter.get('/create',product_controller.showFormCreate);
productRouter.post('/create',product_controller.createProduct);
productRouter.get('/edit/:id',product_controller.showFormEdit);
productRouter.post('/edit/:id',product_controller.editP);