"use strict";
exports.__esModule = true;
exports.ManageProvince = void 0;
var Province_1 = require("../model/Province");
var ManageProvince = /** @class */ (function () {
    function ManageProvince() {
        this.provinceList = [];
        this.provinceList.push(new Province_1.Province(1, "HN"));
        this.provinceList.push(new Province_1.Province(2, "TB"));
        this.provinceList.push(new Province_1.Province(3, "TH"));
        this.provinceList.push(new Province_1.Province(4, "HP"));
        this.provinceList.push(new Province_1.Province(5, "HG"));
    }
    ManageProvince.prototype.add = function (t) {
        this.provinceList.push(t);
    };
    ManageProvince.prototype.findAll = function () {
        for (var i = 0; i < this.provinceList.length; i++) {
            console.log("STT: " + (i + 1) + ", " + this.provinceList[i].name);
        }
    };
    ManageProvince.prototype.findById = function (id) {
        for (var i = 0; i < this.provinceList.length; i++) {
            if (this.provinceList[i].id == id) {
                return this.provinceList[i];
            }
        }
        return new Province_1.Province(0, '');
    };
    ManageProvince.prototype.findByIndex = function (index) {
        return this.provinceList[index];
    };
    return ManageProvince;
}());
exports.ManageProvince = ManageProvince;
