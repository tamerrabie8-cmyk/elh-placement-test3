// =========================
// English Learning Hub
// Placement Test System
// =========================

// 45 Minutes Timer
let totalTime = 45 * 60;

const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {

let minutes = Math.floor(totalTime / 60);
let seconds = totalTime % 60;

timerElement.innerHTML =
`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

totalTime--;

if (totalTime < 0) {
clearInterval(countdown);
alert("Time is over. Your test will be submitted automatically.");
calculateResult();
}

}, 1000);


// =========================
// Calculate Result
// =========================

function calculateResult() {

const studentName =
document.getElementById("studentName").value;

const studentEmail =
document.getElementById("studentEmail").value;

const educationLevel =
document.getElementById("educationLevel").value;

if (
studentName.trim() === "" ||
studentEmail.trim() === "" ||
educationLevel.trim() === ""
) {
alert("Please complete your information first.");
return;
}

let score = 0;

const checkedAnswers =
document.querySelectorAll(
'input[type="radio"]:checked'
);

checkedAnswers.forEach(answer => {
score += Number(answer.value);
});


// Convert score to percentage
let percentage = Math.round((score / 16) * 100);

// Determine level

let level = "";

if (percentage <= 20) {
level = "A1 Beginner";
}
else if (percentage <= 40) {
level = "A2 Elementary";
}
else if (percentage <= 60) {
level = "B1 Intermediate";
}
else if (percentage <= 80)
