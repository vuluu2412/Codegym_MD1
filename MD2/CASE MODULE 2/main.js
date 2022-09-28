"use strict";
exports.__esModule = true;
var ManageAlbum_1 = require("./Service/ManageAlbum");
var album_1 = require("./Model/album");
var Song_1 = require("./Model/Song");
var manageAccount_1 = require("./Service/manageAccount");
var account_1 = require("./Model/account");
var listSong = new album_1.Album(1, "a");
var manageAccount = new manageAccount_1.ManageAccount();
var admin1 = new account_1.Account("admin", "admin");
manageAccount.addAccount(admin1);
var listAlbum = new ManageAlbum_1.ManageAlbum();
// let album1 = new Album(1, "playlist1");
// let album2 = new Album(2, "playlist2");
// let album3 = new Album(3, "playlist3");
// listAlbum.add(album1);
// listAlbum.add(album2);
// listAlbum.add(album3);
var input = require('readline-sync');
function start() {
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
                showAlbum();
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
        var album = new album_1.Album(id, name);
        listAlbum.add(album);
    }
    function showAlbum() {
        // console.log(listAlbum.findAll());
        var playList = listAlbum.findAll();
        for (var i = 0; i < playList.length; i++) {
            console.log("".concat(i + 1, "--ID:").concat(playList[i].id, ",Name: ").concat(playList[i].name));
        }
        console.log('0.Exit');
        var choice = +input.question('Enter Your Select');
        if (choice == 0) {
            start();
        }
        else {
            var album = listAlbum.findByIndex(choice - 1);
            menuAlbum(album, choice);
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
function menuAlbum(album, idAlbum) {
    var menu = "---Menu Song---\n1.Add Song\n2.Show Song\n3.Delete Song\n4.Find Song\n0.Back";
    var choice;
    do {
        console.log(menu);
        choice = +input.question('Enter Your Select');
        switch (choice) {
            case 1:
                addSong(album);
                break;
            case 2:
                showSong(album);
                break;
            case 3:
                deleteSong(1);
                break;
            case 4:
                findSong();
        }
    } while (choice != 0);
}
function addSong(album) {
    var id = +input.question('Enter id of song');
    var name = input.question('Enter name of song');
    var artist = input.question('Enter artist of song');
    var composers = input.question('Enter composers of song');
    var song = new Song_1.Song(id, name, artist, composers);
    album.add(song);
}
function showSong(album) {
    for (var i = 0; i < album.listSong.length; i++) {
        console.log("".concat(i + 1, "-ID:").concat(album.listSong[i].id, ", Name: ").concat(album.listSong[i].name, ", Artist: ").concat(album.listSong[i].artist, ", Composers: ").concat(album.listSong[i].composers));
    }
}
function deleteSong(idAlbum) {
    var idSong = +input.question('Enter id song');
    var menu = "Select 1 agree to delete, 2 don't?";
    var choice = null;
    do {
        console.log(menu);
        var choice_1 = +input.question('Enter your choice');
        switch (choice_1) {
            case 1:
                var indexMuonXoa = listAlbum.albumList[idAlbum - 1].listSong.findIndex(function (e) { return e.id == idSong; });
                listAlbum.albumList[idAlbum - 1].listSong.splice(indexMuonXoa, 1);
                listAlbum.albumList[idAlbum - 1].listSong.forEach(function (e) {
                    console.log(e);
                });
                break;
            case 2:
                // @ts-ignore
                menuAlbum();
                break;
        }
    } while (choice != 0);
}
function findSong() {
    var name = input.question('Enter name find: ');
    listSong.findByName(name);
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
    if (manageAccount.checkAccount(user, password)) {
        start();
    }
}
function register() {
    var menu = "----Register----";
    console.log(menu);
    var user = input.question("Enter user: ");
    var password = input.question("Enter password: ");
    var register = new account_1.Account(user, password);
    manageAccount.addAccount(register);
    login();
}
main();
