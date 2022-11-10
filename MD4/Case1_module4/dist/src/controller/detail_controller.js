"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail_controller = void 0;
const detail_service_1 = require("../service/detail_service");
class Detail_controller {
    constructor() {
        this.getAll = async (req, res) => {
            let details = await this.detailService.findAll(req, res);
            console.log(details);
            res.render('product/detail', {
                listDetail: details
            });
        };
        this.showDetail = async (req, res) => {
            let image = await this.detailService.findId(req, res);
            console.log(image);
            res.render('product/detail', {
                listD: image
            });
        };
        this.detailService = new detail_service_1.Detail_service();
    }
}
exports.Detail_controller = Detail_controller;
exports.default = new Detail_controller();
//# sourceMappingURL=detail_controller.js.map