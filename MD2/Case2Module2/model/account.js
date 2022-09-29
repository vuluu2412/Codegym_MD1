"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(user, password, id) {
        this._user = user;
        this._password = password;
        this._id = id;
    }
    Object.defineProperty(Account.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
