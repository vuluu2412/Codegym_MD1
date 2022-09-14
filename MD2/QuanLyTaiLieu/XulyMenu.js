"use strict";
exports.__esModule = true;
exports.XuLyMenu = void 0;
var Menu_1 = require("./Menu");
var DanhSachQuanLy_1 = require("./DanhSachQuanLy");
var Sach_1 = require("./Sach");
var TapChi_1 = require("./TapChi");
var Bao_1 = require("./Bao");
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
                                var tim = readline.question("Nhap id can tim: ");
                                console.log(this.taiLieu.findTaiLieu(tim));
                                break;
                            case 3:
                                var xoa = readline.question("Nhap id can xoa: ");
                                console.log(this.taiLieu.deleteDanhSach(xoa));
                                break;
                            case 4:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                Menu_1.ThongTinMenu.menu();
                                break;
                        }
                    } while (choice1 != 0);
                    break;
                }
                case 2: {
                    var choice2 = void 0;
                    do {
                        Menu_1.ThongTinMenu.chonTapChi();
                        choice2 = +readline.question('Nhap lua chon cua ban1:');
                        switch (choice2) {
                            case 1:
                                var MaTaiLieu2 = +readline.question("Ma tai lieu:");
                                var TenNhaXuatBan2 = readline.question("Ten nha xuat ban:");
                                var SoBanPhatHanh2 = readline.question("So ban phat hanh:");
                                var SoPhatHanh = readline.question("So Phat Hanh : ");
                                var ThangPhatHanh = +readline.question("Thang Phat Hanh:");
                                this.taiLieu.addDanhSach(new TapChi_1.TapChi(MaTaiLieu2, TenNhaXuatBan2, SoBanPhatHanh2, SoPhatHanh, ThangPhatHanh));
                                break;
                            case 2:
                                var tim1 = readline.question("Nhap id can tim: ");
                                console.log(this.taiLieu.findTaiLieu(tim1));
                                break;
                            case 3:
                                var xoa1 = readline.question("Nhap id can xoa: ");
                                console.log(this.taiLieu.deleteDanhSach(xoa1));
                                break;
                            case 4:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                Menu_1.ThongTinMenu.menu();
                                break;
                        }
                    } while (choice2 != 0);
                    break;
                }
                case 3: {
                    var choice3 = void 0;
                    do {
                        Menu_1.ThongTinMenu.chonBao();
                        choice3 = +readline.question('Nhap lua chon cua ban1:');
                        switch (choice3) {
                            case 1:
                                var MaTaiLieu3 = +readline.question("Ma tai lieu:");
                                var TenNhaXuatBan3 = readline.question("Ten nha xuat ban:");
                                var SoBanPhatHanh3 = readline.question("So ban phat hanh:");
                                var NgayPhatHanh3 = readline.question("Ngay Phat Hanh : ");
                                this.taiLieu.addDanhSach(new Bao_1.Bao(MaTaiLieu3, TenNhaXuatBan3, SoBanPhatHanh3, NgayPhatHanh3));
                                break;
                            case 2:
                                var tim2 = readline.question("Nhap id can tim: ");
                                console.log(this.taiLieu.findTaiLieu(tim2));
                                break;
                            case 3:
                                var xoa2 = readline.question("Nhap id can xoa: ");
                                console.log(this.taiLieu.deleteDanhSach(xoa2));
                                break;
                            case 4:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                Menu_1.ThongTinMenu.menu();
                                break;
                        }
                    } while (choice3 != 0);
                    break;
                }
            }
        } while (choice != 0);
    };
    return XuLyMenu;
}());
exports.XuLyMenu = XuLyMenu;
