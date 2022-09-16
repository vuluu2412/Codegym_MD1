import {Manager} from "../Service/interface";
import {PerSon} from "./Person";

export class City implements Manager<PerSon>{
    private _codeCity:number;
    _nameCity:string;
    private _population:number;
    private _gdp:number;
    listPerson:PerSon[]=[];

    constructor(codeCity: number, name: string, gdp: number) {
        this._codeCity = codeCity;
        this._nameCity = name;
        this._gdp = gdp;
    }

    get codeCity(): number {
        return this._codeCity;
    }

    set codeCity(value: number) {
        this._codeCity = value;
    }

    get name(): string {
        return this._nameCity;
    }

    set name(value: string) {
        this._nameCity = value;
    }

    get population(): number {
        return this._population;
    }

    set population(value: number) {
        this._population = value;
    }

    get gdp(): number {
        return this._gdp;
    }

    set gdp(value: number) {
        this._gdp = value;
    }

    add(t: PerSon) {
        this.listPerson.push(t);
        this._population++;
    }

    findAll() {
        return this.listPerson;
    }

    findByID(id: number) {
    }
}