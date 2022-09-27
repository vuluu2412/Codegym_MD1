"use strict";
exports.__esModule = true;
exports.ManageSong = void 0;
var ManageSong = /** @class */ (function () {
    function ManageSong() {
        this.listSong = [];
    }
    ManageSong.prototype.add = function (t) {
        this.listSong.push(t);
    };
    ManageSong.prototype.findAll = function () {
        return this.listSong;
    };
    ManageSong.prototype.findById = function (id) {
        for (var i = 0; i < this.listSong.length; i++) {
            console.log(this.listSong[i].id);
            if (this.listSong[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageSong.prototype.remove = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need delete";
        }
        else {
            this.listSong.splice(index, 1);
            return "Delete id complete";
        }
    };
    ManageSong.prototype.update = function (id, name) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update";
        }
        else {
            if (name)
                this.listSong[index].name = name;
            return "Update Done";
        }
    };
    ManageSong.prototype.findByName = function (name) {
        var listName = this.listSong.filter(function (item) { return item.name.toUpperCase().includes(name.toUpperCase()); });
        if (listName.length == 0) {
            console.log("Not Found Data");
        }
        else
            console.log(listName);
    };
    return ManageSong;
}());
exports.ManageSong = ManageSong;
