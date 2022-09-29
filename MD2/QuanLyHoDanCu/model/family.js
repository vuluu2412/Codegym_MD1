"use strict";
exports.__esModule = true;
exports.Family = void 0;
var Family = /** @class */ (function () {
    function Family(id, address) {
        this._member = 0;
        this.listPerson = [];
        this._id = id;
        this._address = address;
    }
    Object.defineProperty(Family.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Family.prototype, "member", {
        get: function () {
            return this._member;
        },
        set: function (value) {
            this._member = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Family.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (value) {
            this._address = value;
        },
        enumerable: false,
        configurable: true
    });
    Family.prototype.add = function (t) {
        this.listPerson.push(t);
        this._member++;
    };
    Family.prototype.edit = function (id, t) {
    };
    Family.prototype.findAll = function () {
        return this.listPerson;
    };
    Family.prototype.findById = function (id) {
    };
    Family.prototype.findByNameNinh = function () {
        for (var i = 0; i < this.listPerson.length; i++) {
            if (this.listPerson[i].name == "A") {
                console.log(this);
            }
        }
    };
    return Family;
}());
exports.Family = Family;
