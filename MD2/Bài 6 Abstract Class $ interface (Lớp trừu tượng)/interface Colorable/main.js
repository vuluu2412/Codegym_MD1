"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var shapes = [];
shapes[0] = new Circle_1.Circle("Circle", 5);
shapes[1] = new Cylinder_1.Cylinder("Cylinder", 5, 20);
shapes[2] = new Rectangle_1.Rectangle(6, 5, "Rectangle");
shapes[3] = new Square_1.Square("Square", 10);
shapes.forEach(function (item) {
    if (item instanceof Square_1.Square) {
        console.log(item.howToColor());
    }
    else {
        console.log(item.calculateArea());
    }
});
