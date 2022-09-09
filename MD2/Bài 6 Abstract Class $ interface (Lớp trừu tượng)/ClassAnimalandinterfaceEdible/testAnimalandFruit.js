"use strict";
exports.__esModule = true;
var Tiger_1 = require("./Tiger");
var Chicken_1 = require("./Chicken");
var Orange_1 = require("./Orange");
var Apple_1 = require("./Apple");
var animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (item) {
    console.log(item.makeSound());
    if (item instanceof Chicken_1.Chicken) {
        console.log(item.howtoEat());
    }
});
console.log('****Fruit****');
var fruit = [];
fruit[0] = new Orange_1.Orange();
fruit[1] = new Apple_1.Apple();
fruit.forEach(function (item) {
    console.log(item.howtoEat());
});
