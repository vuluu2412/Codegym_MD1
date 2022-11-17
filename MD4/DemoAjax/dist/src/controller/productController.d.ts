import { Request, Response } from "express";
declare class ProductController {
    getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteProduct: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByIdProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
