"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Album = void 0;
var manageSong_1 = require("../service/manageSong");
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, name) {
        var _this = _super.call(this) || this;
        _this.listSong = [];
        _this._idUser = 1;
        _this._id = id;
        _this._name = name;
        return _this;
    }
    Object.defineProperty(Album.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "idUser", {
        get: function () {
            return this._idUser;
        },
        set: function (value) {
            this._idUser = value;
        },
        enumerable: false,
        configurable: true
    });
    Album.prototype.add = function (t) {
        this.listSong.push(t);
    };
    Album.prototype.findAll = function () {
        return this.listSong;
    };
    Album.prototype.findById = function (id) {
        for (var i = 0; i < this.listSong.length; i++) {
            console.log(this.listSong[i].id);
            if (this.listSong[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    Album.prototype.remove = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need delete";
        }
        else {
            this.listSong.splice(index, 1);
            return "Delete id complete";
        }
    };
    Album.prototype.findByName = function (name) {
        var listName = this.listSong.filter(function (item) { return item.name.toUpperCase().includes(name.toUpperCase()); });
        if (listName.length == 0) {
            console.log("Not Found Data");
        }
        else
            console.log(listName);
    };
    return Album;
}(manageSong_1.ManageSong));
exports.Album = Album;
