import {Song} from "./Song";
import {Manage} from "../Service/Manage";
import {ManageSong} from "../service/manageSong";


export class Album extends ManageSong implements Manage<Song> {
     _id: number;
     _name: string;
    listSong: Song[] = [];
    private _idUser: number=1;


    constructor(id?: number, name?: string) {
        super();
        this._id = id;
        this._name = name;
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

    add(t: Song) {
        this.listSong.push(t);
    }

    findAll() {
        return this.listSong;
    }

    findById(id: number) {
        for (let i = 0; i < this.listSong.length; i++) {
            console.log(this.listSong[i].id)
            if (this.listSong[i].id == id) {
                return i;
            }
        }
        return -1;

    }

    remove(id: number) {
        let index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need delete"
        } else {
            this.listSong.splice(index, 1);
            return "Delete id complete"
        }
    }

    findByName(name: string) {
        let listName = this.listSong.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))
        if (listName.length == 0) {
            console.log("Not Found Data");
        } else console.log(listName);
    }
}