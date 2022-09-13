import {ThuVienQuanLy} from "./ThuVienQuanLy";
import {Sach} from "./Sach";
import {TapChi} from "./TapChi";
import {Bao} from "./Bao";

export class DanhSachQuanLy {
    private _DanhSachQuanLy: ThuVienQuanLy[] = [];

    get DanhSachQuanLy(): ThuVienQuanLy[] {
        return this._DanhSachQuanLy;
    }

    set DanhSachQuanLy(value: ThuVienQuanLy[]) {
        this._DanhSachQuanLy = value;
    }

    addDanhSach(DanhSachQuanLy: ThuVienQuanLy | Sach | TapChi | Bao) {
        this._DanhSachQuanLy.push(DanhSachQuanLy)
    }

    deleteDanhSach(MaTaiLieu: number) {
        return this._DanhSachQuanLy = this._DanhSachQuanLy.filter((item) => {
                return item.MaTaiLieu != MaTaiLieu;
            }
        )
    }

    showTaiLieu(): ThuVienQuanLy[] {
        return this.DanhSachQuanLy
    }

    findTaiLieu(MaTaiLieu: number) {
        let flag = 0;
        this._DanhSachQuanLy.forEach((e) => {
            if (e.MaTaiLieu == MaTaiLieu) {
                console.log(e);
                flag++;
            }
            })

        if (flag == 0){
            console.log("Khong Co")
        }
    }
}
