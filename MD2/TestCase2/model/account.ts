export class Account{
    private _user:string;
    private _password:string;
    _idUser:number;


    constructor(user: string, password: string, idUser: number) {
        this._user = user;
        this._password = password;
        this._idUser = idUser;
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

    get idUser(): number {
        return this._idUser;
    }

    set idUser(value: number) {
        this._idUser = value;
    }
}