// let curDate = new Date();
// let time = 16;
// if (time < 10) {
//     greeting = "Good morning";
// } else if (time < 20) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting);

// switch (new Date(5).getDay()) {
//     case 0:
//         day = "Chủ Nhật";
//         break;
//     case 1:
//         day = "Thứ hai";
//         break;
//     case 2:
//         day = "Thứ ba";
//         break;
//     case 3:
//         day = "Thứ tư";
//         break;
//     case 4:
//         day = "Thứ năm";
//         break;
//     case 5:
//         day = "Thứ sáu";
//         break;
//     case 6:
//         day = "Thứ bảy";
//         break;
// }
// document.write(day);
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.write(text);
