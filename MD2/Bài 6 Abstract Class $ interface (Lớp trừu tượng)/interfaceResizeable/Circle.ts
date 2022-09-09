import {Shape} from "./Shape";
import {Resizeable} from "./interfaceresize";

export class Circle extends Shape implements Resizeable{
    radius: number;
    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(percent: number): number {
        return this.getRandom();
    }
    getRandom (){
        return Math.floor(Math.random()*100)/100
    }
}
