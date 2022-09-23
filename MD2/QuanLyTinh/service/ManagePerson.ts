import {Manage} from "./Manage";
import {Person} from "../model/Person";
import {Province} from "../model/Province";

export class ManagePerson implements Manage<Person> {
    personList: Person[] = [];

    add(t: Person): void {
        this.personList.push(t);
    }

    findAll(): void {
        for (let i = 0; i < this.personList.length; i++) {
            console.log("STT: " + (i + 1) + ", " + this.personList[i].name + ", " + this.personList[i].age + ", ở " + this.personList[i].province.name);
        }
    }

    findById(id: number): Person {
        return new Person(0, '0',0, new Province(0, ''));
    }

    findByIndex(index: number): Person {
        return new Person(0, '0',0, new Province(0, ''));
    }

}