
const para = document.querySelector('#paraId');
const addButton = document.querySelector('#addButton');
const removeButton = document.querySelector('#removeButton');


const outputSection = document.querySelector('#output-section');


function addStyle() {
    para.classList.add('para-style');
}

function removeStyle() {
    para.classList.remove('para-style');
}

function toggleStyle() {
    para.classList.toggle('para-style');
}


if (addButton) addButton.addEventListener('click', toggleStyle);
if (removeButton) removeButton.addEventListener('click', removeStyle);


function next() {
    location.href = "templates/next.html";
}

function back() {
    window.history.back();
}


function writeOutput(text) {
    const p = document.createElement('p');
    p.innerHTML = text;
    outputSection.appendChild(p);
}


const names = ['Hello', 'World', 'BD'];
names.forEach(name => writeOutput(name));


const person = { id: 1, name: "Shaon" };
for (let key in person) {
    writeOutput(`${key}: ${person[key]}`);
}


const numbers = [1, 2, 3, 4];
numbers.forEach(num => writeOutput(num));


const display = () => "Hello There";
writeOutput(display());


const add = (a, b) => a + b;
writeOutput("Add: " + add(1, 2));


const evenNumbers = numbers.filter(num => num % 2 === 0);
writeOutput("Even Numbers: " + evenNumbers.join(', '));


const squares = numbers.map(num => num * num);
writeOutput("Squares: " + squares.join(', '));
