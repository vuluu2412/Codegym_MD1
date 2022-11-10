import { Request, Response } from "express";
export declare class Detail_service {
    private detailRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    findId: (req: Request, res: Response) => Promise<any>;
}
declare const _default: Detail_service;
export default _default;
