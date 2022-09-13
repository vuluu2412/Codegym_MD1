"use strict";
exports.__esModule = true;
exports.XuLyMenu = void 0;
var Menu_1 = require("./Menu");
var DanhSachQuanLy_1 = require("./DanhSachQuanLy");
var Sach_1 = require("./Sach");
// @ts-ignore
var readline = require('readline-sync');
var XuLyMenu = /** @class */ (function () {
    function XuLyMenu() {
        this.taiLieu = new DanhSachQuanLy_1.DanhSachQuanLy();
    }
    XuLyMenu.prototype.handleShowMenu = function () {
        Menu_1.ThongTinMenu.menu();
        var choice;
        do {
            choice = +readline.question('Nhap lua chon cua ban:');
            switch (choice) {
                case 1: {
                    var choice1 = void 0;
                    do {
                        Menu_1.ThongTinMenu.chonSach();
                        choice1 = +readline.question('Nhap lua chon cua ban1:');
                        switch (choice1) {
                            case 1:
                                var MaTaiLieu1 = +readline.question("Ma tai lieu:");
                                var TenNhaXuatBan1 = readline.question("Ten nha xuat ban:");
                                var SoBanPhatHanh1 = readline.question("So ban phat hanh:");
                                var TacGia1 = readline.question("Tac gia:");
                                var SoTrang1 = +readline.question("So trang:");
                                this.taiLieu.addDanhSach(new Sach_1.Sach(MaTaiLieu1, TenNhaXuatBan1, SoBanPhatHanh1, TacGia1, SoTrang1));
                                break;
                            case 2:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                break;
                        }
                    } while (choice1 != 0);
                    break;
                }
            }
        } while (choice != 0);
    };
    return XuLyMenu;
}());
exports.XuLyMenu = XuLyMenu;
