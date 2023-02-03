const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUlEl = document.querySelector("#ingredients");
const addItem = [];
ingredients.map((element) => {
  const newLiEl = document.createElement("li");
  newLiEl.classList.add("item");
  newLiEl.textContent = element;
  addItem.push(newLiEl);
});

ingredientsUlEl.append(...addItem);
