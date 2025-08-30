
var student1 = {
    name: "Shaon",
    roll: 1001,
    year: "1st",
    courses: ["Mathematics", "Physics", "Computer Science"]
};

var student2 = {
    name: "Nahid",
    roll: 1002,
    year: "2nd",
    courses: ["English", "History", "Programming"]
};


document.writeln(`Name: ${student1.name}, Roll: ${student1.roll}, Year: ${student1.year}, Courses: ${student1.courses}<br>`);
document.writeln(`Name: ${student2.name}<br>Roll: ${student2.roll}<br>Year: ${student2.year}<br>Courses: ${student2.courses}<br>`);


function Student(name, age, roll, year, courses) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.year = year;
    this.courses = courses;

    this.display = function () {
        document.writeln(`<br>Name: ${this.name}<br>Age: ${this.age}<br>Roll: ${this.roll}<br>Year: ${this.year}<br>Courses: ${this.courses}`);
    };
}

var std = new Student("Tuhin", 21, 1003, "2nd", ["Data Structures", "Algorithms"]);
std.display();
document.writeln(`<br>The student has enrolled in <span class="highlight">${std.courses[1]}</span> this semester.`);


document.writeln(`<br><br>Math.sqrt(16) = ${Math.sqrt(16)}`);
document.writeln(`<br>Math.sin(0) = ${Math.sin(0)}`);
document.writeln(`<br>Math.pow(2,8) = ${Math.pow(2,8)}`);
document.writeln(`<br>Math.ceil(4.2) = ${Math.ceil(4.2)}`);
document.writeln(`<br>Math.ceil(-4.2) = ${Math.ceil(-4.2)}`);
document.writeln(`<br>Math.max(10, 25, 5, 30) = ${Math.max(10, 25, 5, 30)}`);
document.writeln(`<br>Math.round(5.67) = ${Math.round(5.67)}`);
document.writeln(`<br>Math.random() = ${Math.random()}`);
document.writeln(`<br>Random number (1-10): ${Math.floor(Math.random()*10 + 1)}`);


var date = new Date();
document.writeln(`<br><br>Current Year: ${date.getFullYear()}`);
document.writeln(`<br>Timezone offset: ${date.getTimezoneOffset()}`);
document.writeln(`<br>Time in ms since 1970: ${date.getTime()}`);
document.writeln(`<br>Current Hour: ${date.getHours()}`);
document.writeln(`<br>Day of the week: ${date.getDay()}`);

var pastDate = new Date("2020-10-03");
document.writeln(`<br>Day of 2020-10-03: ${pastDate.getDay()}`);


var headerText = document.getElementById("header3").innerText;
document.writeln(`<br><span class="highlight">${headerText}</span>`);


document.getElementById("header3").innerHTML = "Welcome to Shaon & Nahid Portal";


var headClass = document.getElementsByClassName("head")[0];
headClass.innerHTML = "<span style='color:green;'>Detailed student info displayed here</span>";


var h3Tags = document.getElementsByTagName("h3");
for (var i = 0; i < h3Tags.length; i++) {
    document.writeln(`<br>${h3Tags[i].innerHTML}`);
}
h3Tags[0].innerHTML = "Updated Header Example 1";


var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = `<span style='color:blue;'>${paragraphs[i].innerHTML}</span>`;
}


function Stud(name, age, roll) {
    this.name = name;
    this.age = age;
    this.roll = roll;
    this.display = function () {
        document.writeln(`<br><span style='color:purple;'>Name: ${this.name}<br>Age: ${this.age}<br>Roll: ${this.roll}</span>`);
    };
}

var std1 = new Stud("Shaon", 20, 1001);
var std2 = new Stud("Nahid", 21, 1002);
var std3 = new Stud("Mahi", 22, 1004);
var totalStudents = [std1, std2, std3];

for (var i = 0; i < totalStudents.length; i++) {
    totalStudents[i].display();
}


var text2 = document.querySelector('.header2');
document.writeln(`<br>${text2.innerText}`);

var text3 = document.querySelectorAll('.header2')[1];
document.writeln(`<br>${text3.innerText}`);

document.querySelector(".my-div a").innerHTML = "Contact Admin";
