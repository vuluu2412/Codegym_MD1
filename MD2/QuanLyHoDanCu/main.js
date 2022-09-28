"use strict";
exports.__esModule = true;
var street_1 = require("./model/street");
var family_1 = require("./model/family");
var person_1 = require("./model/person");
var listStreet = new street_1.Street(1, "A");
var input = require('readline-sync');
function start() {
    var menu = "----Menu Khu Pho----\n1.Them nha\n2.Hien Thi Danh Sach Nha\n3.Hien Thi Danh Sach Nha Lon Hon 2 Thanh Vien\n4.Hien Thi Ninh\n0.Thoat";
    var choice;
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
    var menu = "----Th\u00EAm nh\u00E0----";
    console.log(menu);
    var id = +input.question('Nhap ID Nha:\n');
    var address = input.question('Nhap Dia Chi Nha:\n');
    var family = new family_1.Family(id, address);
    listStreet.add(family);
}
function showFamilies() {
    var listFamily = listStreet.findAll();
    for (var i = 0; i < listFamily.length; i++) {
        console.log("".concat(i + 1, "- ID:").concat(listFamily[i].id, ", Address: ").concat(listFamily[i].address));
    }
    console.log('0.Thoát');
    var choice = +input.question('Nhap lua chon cua ban');
    if (choice == 0) {
        start();
    }
    else {
        var family = listStreet.findByIndex(choice - 1);
        menuFamily(family);
    }
}
function menuFamily(family) {
    var menu = "----Menu Nh\u00E0----\n1.Th\u00EAm Th\u00E0nh Vi\u00EAn\n2.Hi\u1EC3n Th\u1ECB Danh S\u00E1ch Th\u00E0nh Vi\u00EAn\n0.Quay L\u1EA1i";
    var choice;
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
function addPerson(family) {
    var id = +input.question('Nhap ID Cua Thanh Vien');
    var name = input.question('Nhap Ten Cua Thanh Vien');
    var age = +input.question('Nhap Tuoi');
    var job = input.question('Nhap Nghe Nghiep');
    var person = new person_1.Person(id, name, age, job);
    family.add(person);
}
function showPerson(family) {
    for (var i = 0; i < family.listPerson.length; i++) {
        console.log("".concat(i + 1, "- ID:").concat(family.listPerson[i].id, ",Name: ").concat(family.listPerson[i].name, ", Age: ").concat(family.listPerson[i].age, ", Job:").concat(family.listPerson[i].job));
    }
}
function showInfoFamily() {
    var families = listStreet.findMemberMoreThanTwo();
    for (var i = 0; i < families.length; i++) {
        console.log("Nh\u00E0 ".concat(families[i].id, " c\u00F3 th\u00E0nh vi\u00EAn"));
        for (var j = 0; j < families[i].listPerson.length; j++) {
            console.log("T\u00EAn: ".concat(families[i].listPerson[j].name, " "));
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
