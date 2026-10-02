const card = document.getElementById("card");
const success = document.getElementById("success");

const selectedDate = document.getElementById("selectedDate");
const selectedTime = document.getElementById("selectedTime");
const selectedType = document.getElementById("selectedType");
const selectedFood = document.getElementById("selectedFood");

const dateContinue = document.getElementById("dateContinue");
const timeContinue = document.getElementById("timeContinue");
const typeContinue = document.getElementById("typeContinue");
const finishBtn = document.getElementById("finishBtn");

const timeInput = document.getElementById("timeInput");
const chosenDateDisplay = document.getElementById("chosenDateDisplay");

const againBtn = document.getElementById("againBtn");

const finalDate = document.getElementById("finalDate");
const finalTime = document.getElementById("finalTime");
const finalType = document.getElementById("finalType");
const finalFood = document.getElementById("finalFood");

const hearts = document.querySelector(".hearts");

/* -----------------------------
STORED CHOICES
----------------------------- */

let chosenDate = "";
let chosenTime = "";
let chosenType = "";
let chosenFood = "";

/* -----------------------------
STEP HANDLING
----------------------------- */

function showStep(stepNumber) {

document.querySelectorAll(".step").forEach(step => {
step.classList.remove("active");
});

document.getElementById(step${stepNumber}).classList.add("active");

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

/* -----------------------------
STEP 1 — DATE
----------------------------- */

document.querySelectorAll(".date-option").forEach(button => {

button.addEventListener("click", () => {

document.querySelectorAll(".date-option").forEach(b => {
  b.classList.remove("selected-date");
});

button.classList.add("selected-date");

chosenDate = button.dataset.date;

const messages = [
  `Ooooh, ${chosenDate} sounds lovely. 💕`,
  `${chosenDate}? I think that's a pretty perfect choice. 💗`,
  `Awww, ${chosenDate} sounds wonderful. 🥰`,
  `Then ${chosenDate} it shall be! I'm already excited. ❤️`,
  `Yayyy, ${chosenDate}! I can't wait. 💕`
];

const randomIndex =
  Math.floor(Math.random() * messages.length);

selectedDate.textContent = messages[randomIndex];

dateContinue.classList.remove("hidden");

});

});

dateContinue.addEventListener("click", () => {

chosenDateDisplay.textContent = chosenDate;

showStep(2);

});

/* -----------------------------
STEP 2 — TIME
----------------------------- */

timeInput.addEventListener("change", () => {

chosenTime = timeInput.value;

if (!chosenTime) {
selectedTime.textContent = "";
return;
}

const [hours, minutes] = chosenTime.split(":");

const date = new Date();

date.setHours(hours);
date.setMinutes(minutes);

const formattedTime = date.toLocaleTimeString([], {
hour: "numeric",
minute: "2-digit"
});

selectedTime.textContent =
Perfect. ${formattedTime} sounds lovely. 💗;

});

timeContinue.addEventListener("click", () => {

chosenTime = timeInput.value;

if (!chosenTime) {
selectedTime.textContent =
"Pick a time first, baby 💕";
return;
}

showStep(3);

});

/* -----------------------------
STEP 3 — DATE TYPE
----------------------------- */

document.querySelectorAll("[data-type]").forEach(button => {

button.addEventListener("click", () => {

document.querySelectorAll("[data-type]").forEach(b => {
  b.classList.remove("selected-choice");
});

button.classList.add("selected-choice");

chosenType = button.dataset.type;

selectedType.textContent =
  `${chosenType}? That sounds perfect. 🥰`;

typeContinue.classList.remove("hidden");

});

});

typeContinue.addEventListener("click", () => {

if (!chosenType) {
return;
}

showStep(4);

});

/* -----------------------------
STEP 4 — FOOD
----------------------------- */

document.querySelectorAll("[data-food]").forEach(button => {

button.addEventListener("click", () => {

document.querySelectorAll("[data-food]").forEach(b => {
  b.classList.remove("selected-choice");
});

button.classList.add("selected-choice");

chosenFood = button.dataset.food;

if (chosenFood === "Surprise me") {

  selectedFood.textContent =
    "Ooooh, keeping it a surprise? I like that. 👀💗";

} else {

  selectedFood.textContent =
    `${chosenFood}? Yummm, I'm already hungry. 🥰`;

}

finishBtn.classList.remove("hidden");

});

});

/* -----------------------------
FINALIZE
----------------------------- */

finishBtn.addEventListener("click", () => {

if (!chosenFood) {
return;
}

finalDate.textContent = chosenDate;

const [hours, minutes] = chosenTime.split(":");

const date = new Date();

date.setHours(hours);
date.setMinutes(minutes);

finalTime.textContent = date.toLocaleTimeString([], {
hour: "numeric",
minute: "2-digit"
});

finalType.textContent = chosenType;
finalFood.textContent = chosenFood;

card.classList.add("hidden");
success.classList.remove("hidden");

burstHearts();

});

/* -----------------------------
GO BACK / CHANGE CHOICES
----------------------------- */

againBtn.addEventListener("click", () => {

success.classList.add("hidden");
card.classList.remove("hidden");

showStep(1);

});

/* -----------------------------
FLOATING HEARTS
----------------------------- */

function makeHeart() {

const heart = document.createElement("span");

heart.className = "heart";

heart.textContent =
Math.random() > .25 ? "♡" : "♥";

heart.style.left =
${Math.random() * 100}%;

heart.style.fontSize =
${14 + Math.random() * 20}px;

heart.style.animationDuration =
${5 + Math.random() * 5}s;

hearts.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 10000);

}

setInterval(makeHeart, 900);

/* -----------------------------
HEART BURST
----------------------------- */

function burstHearts() {

for (let i = 0; i < 25; i++) {

setTimeout(makeHeart, i * 60);

}

}
