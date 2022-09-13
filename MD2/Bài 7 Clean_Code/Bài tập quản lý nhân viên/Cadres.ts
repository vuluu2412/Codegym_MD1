export class Cadres {
    private _name : string;
    private _age: number;
    private _gender:string;
    private _add : string;

    constructor(name: string, age: number, gender: string, add: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._add = add;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get add(): string {
        return this._add;
    }

    set add(value: string) {
        this._add = value;
    }
}