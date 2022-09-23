"use strict";
exports.__esModule = true;
exports.Province = void 0;
var Province = /** @class */ (function () {
    function Province(id, name) {
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Province.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Province.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Province;
}());
exports.Province = Province;
