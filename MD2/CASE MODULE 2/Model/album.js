"use strict";
exports.__esModule = true;
exports.Album = void 0;
var Album = /** @class */ (function () {
    function Album(id, name) {
        this.listSong = [];
        this._id = id;
        this._name = name;
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
}());
exports.Album = Album;
