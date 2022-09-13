"use strict";
exports.__esModule = true;
exports.DanhSachQuanLy = void 0;
var DanhSachQuanLy = /** @class */ (function () {
    function DanhSachQuanLy() {
        this._DanhSachQuanLy = [];
    }
    Object.defineProperty(DanhSachQuanLy.prototype, "DanhSachQuanLy", {
        get: function () {
            return this._DanhSachQuanLy;
        },
        set: function (value) {
            this._DanhSachQuanLy = value;
        },
        enumerable: false,
        configurable: true
    });
    DanhSachQuanLy.prototype.addDanhSach = function (DanhSachQuanLy) {
        this._DanhSachQuanLy.push(DanhSachQuanLy);
    };
    DanhSachQuanLy.prototype.deleteDanhSach = function (MaTaiLieu) {
        return this._DanhSachQuanLy = this._DanhSachQuanLy.filter(function (item) {
            return item.MaTaiLieu != MaTaiLieu;
        });
    };
    DanhSachQuanLy.prototype.showTaiLieu = function () {
        return this.DanhSachQuanLy;
    };
    DanhSachQuanLy.prototype.findTaiLieu = function (MaTaiLieu) {
        var flag = 0;
        this._DanhSachQuanLy.forEach(function (e) {
            if (e.MaTaiLieu == MaTaiLieu) {
                console.log(e);
                flag++;
            }
        });
        if (flag == 0) {
            console.log("Khong Co");
        }
    };
    return DanhSachQuanLy;
}());
exports.DanhSachQuanLy = DanhSachQuanLy;
