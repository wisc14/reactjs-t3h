

//cách khai báo biến trong js
var a = 10; //cách khai báo biến ngày xưa của js
//có thể tiếp tục khai báo đè giá trị
var a = 50;
let b = 20; //Không thể khai báo đè giá trị, nếu không sẽ báo lỗi
//Vd let b = 50; --> lỗi
const c = 30;// Không thể ghi đè giá trị
//Dành cho biến không thể thay đổi giá trị xuyên suốt
console.log(a,b,c);

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