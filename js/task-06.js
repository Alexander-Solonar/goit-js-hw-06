const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", (event) => {
  textInput.classList =
    event.currentTarget.value.length >= textInput.dataset.length
      ? "valid"
      : "invalid";
});
