import {CityManager} from "../Model/CityManager";
// @ts-ignore
let input = require('readline-sync');
let cityManager = new CityManager([])
function start() {
    let menu = `------Quan Ly Tinh-------\n1.Thêm thành phố\n2.Danh sách\n0.Thoát `;
    let choice;
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
function showCity(){
let listCity = cityManager.findAll();
    for (let i = 0; i < listCity.length ; i++) {
        console.log(`${i+1}:codeCity -- ${listCity[i].codeCity}, Tên --${listCity[i]._nameCity}, GDP - ${listCity[i].gdp}`)


    }
}

// function main(){
start();
// }
// main();