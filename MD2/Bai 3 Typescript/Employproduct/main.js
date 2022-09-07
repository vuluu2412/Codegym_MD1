"use strict";
exports.__esModule = true;
var employyProduct_1 = require("./employyProduct");
var Listproduct_1 = require("./Listproduct");
function main() {
    var staff = new employyProduct_1.Staff(123, "vu", "male", "11/12/1994", "fly@gmail.com", 4312);
    var staff2 = new employyProduct_1.Staff(1243, "vu1", "male", "10/12/1994", "fly@gmail1.com", 43121);
    var staff3 = new employyProduct_1.Staff(12233, "vu2", "male", "15/12/1994", "fly@gmail2.com", 4312123);
    var staffManager = new Listproduct_1.StaffManager();
    staffManager.addStaff(staff);
    staffManager.addStaff(staff2);
    staffManager.addStaff(staff3);
    staffManager.show();
    staffManager.deleteStaff(1243);
    staffManager.show();
}
main();
