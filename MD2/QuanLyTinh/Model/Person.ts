import {City} from "./City";

export class PerSon {
    private _idPerson:number;
    private _name:string;
    private _age:number;
    private _cityName:string;

    constructor(idPerson: number, name: string, age: number) {
        this._idPerson = idPerson;
        this._name = name;
        this._age = age;
        this._cityName = this.cityName;
    }


    get idPerson(): number {
        return this._idPerson;
    }

    set idPerson(value: number) {
        this._idPerson = value;
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

    get cityName(): string {
        return this._cityName;
    }

    set cityName(value: string) {
        this._cityName = value;
    }
}