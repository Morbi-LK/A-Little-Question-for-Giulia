const card = document.getElementById("card");
const success = document.getElementById("success");
const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const againBtn = document.getElementById("againBtn");
const selected = document.getElementById("selected");
const successText = document.getElementById("successText");
const hearts = document.querySelector(".hearts");

let chosenDate = "";

document.querySelectorAll(".date-option").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".date-option").forEach(b => b.classList.remove("selected-date"));
    button.classList.add("selected-date");
    chosenDate = button.dataset.date;
    selected.textContent = `Ooooh, ${chosenDate} sounds lovely. 💕`;
  });
});

yesBtn.addEventListener("click", () => {
  successText.textContent = chosenDate
    ? `Then it's settled — ${chosenDate} it is! I can't wait to spend some time with you, baby 💗`
    : `Then it's a date! Now we just need to pick a day between October 7 and 11. I can't wait to spend some time with you, baby 💗`;

  card.classList.add("hidden");
  success.classList.remove("hidden");
  burstHearts();
});

maybeBtn.addEventListener("click", () => {
  maybeBtn.textContent = "Take your time 🌸";
  setTimeout(() => {
    maybeBtn.textContent = "Let me think... 🌸";
  }, 1800);
});

againBtn.addEventListener("click", () => {
  success.classList.add("hidden");
  card.classList.remove("hidden");
});

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > .25 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 20}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}

setInterval(makeHeart, 900);

function burstHearts() {
  for (let i = 0; i < 25; i++) {
    setTimeout(makeHeart, i * 60);
  }
}
