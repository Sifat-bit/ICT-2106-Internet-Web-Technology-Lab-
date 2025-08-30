const output = document.getElementById("output");

// Basic Numbers
let x = 23, y = 12;
output.innerHTML += `Sum of x + y: <span class="highlight">${x + y}</span>\n`;

let a = 13, b = 16;
output.innerHTML += `Value of a: ${a}\n`;
output.innerHTML += `Value of b: ${b}\n`;

// Different types
let c = 14, d = 34.675;
let fullName = "Shaon Khan";
output.innerHTML += `Type of c: ${typeof c}\n`;
output.innerHTML += `Type of d: ${typeof d}\n`;
output.innerHTML += `Full Name: ${fullName}\n`;

// Type conversion
let age = 25;
age = age.toString();
output.innerHTML += `Age as string: ${age} (Type: ${typeof age})\n`;

let temp = "100";
temp = parseInt(temp);
output.innerHTML += `Temp as number: ${temp} (Type: ${typeof temp})\n`;

let r = 5.6;
output.innerHTML += `r as number: ${Number(r)}\n`;

let z = "9.7";
z = parseFloat(z);
output.innerHTML += `z as float: ${z}\n`;

let g = 1000.02;
output.innerHTML += `g.toFixed(2): ${g.toFixed(2)}\n`;
output.innerHTML += `g.toPrecision(3): ${g.toPrecision(3)}\n`;

// User input numbers
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN(num2)) {
    output.innerHTML += "Invalid input! Please enter valid numbers.\n";
} else {
    output.innerHTML += `Addition: ${num1 + num2}\n`;
    output.innerHTML += `Subtraction: ${num1 - num2}\n`;
    output.innerHTML += `Multiplication: ${num1 * num2}\n`;
    output.innerHTML += `Division: ${num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero'}\n`;

    output.innerHTML += `Area of Rectangle: ${num1 * num2}\n`;

    let celsius = (num1 - 32) * 5 / 9;
    output.innerHTML += `Celsius: ${celsius.toFixed(2)}\n`;
}
