import {Cadres} from "./Cadres";

export class Worker extends Cadres{
    private _level:number;
    constructor(name: string, age: number, gender: string, add: string, level: number) {
        super(name, age, gender, add);
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
    }
}