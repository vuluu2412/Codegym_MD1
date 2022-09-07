var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = "green";
        this.radius = 20;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 10));
circleList.push(new Circle("green", 50));
circleList.push(new Circle("red", 15));
function showCircle(circle) {
    console.log("Hinh tron co mau ".concat(circle.color, ", ban kinh ").concat(circle.radius));
}
circleList.forEach(showCircle);
