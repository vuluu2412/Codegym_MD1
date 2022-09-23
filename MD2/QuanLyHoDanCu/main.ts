import {Street} from "./model/street";
import {Family} from "./model/family";
import {Person} from "./model/person";

let listStreet: Street = new Street(1, "A");
let input = require('readline-sync');

function start() {
    let menu = `----Menu Khu Pho----\n1.Them nha\n2.Hien Thi Danh Sach Nha\n3.Hien Thi Danh Sach Nha Lon Hon 2 Thanh Vien\n4.Hien Thi Ninh\n0.Thoat`
    let choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap Lua Chon Cua Ban");
        switch (choice) {
            case 1:
                addFamily();
                break;
            case 2:
                showFamilies();
                break;
            case 3:
                showInfoFamily();
                break;
            case 4:
                showNinh();
                break;
        }
    } while (choice != 0);
}

function addFamily() {
    let menu = `----Thêm nhà----`;
    console.log(menu);
    let id = +input.question('Nhap ID Nha:\n');
    let address = input.question('Nhap Dia Chi Nha:\n');
    let family: Family = new Family(id, address);
    listStreet.add(family);
}

function showFamilies() {
    let listFamily = listStreet.findAll();
    for (let i = 0; i < listFamily.length; i++) {
        console.log(`${i + 1}- ID:${listFamily[i].id}, Address: ${listFamily[i].address}`)
    }
    console.log('0.Thoát');
    let choice = +input.question('Nhap lua chon cua ban');
    if (choice == 0) {
        start();
    } else {
        let family: Family = listStreet.findByIndex(choice - 1);
        menuFamily(family);
    }
}

function menuFamily(family: Family) {
    let menu = `----Menu Nhà----\n1.Thêm Thành Viên\n2.Hiển Thị Danh Sách Thành Viên\n0.Quay Lại`;
    let choice;
    while (choice != 0) {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban');
        switch (choice) {
            case 1:
                addPerson(family);
                break;
            case 2:
                showPerson(family);
                break;
        }
    }
}

function addPerson(family: Family) {
    let id: number = +input.question('Nhap ID Cua Thanh Vien');
    let name: string = input.question('Nhap Ten Cua Thanh Vien');
    let age: number = +input.question('Nhap Tuoi');
    let job: string = input.question('Nhap Nghe Nghiep');
    let person: Person = new Person(id, name, age, job);
    family.add(person);
}

function showPerson(family: Family) {
    for (let i = 0; i < family.listPerson.length; i++) {
        console.log(`${i + 1}- ID:${family.listPerson[i].id},Name: ${family.listPerson[i].name}, Age: ${family.listPerson[i].age}, Job:${family.listPerson[i].job}`)
    }
}

function showInfoFamily() {
    let families = listStreet.findMemberMoreThanTwo();
    for (let i = 0; i < families.length; i++) {
        console.log(`Nhà ${families[i].id} có thành viên`)
        for (let j = 0; j < families[i].listPerson.length; j++) {
            console.log(`Tên: ${families[i].listPerson[j].name} `)
        }
    }
}

function showNinh() {
    listStreet.findA();
}

function main() {
    start();
}

main();