const out = document.getElementById("output");

let a = Number(prompt("Enter a number for conditional check, square & cube:"));
let b = Number(prompt("Enter another number to calculate area:"));
let nameCount = Number(prompt("How many names do you want to enter?"));

let names = [];
for (let i = 0; i < nameCount; i++) {
    names.push(prompt(`Enter name ${i + 1}:`));
}

let conditionOutput = (a > 10)
  ? ((a === 12) ? "A is equal to 12" : "A is greater than 10 but not equal to 12")
  : "A is less than or equal to 10";

out.innerHTML += `Conditional Check:\n<span class='red'>${conditionOutput}</span>\n\n`;

function cube(x) { return x * x * x; }
function multiply(x, y) { return x * y; }

function square(x) {
  out.innerHTML += `Square of ${x}: <span class='red'>${x*x}</span>\n`;
  out.innerHTML += `Cube of ${x}: <span class='red'>${cube(x)}</span>\n`;
}
square(a);

function area(x, y) {
  out.innerHTML += `Area (x * y): <span class='red'>${multiply(x, y)}</span>\n`;
}
area(a, b);

(function(x) {
  out.innerHTML += `IIFE Square: <span class='red'>${x*x}</span>\n`;
  out.innerHTML += `IIFE Cube: <span class='red'>${cube(x)}</span>\n`;
})(b);

out.innerHTML += `Names Entered: <span class='blue'>${names.join(", ")}</span>\n`;

let firstArray = names.slice(0, 3);
firstArray.push("NewName");
firstArray.pop();
firstArray.shift();
firstArray.unshift("AAA");
firstArray.splice(1, 1, "InsertedName");

out.innerHTML += `Modified Array: ${firstArray.join(", ")}\n\n`;

let array2D = [[1, 'A'], [3, 'B'], [4, 'C']];
out.innerHTML += `2D Array Elements:\n`;
for (let row of array2D) {
  out.innerHTML += row.join(" ") + "\n";
}

let v = [32, 45, 78];
v.sort();
out.innerHTML += `Sorted Array (Strings): ${v.join(", ")}\n`;

let d = [1230000000, 125499999, 12000000];
d.sort((x,y) => x - y);
out.innerHTML += `Sorted Array (Numbers): ${d.join(", ")}\n`;

let bNum = Number(prompt("Enter a number to convert to string:"));
let cStr = prompt("Enter a string:");
let vNum = Number(prompt("Enter a floating number:"));

out.innerHTML += `Type of bNum: ${typeof bNum}\n`;
out.innerHTML += `Type of cStr: ${typeof cStr}\n`;
out.innerHTML += `Type of vNum: ${typeof vNum}\n`;

let s = bNum.toString();
out.innerHTML += `Number to String: ${s} (Type: ${typeof s})\n`;

let xStr = parseFloat(prompt("Enter a numeric string to convert to number:"));
out.innerHTML += `String to Number: ${xStr} (Type: ${typeof xStr})\n`;

out.innerHTML += `Invalid Number Example: ${Number("ASDDDF")}\n`;
out.innerHTML += `vNum.toFixed(3): ${vNum.toFixed(3)}\n`;
out.innerHTML += `vNum.toPrecision(5): ${vNum.toPrecision(5)}\n`;
