import {Cadres} from "./Cadres";
import {CadresManager} from "./Cadres_Manager";
import {Worker} from "./Worker";
import {Engineer} from "./Engineer";
import {Staff} from "./Staff";


    let cadres = new Cadres("Vu",28,"male","SonLa");
    let cadres1 = new Cadres("Vu",28,"male","SonLa");
    let worker1 = new Worker("Minh",24,"female","SonLa",3);
    let engineer = new Engineer("Anh",27,"female","SonLa","construction");
    let staff1 = new Staff("Tung",28,"Male","SonLa","Accounting")

    let cadresManager:CadresManager= new CadresManager();

cadresManager.addCadres(cadres);
cadresManager.addCadres(cadres1);
cadresManager.addCadres(worker1);
cadresManager.addCadres(engineer);
cadresManager.addCadres(staff1);
cadresManager.findName("Hieu");
console.log(cadresManager.deleteName("Vu"));
cadresManager.editName("Vu","Hoang")
console.log(cadresManager.showInfo())




