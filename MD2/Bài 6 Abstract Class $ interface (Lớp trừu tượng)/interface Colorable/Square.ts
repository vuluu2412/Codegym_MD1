import {Rectangle} from "./Rectangle";
import {Colorable} from "./interfaceColorable";

export class Square extends Rectangle implements Colorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    howToColor(): string {
        return "Color all four sides"
    }
}

