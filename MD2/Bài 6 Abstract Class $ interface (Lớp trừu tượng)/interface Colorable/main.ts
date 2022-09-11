import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let shapes = [];
shapes[0]=new Circle("Circle",5);
shapes[1]=new Cylinder("Cylinder",5,20);
shapes[2]=new Rectangle(6,5,"Rectangle");
shapes[3]=new Square("Square",10);
shapes.forEach(item=>{
    if (item instanceof Square){
        console.log(item.howToColor())
    } else {
        console.log(item.calculateArea())
    }
})