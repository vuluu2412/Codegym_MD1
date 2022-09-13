import {ThuVienQuanLy} from "./ThuVienQuanLy";

export class Bao extends ThuVienQuanLy{
    private _NgayPhatHanh:string;

    constructor(MaTaiLieu: number, TenNhaXuatBan: string, SoBanPhatHanh: string, NgayPhatHanh: string) {
        super(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh);
        this._NgayPhatHanh = NgayPhatHanh;
    }

    get NgayPhatHanh(): string {
        return this._NgayPhatHanh;
    }

    set NgayPhatHanh(value: string) {
        this._NgayPhatHanh = value;
    }
}