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
exports.TapChi = void 0;
var ThuVienQuanLy_1 = require("./ThuVienQuanLy");
var TapChi = /** @class */ (function (_super) {
    __extends(TapChi, _super);
    function TapChi(MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh, SoPhatHanh, ThangPhatHanh) {
        var _this = _super.call(this, MaTaiLieu, TenNhaXuatBan, SoBanPhatHanh) || this;
        _this._SoPhatHanh = SoPhatHanh;
        _this._ThangPhatHanh = ThangPhatHanh;
        return _this;
    }
    Object.defineProperty(TapChi.prototype, "SoPhatHanh", {
        get: function () {
            return this._SoPhatHanh;
        },
        set: function (value) {
            this._SoPhatHanh = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TapChi.prototype, "ThangPhatHanh", {
        get: function () {
            return this._ThangPhatHanh;
        },
        set: function (value) {
            this._ThangPhatHanh = value;
        },
        enumerable: false,
        configurable: true
    });
    return TapChi;
}(ThuVienQuanLy_1.ThuVienQuanLy));
exports.TapChi = TapChi;
