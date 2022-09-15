"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerSon = void 0;
var PerSon = /** @class */ (function () {
    function PerSon(ID, Name, Age, Occupation) {
        this._ID = ID;
        this._Name = Name;
        this._Age = Age;
        this._Occupation = Occupation;
    }
    Object.defineProperty(PerSon.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerSon.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerSon.prototype, "Age", {
        get: function () {
            return this._Age;
        },
        set: function (value) {
            this._Age = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PerSon.prototype, "Occupation", {
        get: function () {
            return this._Occupation;
        },
        set: function (value) {
            this._Occupation = value;
        },
        enumerable: false,
        configurable: true
    });
    return PerSon;
}());
exports.PerSon = PerSon;
