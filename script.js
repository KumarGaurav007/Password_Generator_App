const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*_+/";

const allChars = upperCase + lowerCase + number + symbol;

const passlength = document.getElementById("length");

function createPassword() {
    const length = passlength.value;
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
const genBtn = document.getElementById("gen-btn");
genBtn.addEventListener('click', createPassword);


function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

const copy = document.getElementById("copy");
copy.addEventListener('click', copyPassword)