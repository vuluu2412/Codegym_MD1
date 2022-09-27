import {Manage} from "./Manage";
import {Song} from "../Model/Song";

export class ManageSong implements Manage<Song> {
    listSong: Song[] = [];

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
    update(id: number, name?: string) {
        let index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update"
        } else {
            if (name) this.listSong[index].name = name;
            return "Update Done";
        }
    }

    findByName(name: string) {
        let listName = this.listSong.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))
        if (listName.length == 0) {
            console.log("Not Found Data");
        } else console.log(listName);
    }
}