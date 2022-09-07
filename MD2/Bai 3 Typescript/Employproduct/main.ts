import {Staff} from "./employyProduct";
import {StaffManager} from "./Listproduct";

function main(){
    let staff = new Staff(123,"vu","male","11/12/1994","fly@gmail.com",4312);
    let staff2 = new Staff(1243,"vu1","male","10/12/1994","fly@gmail1.com",43121);
    let staff3 = new Staff(12233,"vu2","male","15/12/1994","fly@gmail2.com",4312123);

    let staffManager:StaffManager = new StaffManager();

    staffManager.addStaff(staff);
    staffManager.addStaff(staff2);
    staffManager.addStaff(staff3);

    staffManager.show();

    staffManager.deleteStaff(1243);

    staffManager.show();
}
main();