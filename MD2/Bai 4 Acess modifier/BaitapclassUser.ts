class User {
    private _name: string;
    private _email: string;
    private _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    getInfo(): string {
        return `User: ${this._name}, Email: ${this._email}, Role: ${this.isAdmin()}`
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: number) {
        this._role = value;
    }

    isAdmin(): string {
        if (this._role == 1) {
            return `Admin`;
        } else if (this._role == 2) {
            return `User`
        }
    }
}

let user = new User("vu", "vu@gmail.com", 1);
let user1 = new User("vu11", "vu11@gmail.com", 2);
console.log(user.getInfo());
console.log(user1.getInfo());
