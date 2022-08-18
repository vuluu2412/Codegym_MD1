let quanlysp = [
    ["Iphone 14 Pro Max", "50.000.000đ", "10"],
    ["Iphone 14 Pro", "40.000.000đ", "122"],
    ["Iphone 14 Max", "30.000.000đ", "132"]
];

function hienthiquanlysp(quanlysp) {
    let html = "";
    for (let i = 0; i < quanlysp.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += `${i + 1}`;
        html += "</td>";
        html += "<td>";
        html += quanlysp[i][0]
        html += "</td>";
        html += "<td>";
        html += quanlysp[i][1]
        html += "</td>";
        html += "<td>";
        html += quanlysp[i][2]
        html += "</td>";
        html += "<td>";
        html += `<button onclick = "xoasanpham(${i})">Delete</button>`
        html += "</td>";
        html += "<td>";
        html += `<button onclick = "suasanpham(${i})">Edit</button>`
        html += "</td>";
        html += "</tr>";
    }
    return html;

}

function hienthisanpham() {
    document.getElementById('listproducts').innerHTML = hienthiquanlysp(quanlysp);
}

hienthisanpham()

function themsanpham() {
    let name = document.getElementById("nhapsanpham").value;
    let price = document.getElementById("nhapgia").value;
    let amount = document.getElementById("nhapsoluong").value;
    let quanlysanpham = [name, price, amount];
    if (name && price && amount != "") {
        quanlysp.push(quanlysanpham);
    } else {
        alert('Bạn phải nhập đủ thông tin')
    }
    hienthisanpham()
    document.getElementById("nhapsanpham").value = "";
    document.getElementById("nhapgia").value = "";
    document.getElementById("nhapsoluong").value = "";
}

function xoasanpham(i) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        quanlysp.splice(i, 1);
        hienthisanpham()
    }
}

function suasanpham(i) {
    quanlysp[i][0] = prompt('Sửa tên');
    quanlysp[i][1] = prompt('Sửa giá');
    quanlysp[i][2] = prompt('Sửa số lượng');
    hienthisanpham();
}
