import {Router} from "express";
import {productRouter} from "./productRouter";
export const router = Router();
router.use('',productRouter);