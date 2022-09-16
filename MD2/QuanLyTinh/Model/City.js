"use strict";
exports.__esModule = true;
exports.City = void 0;
var City = /** @class */ (function () {
    function City(codeCity, name, gdp) {
        this.listPerson = [];
        this._codeCity = codeCity;
        this._nameCity = name;
        this._gdp = gdp;
    }
    Object.defineProperty(City.prototype, "codeCity", {
        get: function () {
            return this._codeCity;
        },
        set: function (value) {
            this._codeCity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "name", {
        get: function () {
            return this._nameCity;
        },
        set: function (value) {
            this._nameCity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "population", {
        get: function () {
            return this._population;
        },
        set: function (value) {
            this._population = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(City.prototype, "gdp", {
        get: function () {
            return this._gdp;
        },
        set: function (value) {
            this._gdp = value;
        },
        enumerable: false,
        configurable: true
    });
    City.prototype.add = function (t) {
        this.listPerson.push(t);
        this._population++;
    };
    City.prototype.findAll = function () {
        return this.listPerson;
    };
    City.prototype.findByID = function (id) {
    };
    return City;
}());
exports.City = City;
