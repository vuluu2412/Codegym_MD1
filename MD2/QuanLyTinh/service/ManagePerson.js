"use strict";
exports.__esModule = true;
exports.ManagePerson = void 0;
var Person_1 = require("../model/Person");
var Province_1 = require("../model/Province");
var ManagePerson = /** @class */ (function () {
    function ManagePerson() {
        this.personList = [];
    }
    ManagePerson.prototype.add = function (t) {
        this.personList.push(t);
    };
    ManagePerson.prototype.findAll = function () {
        for (var i = 0; i < this.personList.length; i++) {
            console.log("STT: " + (i + 1) + ", " + this.personList[i].name + ", " + this.personList[i].age + ", ở " + this.personList[i].province.name);
        }
    };
    ManagePerson.prototype.findById = function (id) {
        return new Person_1.Person(0, '0', 0, new Province_1.Province(0, ''));
    };
    ManagePerson.prototype.findByIndex = function (index) {
        return new Person_1.Person(0, '0', 0, new Province_1.Province(0, ''));
    };
    return ManagePerson;
}());
exports.ManagePerson = ManagePerson;
