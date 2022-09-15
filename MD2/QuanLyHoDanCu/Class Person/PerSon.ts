export class PerSon{
    private _ID:number;
    private _Name:string;
    private _Age:number;
    private _Occupation:string;

    constructor(ID: number, Name: string, Age: number, Occupation: string) {
        this._ID = ID;
        this._Name = Name;
        this._Age = Age;
        this._Occupation = Occupation;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Age(): number {
        return this._Age;
    }

    set Age(value: number) {
        this._Age = value;
    }

    get Occupation(): string {
        return this._Occupation;
    }

    set Occupation(value: string) {
        this._Occupation = value;
    }
}