// function aaa(a:number,b:string): string{
//     return a+b
// }
// console.log(aaa(1,"2"))
// Giải PTB1 ax+b=0
var isTest = /** @class */ (function () {
    function isTest(a, b) {
        this.a = a;
        this.b = b;
    }
    isTest.prototype.root = function () {
        if (this.a == 0) {
            if (this.b == 0) {
                return "phuong trinh vo so nghiem";
            }
            else {
                return "phuong trinh vo nghiem";
            }
        }
        else {
            var nghiem = -this.b / this.a;
            return nghiem + " ";
        }
    };
    return isTest;
}());
var ptb1 = new isTest(10, 2);
console.log(ptb1.root());
