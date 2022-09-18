//Bai22;
function minMax(params) {
    console.log(Math.max(...params));
    console.log(Math.min(...params));
}
minMax([1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1])
let a = [1,2,3,4,1,1,1,1,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
//Bai23
function tanSuat(arr) {
    let max = 1;
    let index = arr[0];
    
    for (let j = 0; j < arr.length-1; j++) {
        let count = 1;
        for (let i = j+1; i < arr.length; i++) {
            if (arr[i] == arr[j]){
                count++;
                if (count > max) {
                    max = count;
                    index = arr[i];
                }
            }
        }
        
    }
    console.log(`Tan so xuat hien lon nhat la ${max} lan, gia tri: ${index}`);
}
tanSuat(a);