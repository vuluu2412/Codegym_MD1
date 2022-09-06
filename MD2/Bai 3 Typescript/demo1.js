// function paintShape (opts: PaintOptions){
//     let xPos = opts.xPos;
//     (property) PaintOptions.xPos?:number |undefined
//     let yPos= opts.yPos;
//     (property) PaintOptions.yPos?:number | undefined
// }

const person = {
    firstName:"Tom",
    lastName:"Hanks",
    sayHello:function() {  }  //Type template
}
person.sayHello = function() {
    console.log("hello "+person.firstName)
}
person.sayHello()

const person1 = {
    fname: "Luu",
    lname: "Vu"
};
const invokeperson = function (obj){
    console.log(`fname: ${obj.fname}`);
    console.log(`lname: ${obj.lname}`);
}
invokeperson(person1);
