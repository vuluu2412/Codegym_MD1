var Shape = /** @class */ (function () {
    function Shape(color, filled) {
    } // dung hon la ghi lai =)) copy la no k
    return Shape;
}());
// loi gi the anh :D 
var Circle = /** @class */ (function () {
    function Circle(radius, color, filled) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
var circle = new Circle(3.5, "indigo", false); // cai loi nay la e co 2 thang let circle nen no bao la declare
console.log(circle);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, length, color, filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    return Rectangle;
}());
var Square = /** @class */ (function () {
    function Square(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    return Square;
}());
var shape = new Shape("red", false); // e doc loi nay no ghi la expected 0 aru co nghia la trong thang Shape cua e phan constructor no k co tham so nhung e lai truyen 2 thang nen no ghi la but got 2 oke anh
console.log(shape);
var circle1 = new Circle(3.5, "indigo", false); // hoac la thay ten thang nay la xong
console.log(circle);
var rectangle = new Rectangle(2.5, 3.8, "orange", true);
console.log(rectangle);
var square = new Square("yellow", true, 5.8);
console.log(square);
