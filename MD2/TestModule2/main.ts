import {ManageProduct} from "./service/manageProduct";
import {Product} from "./model/Product";
<<<<<<< HEAD


=======
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
let listProduct: ManageProduct = new ManageProduct();
let proDuct1 = new Product(1, "miTom1", "ThucPhAm", 5000, 100, "23/9/2022", "HaoHaoChuaCay");
let proDuct2 = new Product(2, "miTom2", "ThucPhAm", 6000, 100, "23/9/2022", "OMaChi");
let proDuct3 = new Product(3, "miTom3", "ThucPhAm", 7000, 100, "23/9/2022", "MiXao");
let proDuct4 = new Product(4, "miTom4", "ThucPhAm", 8000, 100, "23/9/2022", "BoHam");
let proDuct5 = new Product(5, "miTom5", "ThucPhAm", 9000, 100, "23/9/2022", "SuOnNguQua");
listProduct.add(proDuct1);
listProduct.add(proDuct2);
listProduct.add(proDuct3);
listProduct.add(proDuct4);
listProduct.add(proDuct5);
<<<<<<< HEAD
// console.log(listProduct.findAll());
let input = require('readline-sync');

=======
let input = require('readline-sync');
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
function mainMenu() {
    let menu = `----Menu ProDuct----\n1.Show List ProDuct\n2.Find ProDuct By Name\n3.Add New ProDuct\n4.Update InForProDuct\n5.Remove ProDuct\n0.Exit`
    let choice;
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
<<<<<<< HEAD

function showProduct() {
    console.log(listProduct.findAll());
}

function addProduct() {
    let id = +input.question("Enter Id ProDuct");
    if (id <= 0) {
        console.log("id khong hop le");
        mainMenu();
=======
function showProduct() {
    console.log(listProduct.findAll());
}
function addProduct() {
    let id = +input.question("Enter Id ProDuct");
    for (let i = 0; i < listProduct.listProduct.length; i++) {
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
    let name = input.question("Enter Name ProDuct");
    let sectors = input.question("Enter Sectors ProDuct");
    let price = +input.question("Enter Price ProDuct");
    if (price <= 0) {
<<<<<<< HEAD
        console.log("gia khong hop le");
=======
        console.log("Invalid price");
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
        mainMenu();
    }
    let amount = +input.question("Enter Amount ProDuct");
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
    let inForProDuct = input.question("Enter InForProDuct");
    let product = new Product(id, name, sectors, price, amount, Date(), inForProDuct);
    listProduct.add(product);
}
<<<<<<< HEAD

=======
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
function findProDuctByName() {
    let name = input.question("Enter Name Find");
    listProduct.findByName(name);
}
<<<<<<< HEAD

function editProDuct() {
    let id = +input.question("Enter Id ProDuct Update: ")
    if (listProduct.findById(id) == -1) {
        console.log("Id unavailable")
=======
function editProDuct() {
    let id = +input.question("Enter Id ProDuct Update: ")
    if (listProduct.findById(id) == -1) {
        console.log("id unavailable")
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
    } else {
        let name = input.question("Enter Name ProDuct Update");
        let sectors = input.question("Enter Sectors ProDuct Update");
        let price = +input.question("Enter Price ProDuct Update");
        let amount = +input.question("Enter Amount ProDuct Update");
        // let date = input.question("Enter Date Product Update");
        let inForProDuct = input.question("Enter InForProDuct Update");
        // let product = new Product(id,name,sectors,price,amount,date,inForProDuct);
<<<<<<< HEAD
        console.log(listProduct.update(id, name, sectors, price, amount, date, inForProDuct));
    }
}

=======
        console.log(listProduct.update(id, name, sectors, price, amount, Date(), inForProDuct));
    }
}
>>>>>>> af0ad2b2cfb50dc773f7c29f7feb41f567cd5d93
function deleteProDuct() {
    let id = +input.question("Enter Id ProDuct delete");
    console.log(listProduct.remove(id));
}

// show();
mainMenu();