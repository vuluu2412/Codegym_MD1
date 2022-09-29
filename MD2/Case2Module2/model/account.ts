export class Account{
    private _user:string;
    private _password:string;
    private _id:number;


    constructor(user: string, password: string, id?: number) {
        this._user = user;
        this._password = password;
        this._id = id;
    }

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}