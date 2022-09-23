let sdt= ["0972201167", "0794052099", "0915081776"];
let viettel = []
let mobifone = []
let vinaphone = []
sdt.forEach((item) => {
    if (item.substring(0, 3) == "097" || item.substring(0, 3) == "098") {
        viettel.push(item);
    } else if (item.substring(0, 3) == "079" || item.substring(0, 3) == "090") {
        mobifone.push(item);
    } else if (item.substring(0, 3) == "091" || item.substring(0, 3) == "099") {
        vinaphone.push(item)

    }
})

console.log(`viettel: ${viettel}`);
console.log(`mobi: ${mobifone}`);
console.log(`vina: ${vinaphone}`);