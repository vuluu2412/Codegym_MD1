import {ThongTinMenu} from "./Menu";
import {DanhSachQuanLy} from "./DanhSachQuanLy";
import {ThuVienQuanLy} from "./ThuVienQuanLy";
import {Sach} from "./Sach";
import {TapChi} from "./TapChi";
import {Bao} from "./Bao";
// @ts-ignore

let readline = require('readline-sync')

export class XuLyMenu {
    taiLieu = new DanhSachQuanLy();

    handleShowMenu() {
        ThongTinMenu.menu();
        let choice
        do {
            choice = +readline.question('Nhap lua chon cua ban:');
            switch (choice) {
                case 1: {
                    let choice1;
                    do {
                        ThongTinMenu.chonSach();
                        choice1 = +readline.question('Nhap lua chon cua ban1:')
                        switch (choice1) {
                            case 1:
                                let MaTaiLieu1 = +readline.question(`Ma tai lieu:`);
                                let TenNhaXuatBan1 = readline.question(`Ten nha xuat ban:`);
                                let SoBanPhatHanh1 = readline.question(`So ban phat hanh:`);
                                let TacGia1 = readline.question(`Tac gia:`);
                                let SoTrang1 = +readline.question(`So trang:`);
                                this.taiLieu.addDanhSach(new Sach(MaTaiLieu1, TenNhaXuatBan1, SoBanPhatHanh1, TacGia1, SoTrang1))
                                break;
                            case 2 :
                                let tim = readline.question(`Nhap id can tim: `);
                                console.log(this.taiLieu.findTaiLieu(tim));
                                break;
                            case 3:
                                let xoa = readline.question(`Nhap id can xoa: `);
                                console.log(this.taiLieu.deleteDanhSach(xoa));
                                break;
                            case 4:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                ThongTinMenu.menu();
                                break;
                        }
                    }
                    while (choice1 != 0)
                    break;
                }
                case 2: {
                    let choice2;
                    do {
                        ThongTinMenu.chonTapChi();
                        choice2 = +readline.question('Nhap lua chon cua ban1:')
                        switch (choice2) {
                            case 1:
                                let MaTaiLieu2 = +readline.question(`Ma tai lieu:`);
                                let TenNhaXuatBan2 = readline.question(`Ten nha xuat ban:`);
                                let SoBanPhatHanh2 = readline.question(`So ban phat hanh:`);
                                let SoPhatHanh = readline.question(`So Phat Hanh : `);
                                let ThangPhatHanh = +readline.question(`Thang Phat Hanh:`);
                                this.taiLieu.addDanhSach(new TapChi(MaTaiLieu2, TenNhaXuatBan2, SoBanPhatHanh2, SoPhatHanh, ThangPhatHanh))
                                break;
                            case 2 :
                                let tim1 = readline.question(`Nhap id can tim: `);
                                console.log(this.taiLieu.findTaiLieu(tim1));
                                break;
                            case 3:
                                let xoa1 = readline.question(`Nhap id can xoa: `);
                                console.log(this.taiLieu.deleteDanhSach(xoa1));
                                break;
                            case 4:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                ThongTinMenu.menu();
                                break;
                        }
                    }
                    while (choice2 != 0)
                    break;
                }
                case 3: {
                    let choice3;
                    do {
                        ThongTinMenu.chonBao();
                        choice3 = +readline.question('Nhap lua chon cua ban1:')
                        switch (choice3) {
                            case 1:
                                let MaTaiLieu3 = +readline.question(`Ma tai lieu:`);
                                let TenNhaXuatBan3 = readline.question(`Ten nha xuat ban:`);
                                let SoBanPhatHanh3 = readline.question(`So ban phat hanh:`);
                                let NgayPhatHanh3 = readline.question(`Ngay Phat Hanh : `);
                                this.taiLieu.addDanhSach(new Bao(MaTaiLieu3, TenNhaXuatBan3, SoBanPhatHanh3, NgayPhatHanh3))
                                break;
                            case 2 :
                                let tim2 = readline.question(`Nhap id can tim: `);
                                console.log(this.taiLieu.findTaiLieu(tim2));
                                break;
                            case 3:
                                let xoa2 = readline.question(`Nhap id can xoa: `);
                                console.log(this.taiLieu.deleteDanhSach(xoa2));
                                break;
                            case 4:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                ThongTinMenu.menu();
                                break;
                        }
                    }
                    while (choice3 != 0)
                    break;
                }
            }
        } while (choice != 0)

    }
}