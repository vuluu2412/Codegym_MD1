import {ComparableCircle} from "./ComparableCircle";

let circle = [];
circle[0] = new ComparableCircle(10);
circle[1] = new ComparableCircle(20);
circle[2] = new ComparableCircle(30);
let result = circle[1].compareTo(circle[2]);
if (result==1){
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}