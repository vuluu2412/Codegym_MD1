class Shape {
    color : string 
    filled : boolean
    constructor (  color : string , filled : boolean  ){

    } // dung hon la ghi lai =)) copy la no k
}
// loi gi the anh :D 
class Circle {
    color: string

    radius : number

    filled: boolean
    constructor(radius: number,
                color: string,
                filled: boolean) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter(): number {
        return 2 * this.radius * Math.PI;
    }
}
let circle = new Circle(3.5, "indigo", false); // cai loi nay la e co 2 thang let circle nen no bao la declare


console.log(circle);

class Rectangle { // cai : chi duoc su trong TS thôi
    width: number;
    length: number;
    color: string;
    filled: boolean;
    constructor(width: number,
                length: number,
                color: string,
                filled: boolean) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    getArea(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.length);
    }
}

class Square {
    color: string;
    filled: boolean
    side: number
    constructor(color: string,
                filled: boolean,
                side: number) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}

let shape = new Shape("red", false); // e doc loi nay no ghi la expected 0 aru co nghia la trong thang Shape cua e phan constructor no k co tham so nhung e lai truyen 2 thang nen no ghi la but got 2 oke anh


console.log(shape);


let circle1 = new Circle(3.5, "indigo", false); // hoac la thay ten thang nay la xong

console.log(circle);


let rectangle = new Rectangle(2.5, 3.8, "orange", true);


console.log(rectangle);


let square = new Square("yellow", true, 5.8);


console.log(square);