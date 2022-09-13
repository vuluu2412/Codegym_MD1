import {ThuVienQuanLy} from "./ThuVienQuanLy";

export class Sach extends ThuVienQuanLy{
private _TacGia:string;
private _SoTrang:number;

    constructor(MaTaiLieu: number, TenNhaXuatBan: string, SoBanPhatHanh: string, TacGia: string, SoTrang: number) {
        super(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh);
        this._TacGia = TacGia;
        this._SoTrang = SoTrang;
    }

    get TacGia(): string {
        return this._TacGia;
    }

    set TacGia(value: string) {
        this._TacGia = value;
    }

    get SoTrang(): number {
        return this._SoTrang;
    }

    set SoTrang(value: number) {
        this._SoTrang = value;
    }
}