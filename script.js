const passwordField = document.getElementById("password");
const copyButton = document.getElementById("copy-btn");
const generateButton = document.getElementById("generate-btn");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const ambiguousCheckbox = document.getElementById("ambiguous");
const lengthInput = document.getElementById("length");

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+[]{}<>?/|";
const AMBIGUOUS = "{}[]()/\\'\"`~,;:.<>";

function generatePassword() {
  let length = parseInt(lengthInput.value);
  let charset = "";

  if (uppercaseCheckbox.checked) charset += UPPERCASE;
  if (lowercaseCheckbox.checked) charset += LOWERCASE;
  if (numbersCheckbox.checked) charset += NUMBERS;
  if (symbolsCheckbox.checked) charset += SYMBOLS;

  if (ambiguousCheckbox.checked) {
    charset = charset
      .split("")
      .filter((char) => !AMBIGUOUS.includes(char))
      .join("");
  }

  if (!charset) {
    passwordField.value = "Select at least ONE option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  passwordField.value = password;
}

generateButton.addEventListener("click", generatePassword);

copyButton.addEventListener("click", () => {
  if (
    passwordField.value &&
    passwordField.value !== "Select at least one option"
  ) {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
  }
});
