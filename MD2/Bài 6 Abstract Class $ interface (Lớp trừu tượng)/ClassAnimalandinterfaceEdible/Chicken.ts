import {Animal} from "./Animal";
import {Edible} from "./Edible";

export class Chicken extends Animal implements Edible{

    makeSound(): string {
        return "Chicken:chuck chuck!";
    }

    howtoEat(): string {
        return "Could be fired";
    }
}