"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, sectors, price, amount, date, infoProduct) {
        this._id = id;
        this._name = name;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._date = date;
        this._infoProduct = infoProduct;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "sectors", {
        get: function () {
            return this._sectors;
        },
        set: function (value) {
            this._sectors = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "infoProduct", {
        get: function () {
            return this._infoProduct;
        },
        set: function (value) {
            this._infoProduct = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
