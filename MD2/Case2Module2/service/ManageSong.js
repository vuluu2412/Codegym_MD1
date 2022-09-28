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
        return 0;
    };
    ManageSong.prototype.remove = function (id) {
    };
    return ManageSong;
}());
exports.ManageSong = ManageSong;
