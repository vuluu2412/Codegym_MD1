"use strict";
exports.__esModule = true;
var manageProduct_1 = require("./service/manageProduct");
var Product_1 = require("./model/Product");
var listProduct = new manageProduct_1.ManageProduct();
var proDuct1 = new Product_1.Product(1, "miTom1", "ThucPhAm", 5000, 100, "23/9/2022", "HaoHaoChuaCay");
var proDuct2 = new Product_1.Product(2, "miTom2", "ThucPhAm", 6000, 100, "23/9/2022", "OMaChi");
var proDuct3 = new Product_1.Product(3, "miTom3", "ThucPhAm", 7000, 100, "23/9/2022", "MiXao");
var proDuct4 = new Product_1.Product(4, "miTom4", "ThucPhAm", 8000, 100, "23/9/2022", "BoHam");
var proDuct5 = new Product_1.Product(5, "miTom5", "ThucPhAm", 9000, 100, "23/9/2022", "SuOnNguQua");
listProduct.add(proDuct1);
listProduct.add(proDuct2);
listProduct.add(proDuct3);
listProduct.add(proDuct4);
listProduct.add(proDuct5);
<<<<<<< HEAD
// console.log(listProduct.findAll());
=======
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
var input = require('readline-sync');
function mainMenu() {
    var menu = "----Menu ProDuct----\n1.Show List ProDuct\n2.Find ProDuct By Name\n3.Add New ProDuct\n4.Update InForProDuct\n5.Remove ProDuct\n0.Exit";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Enter Your Selection");
        switch (choice) {
            case 1:
                showProduct();
                break;
            case 2:
                findProDuctByName();
                break;
            case 3:
                addProduct();
                break;
            case 4:
                editProDuct();
                break;
            case 5:
                deleteProDuct();
                break;
        }
    } while (choice != 0);
}
function showProduct() {
    console.log(listProduct.findAll());
}
function addProduct() {
    var id = +input.question("Enter Id ProDuct");
<<<<<<< HEAD
    if (id <= 0) {
        console.log("id khong hop le");
        mainMenu();
=======
    for (var i = 0; i < listProduct.listProduct.length; i++) {
        if (listProduct.listProduct[i].id == id) {
            console.log("id already exists");
            return mainMenu();
        }
        if (id <= 0) {
            console.log("invalid id");
            return mainMenu();
        }
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
    }
    var name = input.question("Enter Name ProDuct");
    var sectors = input.question("Enter Sectors ProDuct");
    var price = +input.question("Enter Price ProDuct");
    if (price <= 0) {
<<<<<<< HEAD
        console.log("gia khong hop le");
=======
        console.log("Invalid price");
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
        mainMenu();
    }
    var amount = +input.question("Enter Amount ProDuct");
    if (amount <= 0) {
<<<<<<< HEAD
        console.log("so luong khong hop le");
        mainMenu();
    }
    // let date = new Date().getDay();
=======
        console.log("Invalid amount");
        mainMenu();
    }
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
    var inForProDuct = input.question("Enter InForProDuct");
    var product = new Product_1.Product(id, name, sectors, price, amount, Date(), inForProDuct);
    listProduct.add(product);
}
function findProDuctByName() {
    var name = input.question("Enter Name Find");
<<<<<<< HEAD
    // console.log(listProduct.findByName(name));
=======
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
    listProduct.findByName(name);
}
function editProDuct() {
    var id = +input.question("Enter Id ProDuct Update: ");
    if (listProduct.findById(id) == -1) {
<<<<<<< HEAD
        console.log("Id unavailable");
=======
        console.log("id unavailable");
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
    }
    else {
        var name_1 = input.question("Enter Name ProDuct Update");
        var sectors = input.question("Enter Sectors ProDuct Update");
        var price = +input.question("Enter Price ProDuct Update");
        var amount = +input.question("Enter Amount ProDuct Update");
<<<<<<< HEAD
        var date = input.question("Enter Date Product Update");
        var inForProDuct = input.question("Enter InForProDuct Update");
        // let product = new Product(id,name,sectors,price,amount,date,inForProDuct);
        console.log(listProduct.update(id, name_1, sectors, price, amount, date, inForProDuct));
=======
        // let date = input.question("Enter Date Product Update");
        var inForProDuct = input.question("Enter InForProDuct Update");
        // let product = new Product(id,name,sectors,price,amount,date,inForProDuct);
        console.log(listProduct.update(id, name_1, sectors, price, amount, Date(), inForProDuct));
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
    }
}
function deleteProDuct() {
    var id = +input.question("Enter Id ProDuct delete");
    console.log(listProduct.remove(id));
}
<<<<<<< HEAD
// show();
=======
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
mainMenu();
