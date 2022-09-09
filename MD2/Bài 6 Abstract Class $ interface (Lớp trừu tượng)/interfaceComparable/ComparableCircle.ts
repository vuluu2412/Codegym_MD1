import {Circle} from "./classCircle";
import {Comparable} from "./Comparable";

export class ComparableCircle extends Circle implements Comparable {

    constructor(radius: number) {
        super(radius);
    }

    compareTo(o: ComparableCircle): number {
        if (this.radius> o.radius) return 1;
        else if (this.radius<o.radius) return -1;
        else return 1;
    }
}
