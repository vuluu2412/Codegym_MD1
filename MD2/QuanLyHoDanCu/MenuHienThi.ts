// @ts-ignore
const readline = require('readline-sync')

export class MenuHienThi {
    static menu() {
        console.log('------------Quan ly khu pho-------------');
        console.log('1. Thong Tin Pho A');
        console.log('2. Thong Tin Pho B');
        console.log('0. Thoat')
    }

    static ChonPhoA() {
        console.log('--------Quan ly Thong Tin Pho A---------');
        console.log('1.Them thong tin Pho A');
        console.log('2.Xoa thong tin Pho A');
        console.log('3.Sua thong tin Pho A');
        console.log('4.In thong tin Pho A');
        console.log('0.Thoat');
    }

    static ChonPhoB(){
        console.log('--------Quan ly Thong Tin Pho B---------');
        console.log('1.Them thong tin Pho B');
        console.log('2.Xoa thong tin Pho B');
        console.log('3.Sua thong tin Pho B');
        console.log('4.In thong tin Pho B');
        console.log('0.Thoat');
    }
}