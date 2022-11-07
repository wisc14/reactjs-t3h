// map, filter, find , reduce ...findIndex,
// Callback: là 1 function được truyền function khác như 1 tham số
// Callback: gắn liền với xử lý bất đồng bộ
// Đồng bộ là gì? ==> code chạy từ trên xuống dưới, từ trái qua phải

// function nauCom(cb) {
//     console.log('toi dang nau com');
//     cb();
// }
// const hereCb = () =>{
//     console.log('day la callback');
// }
// nauCom(hereCb);
// ****Bất đồng bộ trong Js ==>
// const demoBatDongBo = () => {
//     console.log('so 1');
//     setTimeout(() => {
//         console.log('so 2');
//     }, 1000);
//     console.log('so 3');
// }
//Những hàm xử lý mất thời gian => Js sẽ xếp vào hàng chờ để xử lý sau,
// ưu tiên xử lý những hàm mất thời gian trước
//( settimeout, đọc ghi file, lấy dl từ api..)
// demoBatDongBo();
// Xử lý bất đồng bộ là biến bất đồng bộ về đồng bộ
// -log('bat dau lay du lieu');
// - call lên sv lấy 1 số từ sv về
// - Sau khi lấy đưược số, x2 số đó lên
// ==> Sử dụng callback để xử lý bất đồng bộ

const callApi = (cb) => {
    console.log('Bat dau lay dl');
    setTimeout(()=>{
        let x = 5;
        console.log('Lay dl xong');
        cb(x);
    }, 3000);
}
callApi((params)=>{
    console.log('du lieu duoc x2 la', params*2);
});