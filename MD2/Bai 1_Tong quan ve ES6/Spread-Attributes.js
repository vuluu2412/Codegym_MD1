//Exam 1
const cars1 =["audi","bmw","tata","mercedes"];
const cars2 = [...cars1];
const cars3 = [...cars1,"Nissan","toyota"]
console.log(cars1);
console.log(cars2);
console.log(cars3);
//Exam2
const cars4 =["audi","bmw","tata","mercedes"];
const cars5 = ["nissan","toyota"];
const cars6 = [...cars4,...cars5];
console.log(cars6);
//Exam3+4 hợp nhất các đối tượng
const Human = {
    name: "Vu",
    age: '28',
    Gender: "male"
}
const Human1 = {
    weight: '60kg',
    height: '167cm'
};
const Human2 = {...Human,...Human1}
console.log(Human2);

//Exam5 chia chuỗi thành 1 mảng chuỗi
const Phone = "iphone";
const a = [...Phone];
console.log(a);

// Exam6 cấu trúc lại mảng
const numbers = [1,3,5,7,9];
const [n1,n2,n3,...others] = numbers;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(others);