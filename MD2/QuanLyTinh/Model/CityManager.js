"use strict";
exports.__esModule = true;
exports.CityManager = void 0;
var City_1 = require("./City");
var CityManager = /** @class */ (function () {
    function CityManager(listCity) {
        this.listCity = [];
        var ct1 = new City_1.City(1, "hanoi", 10000);
        var ct2 = new City_1.City(2, "hanoi1", 100001);
        var ct3 = new City_1.City(3, "hanoi2", 100002);
        var ct4 = new City_1.City(4, "hanoi3", 100003);
        var ct5 = new City_1.City(5, "hanoi4", 100004);
        this.listCity.push(ct1);
        this.listCity.push(ct2);
        this.listCity.push(ct3);
        this.listCity.push(ct4);
        this.listCity.push(ct5);
    }
    CityManager.prototype.add = function (t) {
        this.listCity.push(t);
    };
    CityManager.prototype.findAll = function () {
        return this.listCity;
    };
    CityManager.prototype.findByID = function (id) {
    };
    return CityManager;
}());
exports.CityManager = CityManager;
// // @ts-ignore
// let cityManager = new CityManager()
// console.log(cityManager.findAll());
