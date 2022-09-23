import {ManageAccountAdmin} from "./service/ManageAccountAdmin";
import {AccountAmin} from "./model/AccountAmin";
import {Account} from "../QuanLyBanHang/Model/acount";

let listAccountAmin = new ManageAccountAdmin();
let accountAmin = new AccountAmin("admin", "admin");
listAccountAmin.addAccountAdmin(accountAmin);
let input = require('readline-sync');

function adminMenu() {
    let menu = `-----Admin Menu-----\n1.Manager User\n2.ManagerProduct\n3.LogOut`;
    let choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban');
        switch (choice) {
            case 1:
                console.log(1.);
                break;
            case 2:
                console.log(2.);
                break;
            case 3:
                main();
                break;
        }
    } while (choice != 0);
}

function adminLogin() {
    let menu = `-----Wellcome----`;
    console.log(menu);
    let user = input.question('Nhap User:\n');
    let password = input.question('Nhap Password:\n');
    if (listAccountAmin.checkAccountAdmin(user, password)) {
        adminMenu();
    }
}
function userLogin() {
    let menu = `-----Wellcome----`;
    console.log(menu);
    let user = input.question('Nhap User:\n');
    let password = input.question('Nhap Password:\n');
    if (listAccountAmin.checkAccountAdmin(user, password)) {
        shoppingMenu();
    }
}


function main() {
    let menu = `-----Login-----\n1.Đăng nhập\n2.Đăng Ký`;
    console.log(menu);
    let choice;
    do {
        choice = +input.question("Nhap lua chon cua ban");
        switch (choice) {
            case 1:
                adminLogin();
                break;
            case 2:
                register();
                break;
        }
    } while (choice != 0);
}

function start() {
    main();
}

function register() {
    let menu = `----Đăng Ký Tài Khoản Mua Sắm----`;
    console.log(menu)
    let user = input.question("Nhap user: ");
    let password = input.question("Nhap password: ");
    let register = new AccountAmin(user,password);
    listAccountAmin.addAccountAdmin(register);
    userLogin();
}
function shoppingMenu() {
    let menu = `-----Shopping Menu-----\n1.Mua Sắm\n2.Giỏ Hàng Của Tôi\n3.Lịch Sử\n0.Thoát`;
    let choice;
    do {
        console.log(menu);
        choice = +input.question('Nhap lua chon cua ban');
        switch (choice) {
            case 1:
                menuMall();
                break;
            case 2:
                console.log(2.);
                break;
            case 3:
                console.log(3.);
                break;
        }
    } while (choice != 0);
}
function menuMall(){
    let menuMall = `----Menu Mall----\n1.Hiển Thị Danh Sách\n2.Sắp xếp theo giá\n3.Tìm theo tên gần đúng\n4.Tìm theo khoảng giá\n5.Mua hàng\n0.Thoát`
    let choice;
    do{
        console.log(menuMall);
        choice = +input.question('Nhap Lua Chon Cua Ban');
        switch (choice){
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                break;
        }
    }while (choice!=0)
}

start();