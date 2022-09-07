var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
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
    return Product;
}());
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this._products = [];
    }
    Object.defineProperty(ProductManager.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this._products.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
var mobiPhone = new Product("iphone", "30.000.000 VNĐ");
var mobiPhone1 = new Product("samsung", "20.000.000 VNĐ");
var productManager = new ProductManager();
productManager.add = mobiPhone;
productManager.add = mobiPhone1;
console.log(productManager.products);
