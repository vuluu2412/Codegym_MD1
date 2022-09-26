import {Manage} from "../service/manage";
import {Family} from "./family";

export class Street implements Manage<Family> {
    private _id: number;
    private _name: string;
    listFamily: Family[] = [];

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

    add(t: Family) {
        this.listFamily.push(t);
    }

    edit(id: number, t: Family) {
    }

    findAll() {
        return this.listFamily;
    }

    findById(id: number) {
    }

    findByIndex(index: number) {
        return this.listFamily[index];
    }

    findMemberMoreThanTwo() {
        let listMemberMoreThanTwo: Family[] = [];
        for (let i = 0; i < this.listFamily.length; i++) {
            if (this.listFamily[i].member > 2) {
                listMemberMoreThanTwo.push(this.listFamily[i])
            }
        }   return listMemberMoreThanTwo;
    }
    findA(){
        if (this.name=="A"){
            for (let i = 0; i <this.listFamily.length ; i++) {
                this.listFamily[i].findByNameNinh();
            }
        }
    }


}