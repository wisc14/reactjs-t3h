            // tính tổng từ 1 đến n
// let i=1;
// let tong = 0;
// while (i<=10) {
//     tong +=i;
//     i++;
// }
// console.log('tong tu 1 den n: ', tong);

            // Bai0: Check SNT
// let n = 31;
// let flag = true;

// if (n < 2) {
//     flag = false;
// }
// for (let index = 2; index <= Math.sqrt(n) ; index++) {
//     if (n % index === 0) {
//         flag = false;
//         break;
//     }
//     else flag = true;
// }
// if (flag == false) {
//     console.log("khong phai snt");
// } else console.log("SNT");

                //Number và string
//convert to number: Number.parseFloat()/parseFloat(), Number.parseInt()/parseInt(), Number()

//Kiểm tra 1 số có phải là số hay không:
let number = '10.5';
// console.log(isNaN(number)); // có thể đảo ngược bằng cách để dấu ! ở đầu isNaN
//convert number;
// console.log(Number.parseInt(number));
// random số;
//trả về 1 số ngẫu nhiên trong khoảng từ 0-1
console.log(Math.ceil(6 * Math.random()));