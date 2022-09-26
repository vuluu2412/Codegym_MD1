import {Manage} from "./Manage";
import {Province} from "../model/Province";

export class ManageProvince implements Manage<Province> {
    provinceList: Province[] = [];
    constructor() {
        this.provinceList.push(new Province(1, "HN"));
        this.provinceList.push(new Province(2, "TB"));
        this.provinceList.push(new Province(3, "TH"));
        this.provinceList.push(new Province(4, "HP"));
        this.provinceList.push(new Province(5, "HG"));
    }
    add(t: Province): void {
        this.provinceList.push(t);
    }

    findAll(): void {
        for (let i = 0; i < this.provinceList.length; i++) {
            console.log("STT: "+(i+1)+", "+this.provinceList[i].name);
        }
    }

    findById(id: number): Province {
        for (let i = 0; i < this.provinceList.length; i++) {
            if (this.provinceList[i].id == id) {
                return this.provinceList[i]
            }
        }
        return new Province(0, '')
    }

    findByIndex(index: number): Province {
        return this.provinceList[index];
    }

}