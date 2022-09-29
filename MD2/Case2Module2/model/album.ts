import {Song} from "./Song";

export class Album{
    private _id:number;
    private _name:string;
    private _albumUser:string;
    private _listSongOfAlbum: Song[]=[];


    constructor(id: number, name: string, albumUser: string, listSongOfAlbum: Song[]) {
        this._id = id;
        this._name = name;
        this._albumUser = albumUser;
        this._listSongOfAlbum = listSongOfAlbum;
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

    get albumUser(): string {
        return this._albumUser;
    }

    set albumUser(value: string) {
        this._albumUser = value;
    }


    get listSongOfAlbum(): Song[] {
        return this._listSongOfAlbum;
    }

    set listSongOfAlbum(value: Song[]) {
        this._listSongOfAlbum = value;
    }
}