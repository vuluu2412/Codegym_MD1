import {Song} from "./Song";
import {Manage} from "../Service/Manage";

export class Album implements Manage<Song>{
         _id:number;
    private _name:string;
    // private _quantity:number;
    listSong:Song[]=[];


    constructor(id: number, name: string) {
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


    // get quantity(): number {
    //     return this._quantity;
    // }
    //
    // set quantity(value: number) {
    //     this._quantity = value;
    // }

    add(t: Song) {
        this.listSong.push(t);
        // this._quantity++;
    }

    findAll() {
        return this.listSong;
    }

    findById(id: number) {
        for (let i = 0; i <this.listSong.length ; i++) {
            console.log(this.listSong[i].id)
            if (this.listSong[i].id==id){
                return i;
            }
        }
        return -1;

    }

    remove(id: number) {
        let index = this.findById(id);
        if (index==-1){
            return "Id unavailable need delete"
        } else {
            this.listSong.splice(index,1);
            return "Delete id complete"
        }
    }
    // update(id:number,name?:string,artist?:string,composers?:string){
    //     let index = this.findById(id);
    //     if (index==-1){
    //         return "Id unavailable need update"
    //     } else {
    //         if (name) this.listSong[index].name=name;
    //         if (artist) this.listSong[index].artist=artist;
    //         if (composers) this.listSong[index].composers=composers;
    //         return "Update done"
    //     }
    // }

}