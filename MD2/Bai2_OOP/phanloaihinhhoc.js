class Shape {
    color:;
    filled:;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

class Circle {
    color:
    radius:
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
let circle = new Circle(3.5, "indigo", false);

console.log(circle);

class Rectangle {
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

let shape = new Shape("red", false);


console.log(shape);


let circle = new Circle(3.5, "indigo", false);


console.log(circle);


let rectangle = new Rectangle(2.5, 3.8, "orange", true);


console.log(rectangle);


let square = new Square("yellow", true, 5.8);


console.log(square);