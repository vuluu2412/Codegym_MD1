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
exports.Bao = void 0;
var ThuVienQuanLy_1 = require("./ThuVienQuanLy");
var Bao = /** @class */ (function (_super) {
    __extends(Bao, _super);
    function Bao(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh, NgayPhatHanh) {
        var _this = _super.call(this, MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh) || this;
        _this._NgayPhatHanh = NgayPhatHanh;
        return _this;
    }
    Object.defineProperty(Bao.prototype, "NgayPhatHanh", {
        get: function () {
            return this._NgayPhatHanh;
        },
        set: function (value) {
            this._NgayPhatHanh = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bao;
}(ThuVienQuanLy_1.ThuVienQuanLy));
exports.Bao = Bao;
