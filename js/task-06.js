const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  textInput.classList =
    event.currentTarget.value.trim().length === Number(textInput.dataset.length)
      ? "valid"
      : "invalid";
});
