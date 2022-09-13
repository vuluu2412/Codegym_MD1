import {ThuVienQuanLy} from "./ThuVienQuanLy";

export class TapChi extends ThuVienQuanLy{
    private _SoPhatHanh:number;
    private _ThangPhatHanh:number;

    constructor(MaTaiLieu: number, TenNhaXuatBan: string, SoBanPhatHanh: string, SoPhatHanh: number, ThangPhatHanh: number) {
        super(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh);
        this._SoPhatHanh = SoPhatHanh;
        this._ThangPhatHanh = ThangPhatHanh;
    }

    get SoPhatHanh(): number {
        return this._SoPhatHanh;
    }

    set SoPhatHanh(value: number) {
        this._SoPhatHanh = value;
    }

    get ThangPhatHanh(): number {
        return this._ThangPhatHanh;
    }

    set ThangPhatHanh(value: number) {
        this._ThangPhatHanh = value;
    }
}