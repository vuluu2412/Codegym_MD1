import {Manage} from "./manage";
import {Album} from "../model/album";

export class ManageAlbum implements Manage<Album>{
    listAlbum:Album[]=[];

    add(t: Album) {
        this.listAlbum.push(t);
    }

    findAll() {
        return this.listAlbum;
    }

    findById(id: number): number {
        for (let i = 0; i <this.listAlbum.length ; i++) {
            if (this.listAlbum[i].id==id){
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
            this.listAlbum.splice(index, 1);
            return "Delete Id com PeLeTe"
        }
    }

    update(id: number, name?: string) {
        let index = this.findById(id);
        if (index == -1) {
            return "Id unavailable need update"
        } else {
            if (name) this.listAlbum[index].name = name;
            return "Update Done";
        }
    }

    findByName(name: string) {
        let listName = this.listAlbum.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))
        if (listName.length == 0) {
            console.log("Not Found Data");
        } else console.log(listName);
    }
    findByIndex(index:number){
        return this.listAlbum[index];
    }
}