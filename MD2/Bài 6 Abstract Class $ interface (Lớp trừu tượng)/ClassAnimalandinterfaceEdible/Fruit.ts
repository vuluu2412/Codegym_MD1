import {Edible} from "./Edible";

export abstract class Fruit implements Edible{
    abstract howtoEat(): string;
}