//sorry anh :v hôm trước em nghỉ đoạn cuối giờ mà record lỗi nên em chưa biết đọc ghi file
var readlineSync = require('readline-sync');
let students = []

while (true) {
    showMenu();
}

function getAllStudents() {
    console.log(students);
}
//khum có vấn đề gì
function addStudent() {
    let id = Date.now();
    let studentName = readlineSync.question('Enter name:');
    let age = readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let score = readlineSync.question('Enter score: ');
    let medScore = readlineSync.question('Enter medium score: ');
    students.push({
        id: id,
        name: studentName,
        age: age,
        gender: gender,
        score: score,
        medScore: medScore
    })

}
//chạy được
function deleteOneStudent() {
    let delId = readlineSync.question('Enter Id you want to delete: ');
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === delId) {
            students.splice(i, 1);
        }
    }
}
//Error: khum thấy xóa
function delStudents() {
    var delId = readlineSync.question('Enter Id you want to delete (divide by "," and no space): ');
    let deleteId = delId.split(',');
    for (var i = 0; i < deleteId.length; i++) {
        for (let j = 0; j < students.length; j++) {
            if (students[i].id === deleteId[j]) {
                students.splice(i, 1);
            }
        }

    }
}
//Error: Không thay đổi dữ liệu
function editStudent() {
    var editId = readlineSync.question('Enter id you want to edit information: ');
    console.log("1. Name?");
    console.log("2. Gender?");
    var editInfor = readlineSync.question('Which information you wanna edit? Write it here: ');
    switch (editInfor) {
        case '1':
            var newInfor = readlineSync.question('New information: ');
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === editId) {
                    students[i].name = newInfor;
                }
            }
            break;

        default:
            var newInfor = readlineSync.question('New information: ');
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === editId) {
                    students[i].gender = newInfor;
                }
            }
            break;
    }
}
//chạy được
function findName() {
    var nameWannaFind = readlineSync.question('Who you want to find: ');
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === nameWannaFind) {
            console.log(students[i]);
        }
    }
}

function findBestStudent() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score = Math.max(students.score)) {
            console.log(students[i]);
        }
    }
}

function allBadStudents() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score < 4) {
            console.log(students[i]);
        }
    }
}

function sortAlphabet() {
    students.sort((a, b) => {
        let left = a.studentName;
        let right = b.studentName;
        return left === right ? 0 : left > right ? 1 : -1;
    });
    console.log(students);
}

function sortScore() {
    students.sort((a, b) => {
        let left = a.score;
        let right = b.score;
        return left === right ? 0 : left > right ? 1 : -1;
    });
}

function sortAge() {
    students.sort((a, b) => {
        let left = a.age;
        let right = b.age;
        return left === right ? 0 : left > right ? 1 : -1;
    });
}

function exit() {
    process.exit();
}

function showMenu() {
    
    console.log("1. Show all students");
    console.log("2. Add new student");
    console.log("3. Delete student");
    console.log("4. Delete more than 1 students");
    console.log("5. Edit profile");
    console.log("6. Find student");
    console.log("7. Find the student with highest score");
    console.log("8. Show all bad student");
    console.log("9. Sort students (alphabet)");
    console.log("10. Sort students (score)");
    console.log("11. Sort students (age)");
    console.log("12. Exit");

    let key = readlineSync.question('What do you want to do? Write it here: ');
    switch (key) {
        case '1':
            getAllStudents();
            break;
        case '2':
            addStudent();
            break;
        case '3':
            deleteOneStudent();
            break;
        case '4':
            delStudents();
            break;
        case '5':
            editStudent();
            break;
        case '6':
            findName();
            break;
        case '7':
            findBestStudent();
            break;
        case '8':
            allBadStudents();
            break;
        case '9':
            sortAlphabet();
            break;
        case '10':
            sortScore();
            break;
        case '11':
            sortAge();
            break;

        default:
            exit();
            break;
    }
}