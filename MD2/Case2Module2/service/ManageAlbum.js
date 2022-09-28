"use strict";
exports.__esModule = true;
exports.ManageAlbum = void 0;
var ManageAlbum = /** @class */ (function () {
    function ManageAlbum() {
        this.listAlbum = [];
    }
    ManageAlbum.prototype.add = function (t) {
        this.listAlbum.push(t);
    };
    ManageAlbum.prototype.findAll = function () {
        return this.listAlbum;
    };
    ManageAlbum.prototype.findById = function (id) {
        for (var i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageAlbum.prototype.remove = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need delete";
        }
        else {
            this.listAlbum.splice(index, 1);
            return "Delete Id com PeLeTe";
        }
    };
    ManageAlbum.prototype.update = function (id, name) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update";
        }
        else {
            if (name)
                this.listAlbum[index].name = name;
            return "Update Done";
        }
    };
    ManageAlbum.prototype.findByName = function (name) {
        var listName = this.listAlbum.filter(function (item) { return item.name.toUpperCase().includes(name.toUpperCase()); });
        if (listName.length == 0) {
            console.log("Not Found Data");
        }
        else
            console.log(listName);
    };
    ManageAlbum.prototype.findByIndex = function (index) {
        return this.listAlbum[index];
    };
    return ManageAlbum;
}());
exports.ManageAlbum = ManageAlbum;
