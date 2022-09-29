"use strict";
exports.__esModule = true;
var manageAccount_1 = require("./service/manageAccount");
var manageSong_1 = require("./service/manageSong");
var manageAlbum_1 = require("./service/manageAlbum");
var config_1 = require("./model/config");
var account_1 = require("./model/account");
var album_1 = require("./model/album");
var Song_1 = require("./model/Song");
var input = require('readline-sync');
var listAccount = new manageAccount_1.ManageAccount();
var listSong = new manageSong_1.ManageSong();
var listAlbum = new manageAlbum_1.ManageAlbum();
var admin1 = new account_1.Account("admin", "admin");
listAccount.add(admin1);
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
            config_1.Config.user = listAccount.listAccount[i];
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
            console.log("id already exists");
            return start();
        }
    }
    var name = input.question("Enter name album:\n");
    if (name == "") {
        console.log("You can't name album empty");
        return start();
    }
    var albumUser = config_1.Config.user.user;
    var listSongOfAlbum = [];
    var album = new album_1.Album(id, name, albumUser);
    listAlbum.add(album);
}
function showAlbumUser() {
    var albumUser = [];
    for (var i = 0; i < listAlbum.listAlbum.length; i++) {
        if (config_1.Config.user.user == listAlbum.listAlbum[i].albumUser) {
            albumUser.push(listAlbum.listAlbum[i]);
        }
    }
    console.log(albumUser);
    start();
}
function removeAlbum() {
    var id = +input.question('Enter id delete');
    console.log("are you sure want to delete\n 1.Yes \n 2.No");
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
    var menu = "----List Song----\n1.AddSong\n2.ShowSong\n3.DeleteSong\n4.EditSong\n5.FindSong\n6.addSongAlbum\n7.showSongAlbum.";
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
            case 3:
                deleteSong();
                break;
            case 4:
                editSong();
                break;
            case 5:
                findSong();
                break;
            case 6:
                addSongAlbum();
                break;
            case 7:
                showSongAlbum();
                break;
        }
    } while (choice != 0);
}
function addSong() {
    var idSong = +input.question('Enter id Song');
    for (var i = 0; i < listSong.listSong.length; i++) {
        if (listSong.listSong[i].id == idSong) {
            console.log("Id unavailable");
            return playList();
        }
    }
    var name = input.question('Enter name song');
    if (name == "") {
        console.log("You can't name song empty");
        return playList();
    }
    // let idAlbum = +input.question('Enter id alBum add Song');
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
function deleteSong() {
    var idSong = +input.question('Enter id song');
    console.log("you are sure want to delete\n 1.Yes \n 2.No");
    var choice = +input.question();
    switch (choice) {
        case 1:
            console.log(listSong.remove(idSong));
            playList();
            break;
        case 2:
            playList();
            break;
    }
}
function editSong() {
    var id = +input.question("Enter Id Song Update");
    if (listSong.findById(id) == -1) {
        console.log("Id unavailable");
    }
    else {
        var name_2 = input.question("Enter Name Song Update");
        console.log(listSong.update(id, name_2));
        playList();
    }
}
function findSong() {
    var name = input.question('Enter Name Song Find');
    listSong.findByName(name);
}
function addSongAlbum() {
    var idSong = +input.question('Enter id song ');
    var index = listSong.findById(idSong);
    if (index != -1) {
        var idAlbum = +input.question('Enter id album');
        var song = listSong.listSong[index];
        index = listAlbum.findById(idAlbum);
        if (index != -1) {
            listAlbum.listAlbum[index].listSongOfAlbum.push(song);
            console.log(song);
        }
        else
            console.log('album chua ton tai');
    }
    else
        console.log("bai hat chua ton tai");
}
function showSongAlbum() {
    var idAlbum = +input.question('Enter id album show');
    var album = listAlbum.listAlbum[listAlbum.findById(idAlbum)];
    console.log(album);
}
mainMenu();
