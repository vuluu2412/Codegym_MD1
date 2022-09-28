"use strict";
exports.__esModule = true;
exports.Street = void 0;
var Street = /** @class */ (function () {
    function Street(id, name) {
        this.listFamily = [];
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(Street.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Street.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Street.prototype.add = function (t) {
        this.listFamily.push(t);
    };
    Street.prototype.edit = function (id, t) {
    };
    Street.prototype.findAll = function () {
        return this.listFamily;
    };
    Street.prototype.findById = function (id) {
    };
    Street.prototype.findByIndex = function (index) {
        return this.listFamily[index];
    };
    Street.prototype.findMemberMoreThanTwo = function () {
        var listMemberMoreThanTwo = [];
        for (var i = 0; i < this.listFamily.length; i++) {
            if (this.listFamily[i].member > 2) {
                listMemberMoreThanTwo.push(this.listFamily[i]);
            }
        }
        return listMemberMoreThanTwo;
    };
    Street.prototype.findA = function () {
        if (this.name == "A") {
            for (var i = 0; i < this.listFamily.length; i++) {
                this.listFamily[i].findByNameNinh();
            }
        }
    };
    return Street;
}());
exports.Street = Street;
