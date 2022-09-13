import {Cadres} from "./Cadres";

export class Engineer extends Cadres{
    private _trainingIndustry:string;

    constructor(name: string, age: number, gender: string, add: string, trainingIndustry: string) {
        super(name, age, gender, add);
        this._trainingIndustry = trainingIndustry;
    }

    get trainingIndustry(): string {
        return this._trainingIndustry;
    }

    set trainingIndustry(value: string) {
        this._trainingIndustry = value;
    }
}