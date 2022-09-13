import {Cadres} from "./Cadres";

export class Staff extends Cadres{
    private _job:string;

    constructor(name: string, age: number, gender: string, add: string, job: string) {
        super(name, age, gender, add);
        this._job = job;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}