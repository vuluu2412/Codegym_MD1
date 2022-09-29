"use strict";
exports.__esModule = true;
exports.Album = void 0;
var Album = /** @class */ (function () {
    function Album(id, name, albumUser) {
        this._listSongOfAlbum = [];
        this._id = id;
        this._name = name;
        this._albumUser = albumUser;
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
    Object.defineProperty(Album.prototype, "albumUser", {
        get: function () {
            return this._albumUser;
        },
        set: function (value) {
            this._albumUser = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "listSongOfAlbum", {
        get: function () {
            return this._listSongOfAlbum;
        },
        set: function (value) {
            this._listSongOfAlbum = value;
        },
        enumerable: false,
        configurable: true
    });
    return Album;
}());
exports.Album = Album;
