const btnDecrement = document.querySelector("[data-action= decrement]");
const btnIncrement = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");
let counterValue = 0;

btnIncrement.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});

btnDecrement.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
