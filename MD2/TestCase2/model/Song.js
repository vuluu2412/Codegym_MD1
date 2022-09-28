"use strict";
exports.__esModule = true;
exports.Song = void 0;
var Song = /** @class */ (function () {
    function Song(id, name, artist, composers) {
        this._id = id;
        this._name = name;
        this._artist = artist;
        this._composers = composers;
    }
    Object.defineProperty(Song.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Song.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Song.prototype, "artist", {
        get: function () {
            return this._artist;
        },
        set: function (value) {
            this._artist = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Song.prototype, "composers", {
        get: function () {
            return this._composers;
        },
        set: function (value) {
            this._composers = value;
        },
        enumerable: false,
        configurable: true
    });
    return Song;
}());
exports.Song = Song;
