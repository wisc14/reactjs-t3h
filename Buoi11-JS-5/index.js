//map: return new array
let arr= [1,2,3,4,5];

let arrMap = arr.map((item, index) =>{
    return item * 2;
})
console.log(arrMap);
//Biến đổi tất cả phần tử của array theo 1 điều kiện nào đó.

//filter: tìm kiếm
//return ra 1 array mới các kết quả thỏa mãn điều kiện

// let arrFilter = product.filter((item, index) =>{
    // return item.price > 6000; //với filter: return phải là 1 điều kiện so sánh
// });
//find, findIndex, findLastIndex tương tự như filter
//find: trả về phần tử đầu tiên
//findIndex: trả về index của phần tử đầu tiên thỏa mãn điều kiện
//

//reduce: tính toán dựa trên array - xử lí tính toán logic dựa trên array
let sum = arr.reduce((initItem, item)=>{
    return initItem + item;
}, 0);
//Viết tắt arr.reduce((a,b)=>a+b);
console.log(sum);