"use strict";
exports.__esModule = true;
var ManageAlbum_1 = require("./Service/ManageAlbum");
var album_1 = require("./Model/album");
var Song_1 = require("./Model/Song");
var manageAccount_1 = require("./Service/manageAccount");
var account_1 = require("./Model/account");
var Manage_Song_1 = require("./Service/Manage Song");
var manageSong = new Manage_Song_1.ManageSong();
// let song1 = new Song(11, "11", "11", "11");
// manageSong.add(song1);
var idUser;
var manageAccount = new manageAccount_1.ManageAccount();
var admin1 = new account_1.Account("admin", "admin", 1);
manageAccount.addAccount(admin1);
var listAlbum = new ManageAlbum_1.ManageAlbum();
var album1 = new album_1.Album(1, "playlist1", 1);
var album2 = new album_1.Album(2, "playlist2", 2);
var album3 = new album_1.Album(3, "playlist3", 3);
listAlbum.add(album1);
listAlbum.add(album2);
listAlbum.add(album3);
var input = require('readline-sync');
function start(a) {
    var menu = "----Library Music----\n1.Add Album\n2.Show Album\n3.Delete Album\n4.Edit Album\n5.Find album\n6.Logout\n0.Exit";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Enter Your Select");
        switch (choice) {
            case 1:
                addAlbum();
                break;
            case 2:
                showAlbum(a);
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
                main();
                break;
        }
    } while (choice != 0);
    function addAlbum() {
        var menu = "----Add Album----";
        console.log(menu);
        var id = +input.question("Enter ID Album:\n");
        var name = input.question("Enter Name Album:\n");
        var idUser = +input.question("Enter Name idUser:\n");
        var album = new album_1.Album(id, name, idUser);
        listAlbum.add(album);
    }
    function showAlbum(a) {
        // console.log(listAlbum.findAll());
        var playList = listAlbum.findAll();
        for (var i = 0; i < playList.length; i++) {
            // console.log(i);
            if (playList[i].idUser == a.idUser) {
                console.log("".concat(i + 1, "--ID:").concat(playList[i].id, ",Name: ").concat(playList[i].name));
            }
        }
        console.log('0.Exit');
        var choice = +input.question('Enter Your Select');
        if (choice == 0) {
            start(a);
        }
        else {
            console.log(listAlbum.findByIndex(choice - 1));
            menuAlbum();
        }
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
    var name = input.question("Enter Name Find");
    listAlbum.findByName(name);
}
function menuAlbum() {
    var menu = "---Menu Song---\n1.Add Song\n2.Show Song\n3.Delete Song\n4.Find Song\n0.Back";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Enter Your Select');
        switch (choice) {
            case 1:
                addSong();
                break;
            case 2:
                showSong();
                break;
            case 3:
                deleteSong();
                break;
            case 4:
                findSong();
                break;
            case 5:
                editSong();
                break;
        }
    } while (choice != 0);
}
function editSong() {
    var id = +input.question("Enter Id Song Update");
    if (manageSong.findById(id) == -1) {
        console.log("Id unavailable");
    }
    else {
        var name_2 = input.question("Enter Name Song Update");
        console.log(manageSong.update(id, name_2));
    }
}
function addSong() {
    // console.log(manageSong.findAll());
    var id = +input.question('Enter id of song');
    var name = input.question('Enter name of song');
    // for (let i = 0; i < manageSong.length; i++) {
    //     if (manageSong[i].name == name) {0
    //         return `Ten bai hat da ton tai`;
    //     } else {
    var artist = input.question('Enter artist of song');
    var composers = input.question('Enter composers of song');
    var song = new Song_1.Song(id, name, artist, composers);
    // listAlbum.findAll()[]
    manageSong.add(song);
}
function showSong() {
    console.log();
    listAlbum.albumList.forEach(function (e) {
        if (idUser == e.idUser) {
            console.log(e);
        }
    });
    //     for (let i = 0; i < manageSong.listSong.length; i++) {
    //         if(manageSong.listSong[i].idUser==idUser)
    //         console.log(`${i + 1}-ID:${manageSong.listSong[i].id}, Name: ${manageSong.listSong[i].name}, Artist: ${manageSong.listSong[i].artist}, Composers: ${manageSong.listSong[i].composers}`)
    //     }
}
function deleteSong() {
    var id = +input.question('Enter id want delete');
    var menu = "Select 1 agree to delete, 2 don't?";
    var choice = 0;
    do {
        console.log(menu);
        var choice_1 = +input.question('Enter your choice');
        switch (choice_1) {
            case 1:
                console.log(manageSong.remove(id));
                console.log(manageSong.findAll());
                break;
            case 2:
                menuAlbum();
                break;
        }
    } while (choice != 0);
}
function findSong() {
    var name = input.question('Enter name find: ');
    manageSong.findByName(name);
}
function removeAlbum() {
    var id = +input.question('Enter id song delete');
    console.log(listAlbum.remove(id));
    console.log(listAlbum.findAll());
}
function main() {
    var menu = "----Login----\n1.Login\n2.Register";
    console.log(menu);
    var choice;
    do {
        choice = +input.question("Enter Your Select");
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
    var menu = "----WellCome----";
    console.log(menu);
    var user = input.question("Enter user: ");
    var password = input.question("Enter password: ");
    idUser = +input.question("Enter idUser: ");
    var ac = new account_1.Account(user, password, idUser);
    if (manageAccount.checkAccount(user, password, idUser)) {
        start(ac);
    }
}
function register() {
    var menu = "----Register----";
    console.log(menu);
    var user = input.question("Enter user: ");
    var password = input.question("Enter password: ");
    var idUser = input.question("Enter idUser: ");
    for (var i = 0; i < manageAccount.listAccount.length; i++) {
        if (manageAccount.listAccount[i].user == user) {
            console.log(" User account already exists");
            register();
        }
        else if (manageAccount.listAccount[i].idUser == idUser) {
            console.log("idUser already exists");
            register();
        }
        else {
            var register_1 = new account_1.Account(user, password, idUser);
            manageAccount.addAccount(register_1);
            login();
        }
    }
}
main();
