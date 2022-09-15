//Bai11
function DemKhoangTrang(chuoi) {
    let count = 0;
    for (let index = 0; index < chuoi.length; index++) {
        if (chuoi.charAt(index) === ' '){
            count++;
        }
    }
    return count;
}
console.log( DemKhoangTrang('  Hung '));
// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
// VD: “	Hello world   ”, output: “Helloworld”
const XoaKhoangTrang = (chuoi) => {
    chuoi = chuoi.trim();
    // console.log(chuoi.split(' ').join(''));
    // console.log( chuoi.replace( /\s+/g, '') );
    for (let index = 0; index < chuoi.length; index++) {
        if (chuoi.charAt(index-1) === ' ' || chuoi.charAt(index-1) === /\n/) {
            chuoi = chuoi.slice(0,index-1) + chuoi.slice(index);
        }
    } 
    console.log(chuoi);
}
XoaKhoangTrang(' Nguyen Manh Hung    ');

// 13. Hãy viết chương trình đảo ngược sau s.
// VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”
const DaoNguoc = (chuoi) =>{
    let result = '';
    for (let index = chuoi.length-1; index >=0; index--) {
        result = result + chuoi[index] ;
    }
    console.log(result);
    // console.log(chuoi.split("").reverse().join(""));
}
DaoNguoc("This is a beautiful day")

// 14. Nhập vào chuỗi s1 và s2, cho biết vị trí xuất hiện của chuỗi s2 trong s1.
// VD: s1: “This is a beautiful day”, s2: “is” => output: 2
const DemViTriXuatHien = (chuoi1, chuoi2) => {
    chuoi1 = chuoi1.trim();
    let count = chuoi1.indexOf(" " + chuoi2);
    if (count === -1) {
        console.log("Khum co");
    }
    else{
        let viTri = chuoi1.slice(0,count+1);
        console.log(DemKhoangTrang(viTri)+ 1);
    }
}
DemViTriXuatHien("This is a beautiful day", "is")

// 16. Viết chương trình lấy  id name của fb.
// VD:https://www.facebook.com/tung.nguyenthac.1/, output: “tung nguyenthac”
const IdName = (chuoi) => {
    let fb = "https://www.facebook.com/";
    let len = fb.length;
    chuoi = chuoi.slice(len);
    chuoi = chuoi.replaceAll(".", " ");
    chuoi = chuoi.replace("/", "");
    
    console.log(chuoi);
}
IdName("https://www.facebook.com/tung.nguyenthac.1/")

// 17.  Viết hàm số tính min, max của 3 số?
// VD: min(2,4,7) => output: 7

const max = (a,b,c) =>{
    let maxNum = a;
    if (maxNum-b < 0){
        maxNum = b ;  
    }
    if (maxNum -c < 0){
        maxNum =c;
    }
    console.log(maxNum);
}
max(5,2,3);

const min = (a,b,c) =>{
    let minNum = a;
    if (minNum-b > 0){
        minNum = b ;  
    }
    if (minNum -c > 0){
        minNum =c;
    }
    console.log(minNum);
}
min(2,5,1)