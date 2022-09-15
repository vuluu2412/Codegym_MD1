"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuHienThi = void 0;
// @ts-ignore
var readline = require('readline-sync');
var MenuHienThi = /** @class */ (function () {
    function MenuHienThi() {
    }
    MenuHienThi.menu = function () {
        console.log('Chon Tai Lieu!');
        console.log('------------Quan ly khu pho-------------');
        console.log('1.Them Ho Gia Dinh Vao Thong Tin Khu Pho');
        console.log('2.Tim Kiem Thong Tin Khu Pho');
        console.log('3.Xoa Ho Gia Dinh Vao Thong Tin Khu Pho');
        console.log('4.In Thong Tin Khu Pho');
        console.log('0. Thoat');
    };
    return MenuHienThi;
}());
exports.MenuHienThi = MenuHienThi;
