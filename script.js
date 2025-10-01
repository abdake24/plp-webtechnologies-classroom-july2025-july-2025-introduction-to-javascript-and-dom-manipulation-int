// -----------------------------
// Part 1: Variables & Conditionals
// -----------------------------
let age = 20;
let accessMessage;

if (age >= 18) {
    accessMessage = "You are allowed to access this content.";
} else {
    accessMessage = "Sorry, you must be 18 or older.";
}

document.getElementById('variable-output').textContent = accessMessage;

// -----------------------------
// Part 2: Custom Functions
// -----------------------------

// Function 1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

// Function 2: Sum two numbers
function sumNumbers(a, b) {
    return a + b;
}

// Event listener for greet button
document.getElementById('greet-btn').addEventListener('click', function() {
    let greeting = greetUser("Abdurahman");
    document.getElementById('greet-output').textContent = greeting;
});

// -----------------------------
// Part 3: Loops
// -----------------------------

// Loop example 1: for loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// Loop example 2: while loop
let count = 1;
while (count <= 5) {
    console.log("While loop iteration:", count);
    count++;
}

// Display loop in HTML list
let loopList = document.getElementById('loop-list');
for (let i = 1; i <= 5; i++) {
    let li = document.createElement('li');
    li.textContent = `Item ${i}`;
    loopList.appendChild(li);
}

// -----------------------------
// Part 4: DOM Interactions
// -----------------------------

// Interaction 1: Button click updates paragraph
document.getElementById('submit-btn').addEventListener('click', function() {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput) {
        document.getElementById('dom-output').textContent = `Welcome, ${nameInput}!`;
    } else {
        document.getElementById('dom-output').textContent = "Please enter your name.";
    }
});

// Interaction 2: Change background color when mouse over greet button
document.getElementById('greet-btn').addEventListener('mouseover', function() {
    this.style.backgroundColor = "#333";
    this.style.color = "white";
});
document.getElementById('greet-btn').addEventListener('mouseout', function() {
    this.style.backgroundColor = "";
    this.style.color = "";
});

// Interaction 3: Update paragraph when typing in input field
document.getElementById('name-input').addEventListener('input', function() {
    document.getElementById('dom-output').textContent = `Typing: ${this.value}`;
});
