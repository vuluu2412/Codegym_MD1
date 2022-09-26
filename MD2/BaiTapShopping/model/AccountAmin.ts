export class AccountAmin{
    private _user:string;
    private _password:string;

    constructor(user: string, password: string) {
        this._user = user;
        this._password = password;
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
}