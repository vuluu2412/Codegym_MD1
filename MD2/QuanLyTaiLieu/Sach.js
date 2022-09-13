"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sach = void 0;
var ThuVienQuanLy_1 = require("./ThuVienQuanLy");
var Sach = /** @class */ (function (_super) {
    __extends(Sach, _super);
    function Sach(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh, TacGia, SoTrang) {
        var _this = _super.call(this, MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh) || this;
        _this._TacGia = TacGia;
        _this._SoTrang = SoTrang;
        return _this;
    }
    Object.defineProperty(Sach.prototype, "TacGia", {
        get: function () {
            return this._TacGia;
        },
        set: function (value) {
            this._TacGia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sach.prototype, "SoTrang", {
        get: function () {
            return this._SoTrang;
        },
        set: function (value) {
            this._SoTrang = value;
        },
        enumerable: false,
        configurable: true
    });
    return Sach;
}(ThuVienQuanLy_1.ThuVienQuanLy));
exports.Sach = Sach;
