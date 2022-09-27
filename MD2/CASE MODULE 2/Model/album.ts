import {Song} from "./Song";
import {Manage} from "../Service/Manage";
import {ManageSong} from "../Service/Manage Song";

export class Album extends ManageSong implements Manage<Song> {
    private _id: number;
    private _name: string;
    private _idUser: number;


    constructor(id: number, name: string, idUser: number) {
        super();
        this._id = id;
        this._name = name;
        this._idUser = idUser;
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

    get idUser(): number {
        return this._idUser;
    }

    set idUser(value: number) {
        this._idUser = value;
    }

}