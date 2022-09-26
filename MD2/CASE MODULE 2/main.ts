import {ManageAlbum} from "./Service/ManageAlbum";
import {Album} from "./Model/album";
import {Song} from "./Model/Song";

let listSong: Album = new Album(1, "a");
let listAlbum: ManageAlbum = new ManageAlbum();
let album1 = new Album(1, "playlist1");
let album2 = new Album(2, "playlist2");
let album3 = new Album(3, "playlist3");
listAlbum.add(album1);
listAlbum.add(album2);
listAlbum.add(album3);
let input = require('readline-sync');

function start() {
    let menu = `----Library Music----\n1.Add Album\n2.Show Album\n3.Delete Album\n0.Exit`
    let choice;
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

        }

    } while (choice != 0);

    function addAlbum() {
        let menu = `----Add Album----`;
        console.log(menu);
        let id = +input.question("Enter ID Album:\n");
        let name = input.question("Enter Name Album:\n");
        let album: Album = new Album(id, name);
        listAlbum.add(album);
    }

    function showAlbum() {
        // console.log(listAlbum.findAll());
        let playList = listAlbum.findAll();
        for (let i = 0; i < playList.length; i++) {
            console.log(`${i + 1}--ID:${playList[i].id},Name: ${playList[i].name}`)
        }
        console.log('0.Exit');
        let choice = +input.question('Enter Your Select');
        if (choice == 0) {
            start();
        } else {
            let album: Album = listAlbum.findByIndex(choice - 1);
            menuAlbum(album,choice);
        }
    }
}

function menuAlbum(album: Album,idAlbum:number) {
    let menu = `---Menu Song---\n1.Add Song\n2.Show Song\n3.Delete Song\n4.Find Song\n0.Back`
    let choice;
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
        }
    } while (choice != 0)
}

function addSong(album: Album) {
    let id: number = +input.question('Enter id of song');
    let name: string = input.question('Enter name of song');
    let artist: string = input.question('Enter artist of song')
    let composers: string = input.question('Enter composers of song');
    let song: Song = new Song(id, name, artist, composers);
    album.add(song);
}

function showSong(album: Album) {
    for (let i = 0; i < album.listSong.length; i++) {
        console.log(`${i + 1}-ID:${album.listSong[i].id}, Name: ${album.listSong[i].name}, Artist: ${album.listSong[i].artist}, Composers: ${album.listSong[i].composers}`)
    }
}
function deleteSong(idAlbum:number) {
    let idSong = +input.question('Enter id song')
    let menu = `Select 1 agree to delete, 2 don't?`;
    let choice;
    do{
        console.log(menu);
        let choice = +input.question('Enter your choice');
        switch (choice){
            case 1:
                let indexMuonXoa = listAlbum.albumList[idAlbum-1].listSong.findIndex(e=>e.id == idSong);
                listAlbum.albumList[idAlbum-1].listSong.splice(indexMuonXoa,1);
                listAlbum.albumList[idAlbum-1].listSong.forEach(e=>{
                    console.log(e);
                })
                break;
            case 2:
                // @ts-ignore
                menuAlbum();
                break;

        }

    }while (choice!=0);
    // console.log(index)
    // console.log(listAlbum.albumList[index])
    // console.log(listAlbum.albumList[index].remove(id));
    // listAlbum.albumList.forEach(e=>{
    //     e.listSong
    // })
    // console.log(listAlbum.albumList.);

}

function removeAlbum() {
    let id = +input.question('Enter id song delete');
    console.log(listAlbum.remove(id));
}

function main() {
    start();
}

main();