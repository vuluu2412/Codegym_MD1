"use strict";
exports.__esModule = true;
exports.ManageAccount = void 0;
var ManageAccount = /** @class */ (function () {
    function ManageAccount() {
        this.listAccount = [];
    }
    ManageAccount.prototype.add = function (t) {
        this.listAccount.push(t);
    };
    ManageAccount.prototype.findAll = function () {
        return this.listAccount;
    };
    ManageAccount.prototype.findById = function (id) {
        return 0;
    };
    ManageAccount.prototype.remove = function (id) {
    };
    ManageAccount.prototype.update = function (id, t) {
    };
    return ManageAccount;
}());
exports.ManageAccount = ManageAccount;
