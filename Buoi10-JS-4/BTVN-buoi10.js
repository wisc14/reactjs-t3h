// 24. Cho một mảng là một tập các số nguyên dương, 
// lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
function checkSNT(n) {
    let flag = true;

    if (n < 2) {
        flag = false;
    }
    for (let index = 2; index <= Math.sqrt(n); index++) {
        if (n % index === 0) {
            flag = false;
            break;
        }
        else flag = true;
    }
    if (flag == false) {
        return -1;
    } else return 1;
}
const locMang = (arr) => {
    let anotherArr = [];
    for (let index = 0; index < arr.length; index++) {
        if ( checkSNT(arr[index]) == 1 ) {
            anotherArr.push(arr[index]);
        }
    }
    console.log(anotherArr);
}
locMang([1, 2, 4, 5, 6, 7, 8, 23, 55])

let arrayT = [1, 2, 4, 5, 6, 7, 8, 23, 55]
let filterArr = arrayT.filter((item, index)=>{
    return checkSNT(item) === 1;
})
console.log(filterArr);
// 25. Cho một mảng là một tập các số nguyên dương, 
// hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
const mangBinhPhuong = (arr) =>{
    let squareArray = [];
    for (let index = 0; index < arr.length; index++) {
        squareArray.push(arr[index]*arr[index]);
    }
    console.log(squareArray);
}
mangBinhPhuong([1,2,3,4,5,6,7,8,9])
let array2 = [1,2,3,4,5,6,7,8,9];
let mapArray2 = array2.map((item, index) => {
    return item * item;
})
console.log(mapArray2);
// 26. Cho một mảng là một tập các số nguyên dương không trùng giá trị,
//  và một số k. Hãy tìm trong mảng phần có khoảng cách tử gần với k nhất.
//   Vì có thể có nhiều đáp án in ra tất cả vào một mảng.
const minus = (a,b) =>{
    return Math.abs(a-b);
}
const minRange = (arr,k) =>{
    let resultArray = [];
    let minmin = Math.abs(k - arr[0]);
    for (let index = 1; index < arr.length; index++) {
        if (minus(k,arr[index]) < minmin){
            minmin = minus(k,arr[index]);
        }
    }
    if (arr.indexOf(k-minmin) !== -1){
        resultArray.push(arr[arr.indexOf(k-minmin)])
    }
    if (arr.indexOf(k+minmin) !== -1){
        resultArray.push(arr[arr.indexOf(k+minmin)])
    }
    console.log(resultArray);
}
minRange([1,2,3,4,6,7],8)

//Bai27

let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
const normalizeName = (name) => {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
      if (i === 0 || name.charAt(i - 1) === ' ') {
        name =
          name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      }
    }
    return name;
  };
const nameSearching = (arr) =>{
    for (let index = 0; index < arr.length; index++) {
        arr[index].firstName = normalizeName(arr[index].firstName);
        arr[index].lastName = normalizeName(arr[index].lastName);
        if (arr[index].firstName.length >=3 && arr[index].firstName.indexOf('a') !== -1){
            console.log(arr[index]);
        }
    }
}
nameSearching(students);

//Bai28
const lastNameSearching = (arr) =>{

    for (let index = 0; index < arr.length; index++) {
        arr[index].firstName = normalizeName(arr[index].firstName);
        arr[index].lastName = normalizeName(arr[index].lastName);
        if (arr[index].lastName.slice(0,2) == "Do" ){
            console.log(arr[index]);
        }
    }
}
lastNameSearching(students)

//Bai29
const firstNameSort = (arr) =>{
    arr.sort((a, b) => {
        let left = a.firstName;
        let right = b.firstName;
        return left === right ? 0 : left > right ? 1 : -1;
      });
    console.log(arr);
}
firstNameSort(students)