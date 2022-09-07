enum Gender {Male, Female, Other
}
class Employee {
    name : string = "";
    gender : Gender = Gender.Other;
    bod: Date;
    email:string="";
    phone:string="";
    constructor(name:string,gender:Gender,bod:Date,email:string,phone:string) {
        this.name=name;
        this.gender=gender;
        this.bod=bod;
        this.email=email;
        this.phone=phone;
    }
}let employeeList: Employee[] = [];
employeeList.push(new Employee("Luu Hoang Vu",Gender.Male, new Date(11-12-1994),"fly.soso.high1@gmail.com","0967544650"));
employeeList.push(new Employee("Nguyen Phuong Thao Mi",Gender.Female, new Date(18-7-1995),"fly.soso.high1@gmail.com","0967544650"));
employeeList.push(new Employee("Luu Gia Han",Gender.Female, new Date(1-1-2019),"fly.soso.high1@gmail.com","0967544650"));
function showEmployee(employee:Employee){
    console.log(employee)
}
employeeList.forEach(showEmployee);