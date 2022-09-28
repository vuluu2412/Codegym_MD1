"use strict";
exports.__esModule = true;
var ManageSong_1 = require("./service/ManageSong");
var ManageAlbum_1 = require("./service/ManageAlbum");
var ManageAccount_1 = require("./service/ManageAccount");
var config_1 = require("./model/config");
var account_1 = require("./model/account");
var album_1 = require("./model/album");
var Song_1 = require("./model/Song");
var input = require('readline-sync');
var listAccount = new ManageAccount_1.ManageAccount();
var listSong = new ManageSong_1.ManageSong();
var listAlbum = new ManageAlbum_1.ManageAlbum();
function mainMenu() {
    var menu = "----Login----\n1.Login\n2.Register\n0.Exit";
    console.log(menu);
    var choice;
    do {
        choice = +input.question('Enter Your Select');
        switch (choice) {
            case 1:
                login();
                break;
            case 2:
                register();
                break;
        }
    } while (choice != 0);
}
function login() {
    var menu = "----Login----";
    console.log(menu);
    var user = input.question("Enter user\n");
    var password = input.question("Enter password\n");
    var loginUser = false;
    for (var i = 0; i < listAccount.listAccount.length; i++) {
        if (user == listAccount.listAccount[i].user && password == listAccount.listAccount[i].password) {
            loginUser = true;
            config_1.Config.account = listAccount.listAccount[i];
            start();
        }
    }
    if (!loginUser) {
        console.log("Password or user wrong");
        mainMenu();
    }
}
function register() {
    var menu = "----Register---";
    console.log(menu);
    var user = input.question('Enter user\n');
    for (var i = 0; i < listAccount.listAccount.length; i++) {
        if (user == listAccount.listAccount[i].user) {
            console.log('This username already exits');
            return login();
        }
    }
    var password = input.question('Enter password\n');
    var ac = new account_1.Account(user, password);
    listAccount.add(ac);
    login();
}
function start() {
    var menu = "----Library Music----\n1.Add Album\n2.Show Album\n3.Delete Album\n4.Edit Album\n5.Find album\n6.Manage Song\n7.Logout\n0.Exit";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Enter Your Select");
        switch (choice) {
            case 1:
                addAlbum();
                break;
            case 2:
                showAlbumUser();
                break;
            case 3:
                removeAlbum();
                break;
            case 4:
                editAlbum();
                break;
            case 5:
                findAlbumByName();
                break;
            case 6:
                playList();
                break;
            case 7:
                mainMenu();
                break;
        }
    } while (choice != 0);
}
function addAlbum() {
    var menu = "-----Album----";
    console.log(menu);
    var id = +input.question("Enter id album:\n");
    for (var i = 0; i < listAlbum.listAlbum.length; i++) {
        if (id == listAlbum.listAlbum[i].id) {
            console.log("id da ton tai");
            return start();
        }
    }
    var name = input.question("Enter name album:\n");
    if (name == "") {
        console.log("Ban khong duoc de trong");
        return start();
    }
    var albumUser = config_1.Config.account.user;
    var album = new album_1.Album(id, name, albumUser);
    listAlbum.add(album);
}
function showAlbumUser() {
    var albumUser = [];
    for (var i = 0; i < listAlbum.listAlbum.length; i++) {
        if (config_1.Config.account.user == listAlbum.listAlbum[i].albumUser) {
            albumUser.push(listAlbum.listAlbum[i]);
        }
    }
    console.log(albumUser);
    start();
}
function removeAlbum() {
    var id = +input.question('Enter id delete');
    console.log("Ban co chac chan muon xoa1.Co2.Khong");
    var choice = +input.question();
    switch (choice) {
        case 1:
            listAlbum.remove(id);
            start();
            break;
        case 2:
            start();
            break;
    }
}
function editAlbum() {
    // let id = +input.question('Enter id edit');
    // let name = input.question(`Enter new name`);
    // for (let i = 0; i <listAlbum.listAlbum.length ; i++) {
    //     if (name==listAlbum.listAlbum[i].name){
    //         console.log('Ten album da ton tai');
    //         start();
    //     }
    // }
    // listAlbum.listAlbum[listAlbum.findById(id)].name = name;
    var id = +input.question("Enter Id Album Update");
    if (listAlbum.findById(id) == -1) {
        console.log("Id unavailable");
    }
    else {
        var name_1 = input.question("Enter Name Album Update");
        console.log(listAlbum.update(id, name_1));
    }
}
function findAlbumByName() {
    var name = input.question('Enter Name Album Find');
    listAlbum.findByName(name);
}
function playList() {
    var menu = "----List Song----\n1.AddSong\n2.ShowSong\n3.DeleteSong\n4.EditSong\n5.FindSong.";
    console.log(menu);
    var choice = 0;
    do {
        var choice_1 = +input.question("Enter your select");
        switch (choice_1) {
            case 1:
                addSong();
                break;
            case 2:
                showAllSong();
                break;
        }
    } while (choice != 0);
}
function addSong() {
    var idSong = +input.question('Enter id Song');
    // let idAlbum = +input.question('Enter id alBum add Song');
    var name = input.question('Enter name song');
    if (name == "") {
        console.log("Ban chua nhap ten");
        return playList();
    }
    var artists = input.question('Enter name artists of song');
    var composers = input.question('Enter name composers of song');
    var song = new Song_1.Song(idSong, name, artists, composers);
    listSong.add(song);
    playList();
}
function showAllSong() {
    console.log(listSong.findAll());
    playList();
}
mainMenu();
