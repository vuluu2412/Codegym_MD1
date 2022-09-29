export class Song{
    private _id:number;
    private _name:string;
    private _artists:string;
    private _composers:string;

    constructor(id: number, name: string, artists: string, composers: string) {
        this._id = id;
        this._name = name;
        this._artists = artists;
        this._composers = composers;
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

    get artists(): string {
        return this._artists;
    }

    set artists(value: string) {
        this._artists = value;
    }

    get composers(): string {
        return this._composers;
    }

    set composers(value: string) {
        this._composers = value;
    }
}