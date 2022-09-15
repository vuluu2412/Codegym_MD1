"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XulyMenuhienthi = void 0;
// @ts-ignore
var Class_Neiborhood_1 = require("./Class Neiborhood/Class Neiborhood");
var MenuHienThi_1 = require("./MenuHienThi");
// @ts-ignore
var readline = require('readline-sync');
var XulyMenuhienthi = /** @class */ (function () {
    function XulyMenuhienthi() {
        // @ts-ignore
        this.thongTin = new Class_Neiborhood_1.NeiBorHood();
    }
    XulyMenuhienthi.prototype.disPlayMenu = function () {
        MenuHienThi_1.MenuHienThi.menu();
    };
    return XulyMenuhienthi;
}());
exports.XulyMenuhienthi = XulyMenuhienthi;
