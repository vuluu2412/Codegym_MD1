export class Product{
    private _id:number;
    private _name:string;
    private _sectors:string;
    private _price:number;
    private _amount:number;
    private _date:string;
    private _infoProduct:string;

    constructor(id: number, name: string, sectors: string, price: number, amount: number, date: string, infoProduct: string) {
        this._id = id;
        this._name = name;
        this._sectors = sectors;
        this._price = price;
        this._amount = amount;
        this._date = date;
        this._infoProduct = infoProduct;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sectors(): string {
        return this._sectors;
    }

    set sectors(value: string) {
        this._sectors = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    get infoProduct(): string {
        return this._infoProduct;
    }

    set infoProduct(value: string) {
        this._infoProduct = value;
    }
}