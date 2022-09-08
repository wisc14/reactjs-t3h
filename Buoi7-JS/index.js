

//cách khai báo biến trong js
// var a = 10; //cách khai báo biến ngày xưa của js
//có thể tiếp tục khai báo đè giá trị
// var a = 50;
// let b = 20; //Không thể khai báo đè giá trị, nếu không sẽ báo lỗi
// //Vd let b = 50; --> lỗi
// const c = 30;// Không thể ghi đè giá trị
// //Dành cho biến không thể thay đổi giá trị xuyên suốt
// console.log(a,b,c);

//String đặt trong nháy đôi hoặc kép
//Boolean : true or false
let name = 'Hung';
//Đối tượng
let car = {
    color: 'red',
    price: 100000,
    maxSpeed: 500,
    isPay: false,
} // kiểu object
function getNumber() {
    return 500
} //Kiểu function
console.log(getNumber());
// kiểu undifined
console.log(typeof name);

//camelCase: đặt tên cho biến vd: nameProduct, conNguoi
// tên class viết hoa các chữ cái đầu của các từ

//Các toán tử trong Js: + - * /
// 3 dấu bằng : === so sánh được cả string ( không phân biệt kiểu loại)
//pt bac 2: ax^2 + bx + c = 0
let a = 5;
let b = 6;
let c = -10;
let delta = b * b - 4 * a * c;
if (delta > 0){
    let x1 = -b + Math.sqrt(delta) / (2 * a);
    let x2 = -b - (Math.sqrt(delta) / (2 * a));
    console.log(x1, x2);
}
else if (delta == 0){
    let x = -b / (2 * a);
    console.log(x);
}   else {
    console.log("pt co nghiem phuc");
}
