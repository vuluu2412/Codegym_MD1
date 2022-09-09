import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";
import {Orange} from "./Orange";
import {Apple} from "./Apple";
let animals = [];
animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach(item => {
    console.log(item.makeSound());
    if (item instanceof Chicken){
        console.log(item.howtoEat())
    }
})
console.log('****Fruit****');
let fruit = [];
fruit[0] = new Orange();
fruit[1] = new Apple();
fruit.forEach(item =>{
    console.log(item.howtoEat())
})