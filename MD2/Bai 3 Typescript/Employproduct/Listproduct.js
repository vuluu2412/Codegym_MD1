"use strict";
exports.__esModule = true;
exports.StaffManager = void 0;
var StaffManager = /** @class */ (function () {
    function StaffManager() {
        this._staff = [];
    }
    Object.defineProperty(StaffManager.prototype, "staff", {
        get: function () {
            return this._staff;
        },
        set: function (value) {
            this._staff = value;
        },
        enumerable: false,
        configurable: true
    });
    StaffManager.prototype.addStaff = function (staff) {
        this._staff.push(staff);
    };
    StaffManager.prototype.deleteStaff = function (id) {
        this._staff = this._staff.filter(function (item) {
            return item.id != id;
        });
    };
    StaffManager.prototype.show = function () {
        for (var i = 0; i < this._staff.length; i++) {
            console.log(this._staff[i]);
        }
    };
    return StaffManager;
}());
exports.StaffManager = StaffManager;
