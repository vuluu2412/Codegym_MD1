import {ManageAccount} from "./service/manageAccount";
import {ManageSong} from "./service/manageSong";
import {ManageAlbum} from "./service/manageAlbum";
import {Config} from "./model/config";
import {Account} from "./model/account";
import {Album} from "./model/album";
import {Song} from "./model/Song";

let input = require('readline-sync');
let listAccount = new ManageAccount();
let listSong = new ManageSong();
let listAlbum = new ManageAlbum();
let admin1 = new Account("admin", "admin");
let song1 = new Song(11,"11","11","11");
let song2 = new Song(22,"22","22","22");
let song3 = new Song(33,"33","33","33");
let song4 = new Song(44,"44","44","44");
let song5 = new Song(55,"55","55","55");
listAccount.add(admin1);
listSong.add(song1);
listSong.add(song2);
listSong.add(song3);
listSong.add(song4);
listSong.add(song5);
function mainMenu() {
    let menu = `----Login----\n1.Login\n2.Register\n0.Exit`
    console.log(menu);
    let choice;
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
    let menu = "----Login----";
    console.log(menu);
    let user = input.question("Enter user\n");
    let password = input.question("Enter password\n");
    let loginUser = false;
    for (let i = 0; i < listAccount.listAccount.length; i++) {
        if (user == listAccount.listAccount[i].user && password == listAccount.listAccount[i].password) {
            loginUser = true;
            Config.user = listAccount.listAccount[i];
            start();
        }
    }
    if (!loginUser) {
        console.log("Password or user wrong");
        mainMenu();
    }
}
function register() {
    let menu = "----Register---";
    console.log(menu);
    let user = input.question('Enter user\n');
    for (let i = 0; i < listAccount.listAccount.length; i++) {
        if (user == listAccount.listAccount[i].user) {
            console.log('This username already exits');
            return login();
        }
    }
    let password = input.question('Enter password\n');
    let ac = new Account(user, password);
    listAccount.add(ac);
    login();
}
function start() {
    let menu = "----Library Music----\n1.Add Album\n2.Show Album\n3.Delete Album\n4.Edit Album\n5.Find album\n6.Manage Song\n7.Logout\n0.Exit";
    let choice;
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
    let menu = "-----Album----";
    console.log(menu);
    let id = +input.question("Enter id album:\n");
    for (let i = 0; i < listAlbum.listAlbum.length; i++) {
        if (id == listAlbum.listAlbum[i].id) {
            console.log("id already exists");
            return start();
        }
    }
    let name = input.question("Enter name album:\n");
    if (name == "") {
        console.log("You can't name album empty");
        return start();
    }
    let albumUser = Config.user.user;
    // let listSongOfAlbum = [];
    let album = new Album(id, name, albumUser);
    listAlbum.add(album);
}
function showAlbumUser() {
    let albumUser = [];
    for (let i = 0; i < listAlbum.listAlbum.length; i++) {
        if (Config.user.user == listAlbum.listAlbum[i].albumUser) {
            albumUser.push(listAlbum.listAlbum[i]);
        }
    }
    console.log(albumUser);
    start();
}
function removeAlbum() {
    let id = +input.question('Enter id delete');
    console.log("are you sure want to delete\n 1.Yes \n 2.No");
    let choice = +input.question();
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
    let id = +input.question("Enter Id Album Update");
    if (listAlbum.findById(id) == -1) {
        console.log("Id unavailable");
    } else {
        let name = input.question("Enter Name Album Update");
        console.log(listAlbum.update(id, name));
    }
}
function findAlbumByName() {
    let name = input.question('Enter Name Album Find');
    listAlbum.findByName(name);
}
function playList() {
    let menu = "----List Song----\n1.AddSong\n2.ShowSong\n3.DeleteSong\n4.EditSong\n5.FindSong\n6.addSongAlbum\n7.showSongAlbum\n8.Back.";
    console.log(menu);
    let choice = 0;
    do {
        let choice = +input.question("Enter your select");
        switch (choice) {
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
            case 8:
                start();
                break;
        }
    } while (choice != 0);
}
function addSong() {
    let idSong = +input.question('Enter id Song');
    for (let i = 0; i < listSong.listSong.length; i++) {
        if (listSong.listSong[i].id == idSong) {
            console.log("Id unavailable");
            return  playList();
        }
    }
    let name = input.question('Enter name song');
    if (name == "") {
        console.log("You can't name song empty");
        return playList();
    }
    let artists = input.question('Enter name artists of song');
    let composers = input.question('Enter name composers of song');
    let song = new Song(idSong, name, artists, composers);
    listSong.add(song);
    playList();
}
function showAllSong() {
    console.log(listSong.findAll());
    playList();
}
function deleteSong() {
    let idSong = +input.question('Enter id song')
    console.log("you are sure want to delete\n 1.Yes \n 2.No");
    let choice = +input.question();
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
    let id = +input.question("Enter Id Song Update");
    if (listSong.findById(id) == -1) {
        console.log("Id unavailable");
    } else {
        let name = input.question("Enter Name Song Update");
        console.log(listSong.update(id, name));
        playList();
    }

}
function findSong() {
    let name = input.question('Enter Name Song Find');
    listSong.findByName(name);
}
function addSongAlbum() {
    let idSong = +input.question('Enter id song ');
    let index = listSong.findById(idSong)
    if (index != -1) {
        let idAlbum = +input.question('Enter id album');
        let song = listSong.listSong[index]
        index = listAlbum.findById(idAlbum);
        if (index != -1) {
            listAlbum.listAlbum[index].listSongOfAlbum.push(song);
            console.log(song);
            let ip = `You are want add song to album\n1.Yes\n2.No\n`;
            console.log(ip);
            let choice;
            do {
                choice = +input.question('Enter your select');
                switch (choice){
                    case 1:
                        addSongAlbum();
                        break;
                    case 2:
                        console.log(song);
                        playList();
                        break;
                }
            }while (choice!=0)
        } else console.log('album unavailable');
    } else console.log("Song unavailable");

}
function showSongAlbum() {
    let idAlbum = +input.question('Enter id album show');
    let album = listAlbum.listAlbum[listAlbum.findById(idAlbum)];
    console.log(album);

}
mainMenu();