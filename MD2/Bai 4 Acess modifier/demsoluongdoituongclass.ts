class Application{
    private name:string;
    static count:number = 0;
    constructor(name:string) {
        this.name=name;
        Application.count++;
    }
}

console.log(Application.count);
let app1 = new Application("one");
console.log(Application.count);
let app2 = new Application("two");
console.log(Application.count)