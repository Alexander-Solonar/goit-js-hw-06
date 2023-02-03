const btnChangeColor = document.querySelector(".change-color");
const spanColorText = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColorText.textContent = getRandomHexColor();
});
