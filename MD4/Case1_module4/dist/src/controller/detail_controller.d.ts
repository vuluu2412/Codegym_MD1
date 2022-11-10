import { Request, Response } from "express";
export declare class Detail_controller {
    private detailService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    showDetail: (req: Request, res: Response) => Promise<void>;
}
declare const _default: Detail_controller;
export default _default;
