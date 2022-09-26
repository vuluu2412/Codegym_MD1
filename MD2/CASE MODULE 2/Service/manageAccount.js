"use strict";
exports.__esModule = true;
exports.ManageAccount = void 0;
var ManageAccount = /** @class */ (function () {
    function ManageAccount() {
        this.listAccount = [];
    }
    ManageAccount.prototype.addAccount = function (account) {
        this.listAccount.push(account);
    };
    ManageAccount.prototype.checkAccount = function (user, password) {
        var flag = false;
        this.listAccount.forEach(function (item) {
            if (item.user == user && item.password == password) {
                return flag = true;
            }
        });
        return flag;
    };
    return ManageAccount;
}());
exports.ManageAccount = ManageAccount;
