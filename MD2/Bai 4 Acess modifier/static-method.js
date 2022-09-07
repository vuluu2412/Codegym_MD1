var Instructor = /** @class */ (function () {
    function Instructor(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? "vu" : _c, _d = _b.role, role = _d === void 0 ? "assistant" : _d;
        this.role = role;
        this.name = name;
    }
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, "-").concat(this.role));
    };
    Instructor.helloWorld = function () {
        console.log('Hi there');
    };
    Instructor.canTeach = function (instructor) {
        return (instructor.role === 'classroom');
    };
    return Instructor;
}());
var juniorInstructor = new Instructor({ "name": "vu" });
var seniorInstructor = new Instructor({ "name": "luu", "role": "classroom" });
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor.canTeach(juniorInstructor)));
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor.canTeach(seniorInstructor)));
