const externalData = {
  x: 23,
  y: 12
};

function externalSum() {
  const result = externalData.x + externalData.y;
  document.getElementById("externalResult").textContent = `External JS Sum: ${result}`;
}

function calculateFormSum() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("formResult").textContent = "Please enter valid numbers.";
    return;
  }
  const sum = num1 + num2;
  document.getElementById("formResult").textContent = `Form JS Sum: ${sum}`;
}

function greetUser() {
  const name = prompt("Please enter your name:");
  if (name && name.trim() !== "") {
    document.getElementById("greetResult").textContent = `Hello, ${name}. Welcome to the demo page.`;
  } else {
    document.getElementById("greetResult").textContent = "No name entered.";
  }
}

document.getElementById("externalBtn").addEventListener("click", externalSum);
document.getElementById("formBtn").addEventListener("click", calculateFormSum);
document.getElementById("greetBtn").addEventListener("click", greetUser);
