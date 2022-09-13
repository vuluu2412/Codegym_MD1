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
        do{
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
                                this.taiLieu.addDanhSach(new Sach(MaTaiLieu1,TenNhaXuatBan1,SoBanPhatHanh1,TacGia1,SoTrang1))
                                break;
                            case 2:
                                console.log(this.taiLieu.showTaiLieu());
                                break;
                            case 0:
                                break;
                        }
                    }
                    while (choice1 !=0)
                    break;
                }
            }
        }while(choice !=0)

    }
}