import {ManageAlbum} from "./Service/ManageAlbum";
import {Album} from "./Model/album";
import {Song} from "./Model/Song";
import {ManageAccount} from "./Service/manageAccount";
import {Account} from "./Model/account";
import {ManageSong} from "./Service/Manage Song";

let manageSong:ManageSong = new ManageSong();
// let song1 = new Song(11, "11", "11", "11");
// manageSong.add(song1);
let idUser:number
let manageAccount = new ManageAccount();
let admin1 = new Account("admin", "admin", 1);
manageAccount.addAccount(admin1);
let listAlbum: ManageAlbum = new ManageAlbum();
let album1 = new Album(1, "playlist1", 1);
let album2 = new Album(2, "playlist2", 2);
let album3 = new Album(3, "playlist3", 3);
listAlbum.add(album1);
listAlbum.add(album2);
listAlbum.add(album3);
let input = require('readline-sync');

function start(a: Account) {
    let menu = `----Library Music----\n1.Add Album\n2.Show Album\n3.Delete Album\n4.Edit Album\n5.Find album\n6.Logout\n0.Exit`
    let choice;
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
        let menu = `----Add Album----`;
        console.log(menu);
        let id = +input.question("Enter ID Album:\n");
        let name = input.question("Enter Name Album:\n");
        let idUser = +input.question("Enter Name idUser:\n");
        let album: Album = new Album(id, name, idUser)
        listAlbum.add(album);
    }

    function showAlbum(a: Account) {
        // console.log(listAlbum.findAll());
        let playList = listAlbum.findAll();
        for (let i = 0; i < playList.length; i++) {
            // console.log(i);
            if (playList[i].idUser == a.idUser) {
                console.log(`${i + 1}--ID:${playList[i].id},Name: ${playList[i].name}`)
            }
        }
        console.log('0.Exit');
        let choice = +input.question('Enter Your Select');
        if (choice == 0) {
            start(a);
        } else {
            console.log(listAlbum.findByIndex(choice - 1));
            menuAlbum();
        }
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
    let name = input.question("Enter Name Find");
    listAlbum.findByName(name);
}

function menuAlbum() {
    let menu = `---Menu Song---\n1.Add Song\n2.Show Song\n3.Delete Song\n4.Find Song\n0.Back`
    let choice;
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
    } while (choice != 0)
}
function editSong(){
        let id = +input.question("Enter Id Song Update");
        if (manageSong.findById(id) == -1) {
            console.log("Id unavailable");
        } else {
            let name = input.question("Enter Name Song Update");
            console.log(manageSong.update(id, name));
        }
}
function addSong() {
    // console.log(manageSong.findAll());
    let id: number = +input.question('Enter id of song');
    let name: string = input.question('Enter name of song');
    // for (let i = 0; i < manageSong.length; i++) {
    //     if (manageSong[i].name == name) {0
    //         return `Ten bai hat da ton tai`;
    //     } else {
            let artist: string = input.question('Enter artist of song')
            let composers: string = input.question('Enter composers of song');
            let song: Song = new Song(id, name, artist, composers);
            // let album:Album= new Album(id,name,idUser);
            // listAlbum.findAll()[]
            album1.add(song);
            album2.add(song);
            album3.add(song);


}

function showSong() {
    // console.log(manageSong);
    listAlbum.albumList.forEach(e=>{
        if(idUser==e.idUser){
            console.log(e.listSong);
        }
    })
    // manageSong.
//     for (let i = 0; i < manageSong.listSong.length; i++) {
//         if(manageSong.listSong[i].idUser==idUser)
//         console.log(`${i + 1}-ID:${manageSong.listSong[i].id}, Name: ${manageSong.listSong[i].name}, Artist: ${manageSong.listSong[i].artist}, Composers: ${manageSong.listSong[i].composers}`)
//     }
}

function deleteSong() {
    let id = +input.question('Enter id want delete');
    let menu = `Select 1 agree to delete, 2 don't?`;
    let choice = 0;
    do {
        console.log(menu);
        let choice = +input.question('Enter your choice');
        switch (choice) {
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
    let name = input.question('Enter name find: ');
    manageSong.findByName(name);
}

function removeAlbum() {
    let id = +input.question('Enter id song delete');
    console.log(listAlbum.remove(id));
    console.log(listAlbum.findAll());
}

function main() {
    let menu = `----Login----\n1.Login\n2.Register`
    console.log(menu);
    let choice;
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
    let menu = `----WellCome----`
    console.log(menu);
    let user = input.question("Enter user: ");
    let password = input.question("Enter password: ");
    idUser = +input.question("Enter idUser: ");
    let ac = new Account(user, password, idUser)
    if (manageAccount.checkAccount(user, password, idUser)) {
        start(ac);
    }
}

function register() {
    let menu = `----Register----`;
    console.log(menu);
    let user = input.question("Enter user: ");
    let password = input.question("Enter password: ");
    let idUser = input.question("Enter idUser: ");
    for (let i = 0; i < manageAccount.listAccount.length; i++) {
        if (manageAccount.listAccount[i].user == user) {
            console.log(` User account already exists`);
            register();
        } else if (manageAccount.listAccount[i].idUser == idUser) {
            console.log(`idUser already exists`);
            register();
        } else {
            let register = new Account(user, password, idUser);
            manageAccount.addAccount(register);
            login();
        }
    }
}

main();