const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  textInput.classList =
    event.currentTarget.value.length === Number(textInput.dataset.length)
      ? "valid"
      : "invalid";222222222222222222222
});
