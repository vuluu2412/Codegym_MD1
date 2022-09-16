"use strict";
exports.__esModule = true;
exports.PerSon = void 0;
var PerSon = /** @class */ (function () {
    function PerSon(idPerson, name, age) {
        this._idPerson = idPerson;
        this._name = name;
        this._age = age;
        this._cityName = this.cityName;
    }
    Object.defineProperty(PerSon.prototype, "idPerson", {
        get: function () {
            return this._idPerson;
        },
        set: function (value) {
            this._idPerson = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerSon.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerSon.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerSon.prototype, "cityName", {
        get: function () {
            return this._cityName;
        },
        set: function (value) {
            this._cityName = value;
        },
        enumerable: false,
        configurable: true
    });
    return PerSon;
}());
exports.PerSon = PerSon;
