```javascript
/* =========================
   ELEMENTS
========================= */

const card = document.getElementById("card");
const success = document.getElementById("success");

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const againBtn = document.getElementById("againBtn");

const backBtn = document.getElementById("backBtn");

const timeInput = document.getElementById("dateTime");
const timeNextBtn = document.getElementById("timeNextBtn");

const foodOptions = document.getElementById("foodOptions");

const summary = document.getElementById("summary");
const finalPlan = document.getElementById("finalPlan");

const successText = document.getElementById("successText");

const hearts = document.querySelector(".hearts");


/* =========================
   DATE INFORMATION
========================= */

let chosenDate = "";
let chosenTime = "";
let chosenType = "";
let chosenFood = "";

let currentStep = 1;


/* =========================
   FOOD OPTIONS
========================= */

const foods = {

  Aperitivo: [
    "🍹 Cocktails & small bites",
    "🧀 Cheese & charcuterie",
    "🥖 Bruschetta",
    "🍤 Seafood & wine",
    "🍸 Aperol Spritz & snacks",
    "🥂 Prosecco & antipasti"
  ],

  Dinner: [
    "🍝 Italian",
    "🍕 Pizza",
    "🍣 Sushi",
    "🥩 Steak",
    "🍔 Burgers",
    "🌮 Mexican"
  ],

  Lunch: [
    "🥗 Fresh & healthy",
    "🍝 Italian",
    "🥪 Sandwiches",
    "🍕 Pizza",
    "🍜 Asian",
    "🥞 Brunch"
  ],

  Picnic: [
    "🥪 Sandwiches",
    "🧀 Cheese & crackers",
    "🍓 Fruit & berries",
    "🥐 Pastries",
    "🍕 Pizza",
    "🍫 Snacks & chocolate"
  ]

};


/* =========================
   STEP MANAGEMENT
========================= */

function showStep(stepNumber) {

  document.querySelectorAll(".step").forEach(step => {
    step.classList.remove("active");
  });


  const steps = [
    "stepDate",
    "stepTime",
    "stepType",
    "stepFood",
    "stepFinal"
  ];


  const stepElement =
    document.getElementById(steps[stepNumber - 1]);


  if (stepElement) {
    stepElement.classList.add("active");
  }


  currentStep = stepNumber;


  // Show back button after first step
  if (stepNumber > 1) {
    backBtn.classList.remove("hidden");
  } else {
    backBtn.classList.add("hidden");
  }
}


/* =========================
   STEP 1 — DATE
========================= */

document.querySelectorAll(".date-option").forEach(button => {

  button.addEventListener("click", () => {

    // Remove previous selection
    document.querySelectorAll(".date-option").forEach(b => {
      b.classList.remove("selected-date");
    });


    // Select clicked date
    button.classList.add("selected-date");


    // Save date
    chosenDate = button.dataset.date;


    // Automatically move to time selection
    setTimeout(() => {
      showStep(2);
    }, 350);

  });

});


/* =========================
   STEP 2 — TIME
========================= */

timeNextBtn.addEventListener("click", () => {

  if (!timeInput.value) {

    timeInput.focus();

    return;
  }


  chosenTime = formatTime(timeInput.value);


  showStep(3);

});


/* =========================
   FORMAT TIME
========================= */

function formatTime(time) {

  const [hours, minutes] = time.split(":");

  return `${hours}:${minutes}`;
}


/* =========================
   STEP 3 — DATE TYPE
========================= */

document.querySelectorAll(".type-option").forEach(button => {

  button.addEventListener("click", () => {

    // Remove previous selection
    document.querySelectorAll(".type-option").forEach(b => {
      b.classList.remove("selected-type");
    });


    // Select clicked type
    button.classList.add("selected-type");


    chosenType = button.dataset.type;


    // Create food choices
    createFoodOptions(chosenType);


    // Move to food selection
    setTimeout(() => {
      showStep(4);
    }, 350);

  });

});


/* =========================
   STEP 4 — FOOD OPTIONS
========================= */

function createFoodOptions(type) {

  foodOptions.innerHTML = "";


  const options = foods[type] || [];


  options.forEach(food => {

    const button = document.createElement("button");

    button.className = "food-option";

    button.textContent = food;


    button.addEventListener("click", () => {

      // Remove old selection
      document.querySelectorAll(".food-option").forEach(b => {
        b.classList.remove("selected-food");
      });


      // Select food
      button.classList.add("selected-food");


      chosenFood = food;


      // Move to final screen
      setTimeout(() => {

        createSummary();

        showStep(5);

      }, 350);

    });


    foodOptions.appendChild(button);

  });

}


/* =========================
   CREATE SUMMARY
========================= */

function createSummary() {

  summary.innerHTML = `

    <div class="summary-row">
      <span class="summary-label">📅 Day</span>
      <span class="summary-value">${chosenDate}</span>
    </div>

    <div class="summary-row">
      <span class="summary-label">🕐 Time</span>
      <span class="summary-value">${chosenTime}</span>
    </div>

    <div class="summary-row">
      <span class="summary-label">💕 Date</span>
      <span class="summary-value">${chosenType}</span>
    </div>

    <div class="summary-row">
      <span class="summary-label">🍴 Food</span>
      <span class="summary-value">${chosenFood}</span>
    </div>

  `;
}


/* =========================
   BACK BUTTON
========================= */

backBtn.addEventListener("click", () => {

  if (currentStep > 1) {

    showStep(currentStep - 1);

  }

});


/* =========================
   YES BUTTON
========================= */

function handleYes() {

  successText.textContent =
    `Then it's settled — ${chosenDate} at ${chosenTime}! ` +
    `I can't wait to spend this time with you, baby 💗`;


  createFinalPlan();


  card.classList.add("hidden");

  success.classList.remove("hidden");


  burstHearts();

}


yesBtn.addEventListener("click", handleYes);


/* =========================
   FINAL PLAN
========================= */

function createFinalPlan() {

  finalPlan.innerHTML = `

    <div class="final-plan-row">
      <span class="final-plan-icon">📅</span>
      <span class="final-plan-value">
        ${chosenDate}
      </span>
    </div>

    <div class="final-plan-row">
      <span class="final-plan-icon">🕐</span>
      <span class="final-plan-value">
        ${chosenTime}
      </span>
    </div>

    <div class="final-plan-row">
      <span class="final-plan-icon">💕</span>
      <span class="final-plan-value">
        ${chosenType}
      </span>
    </div>

    <div class="final-plan-row">
      <span class="final-plan-icon">🍴</span>
      <span class="final-plan-value">
        ${chosenFood}
      </span>
    </div>

  `;

}


/* =========================
   "LET ME THINK" BUTTON
========================= */

let maybeClicked = false;


maybeBtn.addEventListener("click", () => {

  if (maybeClicked) {

    handleYes();

    return;
  }


  maybeBtn.textContent = "Take your time 🌸";


  setTimeout(() => {

    maybeBtn.textContent = "YES, OF COURSE 💗";

    maybeBtn.classList.remove("maybe-btn");

    maybeBtn.classList.add("yes-btn");

    maybeClicked = true;

  }, 1800);

});


/* =========================
   AGAIN BUTTON
========================= */

againBtn.addEventListener("click", () => {

  success.classList.add("hidden");

  card.classList.remove("hidden");

  resetEverything();

});


/* =========================
   RESET EVERYTHING
========================= */

function resetEverything() {

  chosenDate = "";
  chosenTime = "";
  chosenType = "";
  chosenFood = "";

  currentStep = 1;


  // Reset date buttons
  document.querySelectorAll(".date-option").forEach(button => {
    button.classList.remove("selected-date");
  });


  // Reset type buttons
  document.querySelectorAll(".type-option").forEach(button => {
    button.classList.remove("selected-type");
  });


  // Reset time
  timeInput.value = "";


  // Reset food
  foodOptions.innerHTML = "";


  // Reset summary
  summary.innerHTML = "";


  // Go back to beginning
  showStep(1);

}


/* =========================
   FLOATING HEARTS
========================= */

function makeHeart() {

  const heart = document.createElement("span");


  heart.className = "heart";


  heart.textContent =
    Math.random() > .25
      ? "♡"
      : "♥";


  heart.style.left =
    `${Math.random() * 100}%`;


  heart.style.fontSize =
    `${14 + Math.random() * 20}px`;


  heart.style.animationDuration =
    `${5 + Math.random() * 5}s`;


  hearts.appendChild(heart);


  setTimeout(() => {
    heart.remove();
  }, 10000);

}


/* =========================
   CONTINUOUS HEARTS
========================= */

setInterval(makeHeart, 900);


/* =========================
   HEART BURST
========================= */

function burstHearts() {

  for (let i = 0; i < 25; i++) {

    setTimeout(makeHeart, i * 60);

  }

}
```
