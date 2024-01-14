const userInput = document.querySelector("div#controls").children[0];
const container = document.querySelector("div#boxes");

function createBoxes(amount) {
  let x = 30;
  for (let i = 0; i < amount; i++) {
    const boxMarkup = `<div style="background-color: ${getRandomHexColor()}; width: ${
      x + i * 10
    }px; height: ${x + i * 10}px;"></div>`;
    container.insertAdjacentHTML("beforeend", boxMarkup);
  }
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", onCreateClick);
function onCreateClick() {
  container.innerHTML = "";
  const amount = userInput.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Число має бути в межах від 1 до 100 включно!");
  }
  userInput.value = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  container.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
