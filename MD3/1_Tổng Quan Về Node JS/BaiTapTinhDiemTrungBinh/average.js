let student = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];
let sumMale = 0;
let sumFemale = 0;
let flag = 0;
let item = 0;
for (let i = 0; i <student.length ; i++) {
    if (student[i].gender === 'female') {
        sumFemale = sumFemale + student[i].point;
        flag++;
    } else {
        sumMale = sumMale + student[i].point;
        item++;
    }
}

console.log(`AvgMale is : ${sumMale/item}`);
console.log(`AvgFemale is : ${sumFemale/flag}`);
