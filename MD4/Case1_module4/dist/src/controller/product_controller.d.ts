import { Request, Response } from "express";
export declare class Product_controller {
    private productService;
    private detailService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editP: (req: Request, res: Response) => Promise<void>;
    showFormDelete: (req: Request, res: Response) => Promise<void>;
    deleteP: (req: Request, res: Response) => Promise<void>;
    showDetail: (req: Request, res: Response) => Promise<void>;
    showLogin: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    showRegister: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
}
declare const _default: Product_controller;
export default _default;
