"use strict";
exports.__esModule = true;
var CityManager_1 = require("../Model/CityManager");
// @ts-ignore
var input = require('readline-sync');
var cityManager = new CityManager_1.CityManager([]);
function start() {
    var menu = "------Quan Ly Tinh-------\n1.Th\u00EAm th\u00E0nh ph\u1ED1\n2.Danh s\u00E1ch\n0.Tho\u00E1t ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                showCity();
                break;
            case 2:
                break;
            case 0:
        }
    } while (choice != 0);
}
function showCity() {
    var listCity = cityManager.findAll();
    for (var i = 0; i < listCity.length; i++) {
        console.log("".concat(i + 1, ":codeCity -- ").concat(listCity[i].codeCity, ", T\u00EAn --").concat(listCity[i]._nameCity, ", GDP - ").concat(listCity[i].gdp));
    }
}
// function main(){
start();
// }
// main();
