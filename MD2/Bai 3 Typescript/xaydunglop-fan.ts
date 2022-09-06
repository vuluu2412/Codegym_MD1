enum Speed {
    Slow = 1,
    Medium = 2,
    Fast = 3
}

class Fan {
    private _speed: number;
    private _on: boolean;
    private _radius: number;
    private _color: string;

    constructor(speed = Speed.Slow, on = false, radius = 5, color = "color") {
        this._speed = speed;
        this._on = on;
        this._radius = radius;
        this._color = color;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }

    get on(): boolean {
        return this._on;
    }

    set on(value: boolean) {
        this._on = value;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
    toString(){
        if (this._on) {
            return `Màu sắc: ${this._color}, Bán kính: ${this._radius}, fan is off`
        } else {
            return `Tốc độ quạt: ${this._speed}, Màu sắc: ${this._color}, Bán kính: ${this._radius}, fan is on`
        }
    }
}
const fan = new Fan()
const fan1 = new Fan(Speed.Fast,false,10,"yellow");
const fan2 = new Fan(Speed.Medium,true,5,"blue");
console.log(fan1.toString());
console.log(fan2.toString());