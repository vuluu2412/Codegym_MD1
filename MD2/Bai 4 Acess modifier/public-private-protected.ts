class Person {
    private ssn: string;
    fName: string;
    private _lName: string;
    constructor(ssn:string,fName:string,lName:string) {
        this.ssn = ssn;
        this.fName = fName;
        this._lName = lName;
    }
    getFullName():string{
        return `${this.fName} ${this._lName}`
    }
    getName():string{
        return `${this._lName}`
    }

    get lName(): string {
        return this._lName;
    }

    set lName(value: string) {
        this._lName = value;
    }
}
let person = new Person("12345678","luu","vu");
console.log(person.getFullName());
console.log(person.fName);
console.log(person.getName());