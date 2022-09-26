import {ManagePerson} from "./service/ManagePerson";
import {ManageProvince} from "./service/ManageProvince";
import {Person} from "./model/Person";

class Main {
    input = require('readline-sync');
    managePerson: ManagePerson = new ManagePerson();
    manageProvince: ManageProvince = new ManageProvince();
    menu(){
        let menu = `
                    1.them nguoi
                    2.hien thi thong tin nguoi
                    ---------------------------------------
                    `
        let choice: number;
        do {
            console.log(menu)
            choice = +this.input.question("nhap lua chon: ")
            switch (choice){
                case 1:
                    let id = +this.input.question("Nhap vao id: ")
                    let name = this.input.question("Nhap vao ten: ")
                    let age = +this.input.question("Nhap vao tuoi: ")
                    this.manageProvince.findAll();
                    let indexOfProvince = +this.input.question("Nhap vao stt tinh: ")
                    this.managePerson.add(new Person(id, name, age, this.manageProvince.findByIndex(indexOfProvince-1)))
                    break;
                case 2:
                    this.managePerson.findAll();
                    break;
            }
        }while (choice != 0)
    }
}
let main = new Main()
main.menu();