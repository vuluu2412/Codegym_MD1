"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeiBorHood = void 0;
var NeiBorHood = /** @class */ (function () {
    function NeiBorHood(ID, Name, NeiBorHood) {
        this._NeiBorHood = [];
        this._ID = ID;
        this._Name = Name;
        this._NeiBorHood = NeiBorHood;
    }
    Object.defineProperty(NeiBorHood.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeiBorHood.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeiBorHood.prototype, "NeiBorHood", {
        get: function () {
            return this._NeiBorHood;
        },
        set: function (value) {
            this._NeiBorHood = value;
        },
        enumerable: false,
        configurable: true
    });
    NeiBorHood.prototype.addNeiBorHood = function (NeiBorHood) {
        this._NeiBorHood.push(NeiBorHood);
    };
    NeiBorHood.prototype.deleteNeiBorHood = function (ID) {
        return this._NeiBorHood = this.NeiBorHood.filter(function (id) {
            return id.ID != ID;
        });
    };
    NeiBorHood.prototype.showNeiBorHood = function () {
        return this.NeiBorHood;
    };
    NeiBorHood.prototype.findByHouseHoldMoreThan5 = function (Member) {
        var temp = 0;
        this._NeiBorHood.forEach(function (mem) {
            if (mem.Member > 5) {
                console.log(mem);
                temp++;
            }
        });
        if (temp == 0) {
            console.log("Không có");
        }
    };
    return NeiBorHood;
}());
exports.NeiBorHood = NeiBorHood;
