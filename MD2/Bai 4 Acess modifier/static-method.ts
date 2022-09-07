class Instructor {
    name:string;
    role:string;
    constructor({name="vu",role = "assistant"}={}) {
        this.role = role;
        this.name = name;
    }
    renderDetails(){
        console.log(`${this.name}-${this.role}`);
    }
    static helloWorld (){
        console.log('Hi there');
    }
    static canTeach(instructor){
        return (instructor.role === 'classroom');
    }
}
let juniorInstructor = new Instructor({"name":"vu"});
let seniorInstructor = new Instructor({"name":"luu","role":"classroom"});
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);
console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);