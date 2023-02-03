const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  }
});
