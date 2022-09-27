import {Album} from "../Model/album";
import {Manage} from "./Manage";

export class ManageAlbum implements Manage <Album> {
    albumList: Album[] = [];

    add(t: Album) {
        this.albumList.push(t);
    }

    findAll(): Album[] {
        return this.albumList;
    }

    findById(id: number): number {
        for (let i = 0; i < this.albumList.length; i++) {
            if (this.albumList[i].id == id) {
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
            this.albumList.splice(index, 1);
            return "Delete Id com PeLeTe"
        }
    }

    update(id: number, name?: string) {
        let index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update"
        } else {
            if (name) this.albumList[index].name = name;
            return "Update Done";
        }
    }

    findByName(name: string) {
        let listName = this.albumList.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))
        if (listName.length == 0) {
            console.log("Not Found Data");
        } else console.log(listName);
    }
    findByIndex(index:number){
        return this.albumList[index];
    }
}