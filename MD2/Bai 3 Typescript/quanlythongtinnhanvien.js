var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Other"] = 2] = "Other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, bod, email, phone) {
        this.name = "";
        this.gender = Gender.Other;
        this.email = "";
        this.phone = "";
        this.name = name;
        this.gender = gender;
        this.bod = bod;
        this.email = email;
        this.phone = phone;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Luu Hoang Vu", Gender.Male, new Date(11 - 12 - 1994), "fly.soso.high1@gmail.com", "0967544650"));
employeeList.push(new Employee("Nguyen Phuong Thao Mi", Gender.Female, new Date(18 - 7 - 1995), "fly.soso.high1@gmail.com", "0967544650"));
employeeList.push(new Employee("Luu Gia Han", Gender.Female, new Date(1 - 1 - 2019), "fly.soso.high1@gmail.com", "0967544650"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
