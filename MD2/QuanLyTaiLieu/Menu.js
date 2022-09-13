"use strict";
exports.__esModule = true;
exports.ThongTinMenu = void 0;
// @ts-ignore
var readline = require('readline-sync');
var ThongTinMenu = /** @class */ (function () {
    function ThongTinMenu() {
    }
    ThongTinMenu.menu = function () {
        console.log('Chon Tai Lieu!');
        console.log('---------Thu Vien Quan Ly---------');
        console.log('1.Sach');
        console.log('2.TapChi');
        console.log('3.Bao');
        console.log('0.Thoat');
    };
    ThongTinMenu.chonSach = function () {
        console.log('----------------------');
        console.log('Chao mung ban den voi thu vien quan ly Sach');
        console.log('----------Thu Vien Sach---------------');
        console.log('1.Them Thong Tin Sach');
        console.log('2.Tim Kiem Thong Tin Sach');
        console.log('3.Xoa Sach Khoi Danh Sach');
        console.log('4.In Danh Sach Quan Ly Sach');
        console.log('0.Thoat');
    };
    ThongTinMenu.prototype.chonTapChi = function () {
        console.log('----------------------');
        console.log('Chao mung ban den voi thu vien quan ly Tap Chi');
        console.log('----------Thu Vien Tap Chi---------------');
        console.log('1.Them Thong Tin Tap Chi');
        console.log('2.Tim Kiem Thong Tin Tap Chi');
        console.log('3.Xoa Tap Chi Khoi Danh Sach');
        console.log('4.In Danh Sach Quan Ly Tap Chi');
        console.log('0.Thoat');
        readline.question('Nhap lua chon cua ban:');
    };
    ThongTinMenu.prototype.chonBao = function () {
        console.log('----------------------');
        console.log('Chao mung ban den voi thu vien quan ly Bao');
        console.log('----------Thu Vien Bao---------------');
        console.log('1.Them Thong Tin Bao');
        console.log('2.Tim Kiem Thong Tin Bao');
        console.log('3.Xoa Bao Khoi Danh Sach');
        console.log('4.In Danh Sach Quan Ly Bao');
        console.log('0.Thoat');
        readline.question('Nhap lua chon cua ban:');
    };
    return ThongTinMenu;
}());
exports.ThongTinMenu = ThongTinMenu;
