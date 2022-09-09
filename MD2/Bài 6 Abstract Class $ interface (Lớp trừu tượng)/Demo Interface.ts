// interface Os {
//     name:string;
//     language:string;
// }
// let OperatingSystem = (type:Os):void => {
//     console.log(`ios ${type.name} has ${type.language} language.`);
// };
// let Oreo = {name:"O",language:"IOS"}
// OperatingSystem(Oreo);
//
//

// // Kế thừa interface
// interface Person {
//     name:string
// }
// interface PersonDetail {
//     age:number
//     gender:string
// }
// interface Employee extends Person, PersonDetail {
//     empCode:number
// }
// let empObject = {};
// empObject.name = "Abhishek"
// empObject.age = 25
// empObject.gender = "Male"
// empObject.empCode = 43
//
// console.log("Name: "+empObject.name);
// console.log("Employee Code: "+empObject.empCode);
//
// // name:'Abhishek',
// //     age:25,
// //     gender:'Male',
// //     empCode: 43


// defining interface for class
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    FullName();
    GetAge();
}
// implementing the interface
class Employee implements Person {
    firstName: string;
    lastName: string;
    age:number;
    FullName() {
        return this.firstName + ' ' + this.lastName;
    }
    GetAge() {
        return this.age;
    }
    constructor(firstN: string, lastN: string, getAge: number) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = getAge;
    }
}
// using the class that implements interface
let myEmployee = new Employee('Abhishek', 'Mishra', 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log("Name of Person: " +fullName + '\nAge: ' + Age);