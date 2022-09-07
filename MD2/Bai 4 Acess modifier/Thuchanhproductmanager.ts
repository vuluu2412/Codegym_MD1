class Product {
    private _name: string;
    private _price:string;

    constructor(name:string,price:string){
        this._name = name;
        this._price = price;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get price(): string {
        return this._price;
    }
    set price(value: string) {
        this._price = value;
    }
}
class ProductManager {
    private _products = [];
    constructor() {
    }

    get products(): any[] {
        return this._products;
    }

    set add(product:Product) {
        this._products.push(product)
    }
}
let mobiPhone = new Product("iphone","30.000.000 VNĐ");
let mobiPhone1 = new Product("samsung","20.000.000 VNĐ");
let productManager = new ProductManager();
productManager.add = mobiPhone;
productManager.add = mobiPhone1;
console.log(productManager.products)