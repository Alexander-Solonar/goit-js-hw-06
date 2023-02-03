const btnCreate = document.querySelector("[data-create]");
const btnDestry = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let width = 30;
let height = 30;
let counter = 0;
const arrayDiv = [];

function createBoxes() {
  for (let i = 0; i < 5; i += 1) {
    const newDivElement = document.createElement("div");
    newDivElement.style.backgroundColor = getRandomHexColor();
    newDivElement.style.width = `${width}px`;
    newDivElement.style.height = `${height}px`;
    width += 10;
    height += 10;
    arrayDiv.push(newDivElement);
    boxes.append(...arrayDiv);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

btnCreate.addEventListener("click", createBoxes);
btnDestry.addEventListener("click", destroyBoxes);

// const createBoxes = () => {
//   while (counter <= 2) {
//     const newDivElement = document.createElement("div");
//     console.log(newDivElement);
//     // newDivElement.style.backgroundColor = getRandomHexColor();
//     // newDivElement.width = `${width}px`;
//     // newDivElement.heigth = `${heigth}px`;
//     arrayDiv.push(newDivElement);
//     width += 10;
//     heigth += 10;
//     counter += 1;
//   }
// };
