"use strict";
exports.__esModule = true;
exports.ManageProduct = void 0;
var ManageProduct = /** @class */ (function () {
    function ManageProduct() {
        this.listProduct = [];
    }
    ManageProduct.prototype.add = function (t) {
        this.listProduct.push(t);
    };
    ManageProduct.prototype.findAll = function () {
        return this.listProduct;
    };
    ManageProduct.prototype.findById = function (id) {
        for (var i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    ManageProduct.prototype.remove = function (id) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need delete";
        }
        else {
            this.listProduct.splice(index, 1);
            return "Delete Id comPeLeTe";
        }
    };
    ManageProduct.prototype.update = function (id, name, sectors, price, amount, date, infoProduct) {
        var index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update";
        }
        else {
            if (name)
                this.listProduct[index].name = name;
            if (sectors)
                this.listProduct[index].sectors = sectors;
            if (price)
                this.listProduct[index].price = price;
            if (amount)
                this.listProduct[index].amount = amount;
            if (date)
                this.listProduct[index].date = date;
            if (infoProduct)
                this.listProduct[index].infoProduct = infoProduct;
            return "Update Done";
        }
    };
    ManageProduct.prototype.findByName = function (name) {
        // let listName: Product[] = [];
        // this.listProduct.forEach((item) => {
        //     if (item.name == name) {
        //         listName.push(item);
        //     }
        // })
        // if (listName.length == 0) {
        //     return "Not Found Name";
        // } else return listName;
        var listName = this.listProduct.filter(function (item) { return item.name.toUpperCase().includes(name.toUpperCase()); });
        if (listName.length == 0) {
            console.log("Not Found Data");
        }
        else
            console.log(listName);
    };
    return ManageProduct;
}());
exports.ManageProduct = ManageProduct;
