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

const foodChoices = document.getElementById("foodChoices");
const foodIntro = document.getElementById("foodIntro");

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
FOOD OPTIONS
----------------------------- */

const foodOptions = {

Aperitivo: [
{
name: "Cocktails & Mocktails",
icon: "🍹",
description: "Pretty drinks & something refreshing"
},
{
name: "Charcuterie",
icon: "🧀",
description: "Cheese, meats & little treats"
},
{
name: "Bruschetta",
icon: "🍅",
description: "Crispy bread & delicious toppings"
},
{
name: "Small Bites",
icon: "🥨",
description: "A little bit of everything"
},
{
name: "Something Sweet",
icon: "🍰",
description: "Because dessert is important"
},
{
name: "Surprise Me",
icon: "🎁",
description: "You choose, I trust you 💕"
}
],

Dinner: [
{
name: "Italian",
icon: "🍝",
description: "Pizza, pasta & everything yummy"
},
{
name: "Sushi",
icon: "🍣",
description: "Little rolls & delicious bites"
},
{
name: "Asian",
icon: "🍜",
description: "Noodles, rice & tasty flavours"
},
{
name: "Burgers",
icon: "🍔",
description: "Something deliciously messy"
},
{
name: "Steak",
icon: "🥩",
description: "A proper dinner together"
},
{
name: "Surprise Me",
icon: "🎁",
description: "You choose, I trust you 💕"
}
],

Lunch: [
{
name: "Café Food",
icon: "☕",
description: "Something cozy & relaxed"
},
{
name: "Pasta",
icon: "🍝",
description: "A delicious little pasta date"
},
{
name: "Sandwiches",
icon: "🥪",
description: "Simple, tasty & easy"
},
{
name: "Salad",
icon: "🥗",
description: "Something fresh & yummy"
},
{
name: "Asian",
icon: "🍜",
description: "Noodles, rice & tasty flavours"
},
{
name: "Surprise Me",
icon: "🎁",
description: "You choose, I trust you 💕"
}
],

Picnic: [
{
name: "Sandwiches",
icon: "🥪",
description: "Perfect picnic food"
},
{
name: "Fruit & Berries",
icon: "🍓",
description: "Fresh, sweet & juicy"
},
{
name: "Cheese & Crackers",
icon: "🧀",
description: "A little picnic classic"
},
{
name: "Pastries",
icon: "🥐",
description: "Croissants & yummy treats"
},
{
name: "Sweet Treats",
icon: "🍪",
description: "Cookies, cake & more"
},
{
name: "Surprise Me",
icon: "🎁",
description: "You choose, I trust you 💕"
}
]

};

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

/* -----------------------------
CREATE FOOD OPTIONS
----------------------------- */

function loadFoodOptions(type) {

foodChoices.innerHTML = "";

chosenFood = "";

selectedFood.textContent = "";

finishBtn.classList.add("hidden");

const options = foodOptions[type];

if (!options) {
return;
}

/* Change the little introduction depending
on the type of date */

const introductions = {

Aperitivo:
  "Now let's decide what little treats we should have with our drinks 🍹",

Dinner:
  "Okay baby, what are we having for dinner? 🍝",

Lunch:
  "What sounds yummy for our little lunch date? 🥰",

Picnic:
  "Now we need to fill our little picnic basket 🧺"

};

foodIntro.textContent =
introductions[type] ||
"Pick something that sounds delicious to you 💗";

/* Create the buttons */

options.forEach(option => {

const button = document.createElement("button");

button.className = "choice-card";

button.dataset.food = option.name;

button.innerHTML = `
  <span class="choice-icon">${option.icon}</span>
  <strong>${option.name}</strong>
  <small>${option.description}</small>
`;


button.addEventListener("click", () => {

  /* Remove selection from other food choices */

  foodChoices.querySelectorAll(".choice-card").forEach(b => {
    b.classList.remove("selected-choice");
  });


  /* Select this one */

  button.classList.add("selected-choice");

  chosenFood = option.name;


  /* Personalized response */

  if (option.name === "Surprise Me") {

    selectedFood.textContent =
      "Ooooh, keeping it a surprise? I like that. 👀💗";

  } else {

    selectedFood.textContent =
      `${option.name}? Yummm, I'm already hungry. 🥰`;

  }


  finishBtn.classList.remove("hidden");

});


foodChoices.appendChild(button);

});

}

/* -----------------------------
CONTINUE TO FOOD
----------------------------- */

typeContinue.addEventListener("click", () => {

if (!chosenType) {
return;
}

loadFoodOptions(chosenType);

showStep(4);

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

finalTime.textContent =
date.toLocaleTimeString([], {
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
