//function: sub program: chương trình con: dùng để xử lý "1 việc" ( khuyến nghị clean code)
// Tác dụng: -code gọn, tái sử dụng được source code;
        //   -code clear hơn.

//Array, object

function checkSNT(n){
    let flag = true;

if (n < 2) {
    flag = false;
}
for (let index = 2; index <= Math.sqrt(n) ; index++) {
    if (n % index === 0) {
        flag = false;
        break;
    }
    else flag = true;
}
if (flag == false) {
    console.log("khong phai snt");
} else console.log("SNT");
}
checkSNT(13); //params: tham số truyền vào