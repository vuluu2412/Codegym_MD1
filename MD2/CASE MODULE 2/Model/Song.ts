export class Song {
    _id: number;
    private _name: string;
    private _artist: string;
    private _composers:string;


    constructor(id: number, name: string, artist: string, composers: string) {
        this._id = id;
        this._name = name;
        this._artist = artist;
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

    get artist(): string {
        return this._artist;
    }

    set artist(value: string) {
        this._artist = value;
    }

    get composers(): string {
        return this._composers;
    }

    set composers(value: string) {
        this._composers = value;
    }
}