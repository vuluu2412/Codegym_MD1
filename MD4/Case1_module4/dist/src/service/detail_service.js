"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail_service = void 0;
const data_source_1 = require("../data-source");
const detailProduct_1 = require("../model/detailProduct");
class Detail_service {
    constructor() {
        this.findAll = async (req, res) => {
            let listDetail = await this.detailRepository.find();
        };
        this.findId = async (req, res) => {
            let id = +req.params.id;
            return await this.detailRepository.find({
                where: {
                    idProduct: id
                }
            });
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log('Connect database success');
        });
        this.detailRepository = data_source_1.AppDataSource.getRepository(detailProduct_1.DetailProduct);
    }
}
exports.Detail_service = Detail_service;
exports.default = new Detail_service();
//# sourceMappingURL=detail_service.js.map