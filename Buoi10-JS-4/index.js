let newArray = [];
// CRUD
newArray.push('Tung') //thêm phần tử vào cuối mảng
console.log(newArray);
newArray.push(12);
newArray.push(55);
newArray.push(23);
newArray.push(13);

console.log(newArray);
console.log(newArray.length);
let dataPush = newArray.push(56); // không thay đổi array ban đầu
let dataSpread = [...newArray, true]; // không thay đổi array ban đầu, trả về 1 array mới
console.log(dataPush);
console.log(dataSpread);
//Giá trị trả về của push (function) --> là độ dài của array
//tìm hiểu về 1 hàm bất kì của array
//- Có thay đổi array cũ hay không
//- Giá trị trả về là gì
let dataSpread2 = ['Hung', ...newArray];
console.log(dataSpread2); // dấu 3 chấm '...' được coi là clone array
//thêm dữ liệu vào đầu
newArray.unshift('data pop');
//xóa phần tử ở đầu:
newArray.shift()
console.log(newArray);
//push - thêm ở cuối - thay đổi mảng ban đầu - return độ dài mảng
//unshift - thêm ở đâu - thay đổi mảng ban đầu - return độ dài mảng
//shift - xóa ở đầu - thay đổi mảng ban đầu - return phần tử đã xóa
//pop - xóa cuối - thay đổi mảng ban đầu - return phần tử đã xóa


//sort
// sắp xếp theo bảng chữ cái



//function như 1 params: gọi là callback
let beast7 = [1,10,25,6,4,2];
beast7.sort((a,b) => a-b ); // bí thuật sắp xếp số >9;
console.log(beast7);

//Bí thuật sắp xếp chuỗi có dấu
let beast6 =[ 'Anh' , 'Yến', 'Bao', 'Đức', 'Em']
beast6.sort((a,b) => a.localeCompare(b));
console.log(beast6);

//Bí thuật object
//product.sort((a,b) => {
    //let left = a.name;
    //let right = b.name;
    //return left === right ? 0: left > right ? 1: -1; //Bí thuật rút gọn if/else if/else
//});

// tính reference của object. => clone object;
let obj1 = {
    name: 'hung',
    age: 21,
};

let obj2 = obj1; //Không tạo ra 1 ô nhớ mới. ( mỗi lần khai báo biến là gán giá trị cho ô nhớ)
console.log(obj2);
obj2.name = 'Tung'
console.log(obj2);
console.log(obj1);
// giá trị obj1 bị thay đổi theo khi thay đổi obj2.

//xử lý clone object; - sử dụng '...'
let obj3 = {...obj1}; //shallơ clone
obj3.name = 'Gia tri 3';
console.log(obj3);
console.log(obj1);

//deep clone (copy)
let obj4 = JSON.parse(JSON.stringify(obj1));
//JSON.parse(str) biến string thành object nếu str đã ở dạng obj
//JSON.stringify(obj) Biến object thành string;

//btvn 24,25,26,27,28,29.
