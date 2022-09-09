abstract class Employee {

    constructor(private _firstname:string, private _lastname:string) {
    }
    abstract getSalary():number


    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }
    get fullName():string{
        return `${this._firstname} ${this._lastname}`;
    }
    compenstationStatement():string{
        return `${this.fullName} make ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends Employee{

    constructor(firstname: string, lastname: string, private salary:number) {
        super(firstname, lastname);
    }
    getSalary(): number {
        return this.salary;
    }
}
class Contractor extends  Employee{

    constructor(firstname: string, lastname: string, private rate:number,private  hours:number) {
        super(firstname, lastname);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
let john= new FullTimeEmployee("John","Doe",12000);
let jane =new Contractor("Jane","Doe",100,160);
console.log(john.compenstationStatement());
console.log(jane.compenstationStatement());