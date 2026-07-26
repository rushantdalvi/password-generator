const result = document.getElementById("result");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

// Copy password
clipboard.addEventListener("click", () => {
    if (!result.innerText) return;

    navigator.clipboard.writeText(result.innerText);
    alert("Password copied!");
});

// Generate password
generate.addEventListener("click", () => {
    result.innerText = createPassword();
});

function createPassword() {
    let chars = "";

    if (lowercase.checked) chars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numbers.checked) chars += "0123456789";
    if (symbols.checked) chars += "!@#$%^&*(){}[]=<>/,.";

    if (chars === "") return "";

    let password = "";

    for (let i = 0; i < length.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}
