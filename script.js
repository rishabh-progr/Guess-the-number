const minNum = 1;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const keys = document.querySelectorAll(".key");
const display = document.getElementById("display");
const attemptsDisplay = document.getElementById("attempts");

let attempts = 0
let value = "";

keys.forEach((button) => {
    button.addEventListener("click", () => {
        const text = button.innerText;
        if (text === "AC") {
            value = "";
            display.innerText = value;
        }
        else if (text === "Submit") {
            attempts++;
            const guessedValue = Number(value);
            if (guessedValue == ans) {
                display.innerText = `Congratulations, You guess the number in ${attempts} attempts.`;
            }
            else if (guessedValue > ans && guessedValue - ans < 10) {
                display.innerText = "Close, But little high!";
            }
            else if (guessedValue > ans) {
                display.innerText = "High!";
            }
            else if (guessedValue < ans && ans - guessedValue < 10) {
                display.innerText = "Close, But little low!";
            }
            else {
                display.innerText = "Low!";
            }
            value = "";
        }
        else {
            value += text;
            display.innerText = value;
        }
        attemptsDisplay.innerText = "Attempt: " + attempts;
    })
})