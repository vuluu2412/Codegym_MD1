"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseHold = void 0;
var HouseHold = /** @class */ (function () {
    function HouseHold(ID, Address, Member) {
        this._Household = [];
        this._ID = ID;
        this._Address = Address;
        this._Member = Member;
    }
    Object.defineProperty(HouseHold.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HouseHold.prototype, "Member", {
        get: function () {
            return this._Member;
        },
        set: function (value) {
            this._Member = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HouseHold.prototype, "Address", {
        get: function () {
            return this._Address;
        },
        set: function (value) {
            this._Address = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HouseHold.prototype, "Household", {
        get: function () {
            return this._Household;
        },
        set: function (value) {
            this._Household = value;
        },
        enumerable: false,
        configurable: true
    });
    HouseHold.prototype.addHouseHold = function (HouseHold) {
        this._Household.push(HouseHold);
    };
    HouseHold.prototype.showHouseHold = function () {
        return this.Household;
    };
    HouseHold.prototype.deleteHouseHold = function (ID) {
        return this._Household = this._Household.filter(function (item) {
            return item.ID != ID;
        });
    };
    HouseHold.prototype.findHouseHold = function (ID) {
        var flag = 0;
        this._Household.forEach(function (e) {
            if (e.ID == ID) {
                console.log(e);
                flag++;
            }
        });
        if (flag == 0) {
            console.log("Không Có");
        }
    };
    return HouseHold;
}());
exports.HouseHold = HouseHold;
