var Speed;
(function (Speed) {
    Speed[Speed["Slow"] = 1] = "Slow";
    Speed[Speed["Medium"] = 2] = "Medium";
    Speed[Speed["Fast"] = 3] = "Fast";
})(Speed || (Speed = {}));
var Fan = /** @class */ (function () {
    function Fan(speed, on, radius, color) {
        if (speed === void 0) { speed = Speed.Slow; }
        if (on === void 0) { on = false; }
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = "color"; }
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }
    Object.defineProperty(Fan.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "on", {
        get: function () {
            return this._on;
        },
        set: function (value) {
            this._on = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fan.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    Fan.prototype.toString = function () {
        if (this._on) {
            return "M\u00E0u s\u1EAFc: ".concat(this._color, ", B\u00E1n k\u00EDnh: ").concat(this._radius, ", fan is off");
        }
        else {
            return "T\u1ED1c \u0111\u1ED9 qu\u1EA1t: ".concat(this._speed, ", M\u00E0u s\u1EAFc: ").concat(this._color, ", B\u00E1n k\u00EDnh: ").concat(this._radius, ", fan is on");
        }
    };
    return Fan;
}());
var fan = new Fan();
var fan1 = new Fan(Speed.Fast, false, 10, "yellow");
var fan2 = new Fan(Speed.Medium, true, 5, "blue");
console.log(fan1.toString());
console.log(fan2.toString());
