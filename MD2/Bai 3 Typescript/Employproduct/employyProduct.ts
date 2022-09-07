export class Staff {
    private _id: number;
    private _name: string;
    private _sex: string;
    private _dob: string;
    private _email: string;
    private _phone: number;

    constructor(id: number, name: string, sex: string, dob: string, email: string, phone: number) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._dob = dob;
        this._email = email;
        this._phone = phone;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }

    get dob(): string {
        return this._dob;
    }

    set dob(value: string) {
        this._dob = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): number {
        return this._phone;
    }

    set phone(value: number) {
        this._phone = value;
    }
}