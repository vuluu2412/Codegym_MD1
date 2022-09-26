import {ManageProduct} from "./Service/ManageProduct";
import {ManageCustomer} from "./Service/ManageCustomer";
import {OrderDetailManage} from "./Service/OrderDetailManage";
import {Product} from "./Model/Product";
import {Customer} from "./Model/Customer";
import {OrderDetail} from "./Model/orderDetail";
import {ManageAccount} from "./Service/ManageAcount";
import {Account} from "./Model/acount";

let productList: ManageProduct = new ManageProduct();
let customerList: ManageCustomer = new ManageCustomer();
let orderManage: OrderDetailManage = new OrderDetailManage();
let manageAccount = new ManageAccount();
let admin1 = new Account("admin","admin");
manageAccount.addAccount(admin1);
let product1= new Product(1,"mitom1",100,12345);
let product2= new Product(2,"mitom2",100,12345);
let product3= new Product(3,"mitom3",100,12345);
let product4= new Product(4,"mitom4",100,12345);
productList.add(product1);
productList.add(product2);
productList.add(product3);
productList.add(product4);
console.log(productList.findAll());


// @ts-ignore
let input = require('readline-sync');

function mainMenu() {
    let menu = `----Menu chinh----\n1.Them,Sua,Xoa san pham\n2.Them khach hang\n3.Mua san pham\n4.Hien Thi HoaDon`
    let choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                showMenuProduct();
                break;
            case 2:
                addCustomer();
                break;
            case 3:
                buyProduct();
                break;
            case 4:
                showOrder();
                break;

        }
    } while (choice != 0)
}
function addCustomer(){
    let id = +input.question("Nhap id khach hang: ");
    let name = input.question("Nhap ten khach hang: ");
    let customer = new Customer(name,id);
    customerList.add(customer);
}
function buyProduct(){
let id = +input.question("Nhap id khach hang: ");
    for (let i = 0; i <productList.productList.length ; i++) {
        console.log(`id: ${productList.productList[i].id}, ten: ${productList.productList[i].name}, so luong: ${productList.productList[i].amount}, gia: ${productList.productList[i].price}`)
    }
    let idOrder = +input.question("Nhap id hoa don: ");
    let idProduct = +input.question("Nhap id san pham: ");

    let product = productList.findProductById(idProduct);
    let amount = +input.question("Nhap so luong san pham can mua");

    productList.update(idProduct,new Product(product.id,product.name,product.amount-amount,product.price));
    let customer = customerList.findCustomerById(id);
    let time = new Date();
    let today = `${time.getDate()}/${time.getMonth()+1}`;
    product.amount = amount;
    let orderDetail = new OrderDetail(idOrder,customer,today);
    orderDetail.add(product);
    orderManage.add(orderDetail);
}

function showMenuProduct() {
    let menu = `----Menu Product\n1.Them\n2.Xoa\n3.Sua\n4.Hien thi\n0.Thoat`
    let choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban");
        switch (choice) {
            case 1:
                addProduct();
                break;
            case 2:
                removeProduct();
                break;
            case 3:
                editProduct();
                break;
            case 4:
                showProductList();
                break;

        }
    } while (choice != 0)
}

function addProduct() {
    let id = +input.question("Nhap id san pham");
    let name = input.question("Nhap ten san pham: ");
    let amount = +input.question("Nhap so luong san pham: ");
    let price = +input.question("Nhap gia san pham")
    let product = new Product(id, name, amount, price);
    productList.add(product);
}

function removeProduct() {
    let id = +input.question("Nhap id san pham");
    productList.remove(id)
}

function editProduct() {
    let id = +input.question("Nhap id san pham can sua");
    let name = input.question("Nhap ten san pham can sua");
    let amount = +input.question("Nhap so luong san pham can sua");
    let price = +input.question("Nhap gia san pham can sua");
    let product = new Product(id, name, amount, price)
    productList.update(id, product);
}

function showProductList() {
    console.log(productList.findAll());
}
function showOrder(){
    orderManage.findAll();
}
function main(){
    let menu = `-----Login-----\n1.Đăng nhập\n2.Đăng Ký`;
    console.log(menu);
    let choice;
    do{
        choice = +input.question("Nhap lua chon cua ban");
        switch (choice){
            case 1:
                login();
                break;
            case 2:
                register();
                break;
        }
    }while (choice!=0);
}
function login(){
    let menu = `------wellcome------`
    console.log(menu);
    let user = input.question("Nhap user: ");
    let password = input.question("Nhap password: ");
    if (manageAccount.checkAccount(user,password)){
        mainMenu();
    } else console.log("Ban da nhap sai mat khau");
}
function register(){
    let menu = `------register------`;
    console.log(menu);
    let user = input.question("Nhap user: ");
    let password = input.question("Nhap password: ");
    let register = new Account(user,password);
    manageAccount.addAccount(register);
    login();
}
main();
