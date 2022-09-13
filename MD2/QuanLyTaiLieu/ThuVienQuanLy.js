"use strict";
exports.__esModule = true;
exports.ThuVienQuanLy = void 0;
var ThuVienQuanLy = /** @class */ (function () {
    function ThuVienQuanLy(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh) {
        this._MaTaiLieu = MaTaiLieu;
        this._TenNhaXuatBan = TenNhaXuatBan;
        this._SoBanPhatHanh = SoBanPhatHanh;
    }
    Object.defineProperty(ThuVienQuanLy.prototype, "MaTaiLieu", {
        get: function () {
            return this._MaTaiLieu;
        },
        set: function (value) {
            this._MaTaiLieu = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThuVienQuanLy.prototype, "TenNhaXuatBan", {
        get: function () {
            return this._TenNhaXuatBan;
        },
        set: function (value) {
            this._TenNhaXuatBan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ThuVienQuanLy.prototype, "SoBanPhatHanh", {
        get: function () {
            return this._SoBanPhatHanh;
        },
        set: function (value) {
            this._SoBanPhatHanh = value;
        },
        enumerable: false,
        configurable: true
    });
    return ThuVienQuanLy;
}());
exports.ThuVienQuanLy = ThuVienQuanLy;
