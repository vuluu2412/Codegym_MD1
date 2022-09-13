export class ThuVienQuanLy {
    private _MaTaiLieu:number;
    private _TenNhaXuatBan:string;
    private _SoBanPhatHanh:string;


    constructor(MaTaiLieu: number, TenNhaXuatBan: string, SoBanPhatHanh: string) {
        this._MaTaiLieu = MaTaiLieu;
        this._TenNhaXuatBan = TenNhaXuatBan;
        this._SoBanPhatHanh = SoBanPhatHanh;
    }

    get MaTaiLieu(): number {
        return this._MaTaiLieu;
    }

    set MaTaiLieu(value: number) {
        this._MaTaiLieu = value;
    }

    get TenNhaXuatBan(): string {
        return this._TenNhaXuatBan;
    }

    set TenNhaXuatBan(value: string) {
        this._TenNhaXuatBan = value;
    }

    get SoBanPhatHanh(): string {
        return this._SoBanPhatHanh;
    }

    set SoBanPhatHanh(value: string) {
        this._SoBanPhatHanh = value;
    }
}