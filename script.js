// Get elements
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let form = document.querySelector("form");
let existing = document.getElementById("existng"); // Corrected ID

// Prevent form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();
});

// Function to check and display the "Login as existing user" button
function Display() {
    if (localStorage.getItem("username")) {
        existing.style.display = "block";
    }
}

// Function to handle login and storing credentials
function addData() {
    let userValue = username.value;
    let passValue = password.value;

    if (userValue && passValue) {
        alert("Logged in as " + userValue);

        if (checkbox.checked) {
            localStorage.setItem("username", userValue);
            localStorage.setItem("password", passValue);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    }
}

// Function to log in as an existing user
function show() {
    let savedUser = localStorage.getItem("username");
    if (savedUser) {
        alert("Logged in as " + savedUser);
    }
}


document.addEventListener("DOMContentLoaded", Display);

// Add event listeners
document.getElementById("submit").addEventListener("click", addData);
existing.addEventListener("click", show);
