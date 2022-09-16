// @ts-ignore
import {NeiBorHood} from "./Class Neiborhood/Class Neiborhood";
import {MenuHienThi} from "./MenuHienThi";

// @ts-ignore
let readline= require('readline-sync')
export class XulyMenuhienthi {
    // @ts-ignore
    thongTin = new NeiBorHood();

    disPlayMenu() {
        MenuHienThi.menu();
        let choice
        do {
            choice = +readline.question('Nhap lua chon cua ban: ');
            switch (choice) {
                case 1: {
                }
            }
        }
    }
}