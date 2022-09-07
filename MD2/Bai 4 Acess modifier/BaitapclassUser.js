var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    User.prototype.getInfo = function () {
        return "User: ".concat(this._name, ", Email: ").concat(this._email, ", Role: ").concat(this.isAdmin());
    };
    Object.defineProperty(User.prototype, "name", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.isAdmin = function () {
        if (this._role == 1) {
            return "Admin";
        }
        else if (this._role == 2) {
            return "User";
        }
    };
    return User;
}());
var user = new User("vu", "vu@gmail.com", 1);
var user1 = new User("vu11", "vu11@gmail.com", 2);
console.log(user.getInfo());
console.log(user1.getInfo());
