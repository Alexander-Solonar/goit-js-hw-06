const btnCreate = document.querySelector("[data-create]");
const btnDestry = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const userInput = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  amount = userInput.value;
  const arrayNewEl = [];
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const newDivElement = document.createElement("div");
    newDivElement.style.backgroundColor = getRandomHexColor();
    newDivElement.style.width = `${width}px`;
    newDivElement.style.height = `${height}px`;
    width += 10;
    height += 10;
    arrayNewEl.push(newDivElement);
  }
  boxes.append(...arrayNewEl);
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestry.addEventListener("click", destroyBoxes);
