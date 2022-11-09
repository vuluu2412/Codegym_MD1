import { Request, Response } from "express";
export declare class Product_service {
    private productRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    saveProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    findId: (req: Request, res: Response) => Promise<any>;
}
declare const _default: Product_service;
export default _default;
