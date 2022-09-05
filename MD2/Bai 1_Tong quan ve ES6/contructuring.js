let names = ["Anh","Vu","Hieu","TAnh"];
let [firstName,,...secondName] = names;
console.log(firstName);
console.log(secondName);

const marks = {
    sec1:{abc:111,def:222},
    sec2:{abc:333,def:444}
};
const {sec1:{abc:abc1,def:def1}} = marks;
const {sec2:{abc:abc2,def:def2}} = marks;
console.log(abc1,def1);
console.log(abc2,def2);