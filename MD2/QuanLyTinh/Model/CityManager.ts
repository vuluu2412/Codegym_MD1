import {Manager} from "../Service/interface";
import {City} from "./City";

export class CityManager implements Manager<City> {
    listCity: City [] = [];

    constructor(listCity: City[]) {
        let ct1 = new City(1, "hanoi", 10000)
        let ct2 = new City(2, "hanoi1", 100001)
        let ct3 = new City(3, "hanoi2", 100002)
        let ct4 = new City(4, "hanoi3", 100003)
        let ct5 = new City(5, "hanoi4", 100004)

        this.listCity.push(ct1);
        this.listCity.push(ct2);
        this.listCity.push(ct3);
        this.listCity.push(ct4);
        this.listCity.push(ct5);
    }

    add(t: City) {
        this.listCity.push(t);
    }

    findAll() {
        return this.listCity;
    }

    findByID(id: number) {
    }
}

// // @ts-ignore
// let cityManager = new CityManager()
// console.log(cityManager.findAll());

