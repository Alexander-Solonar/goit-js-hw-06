const ulEl = document.querySelector("#categories");
const allItemEl = ulEl.querySelectorAll(".item");
const allTitelEl = ulEl.querySelectorAll("h2");

console.log(`Number of categories: ${ulEl.children.length}`);

console.log(`Category: ${allTitelEl[0].textContent}`);
console.log(
  `Elements: ${allItemEl[0].lastElementChild.querySelectorAll("li").length}`
);

console.log(`Category: ${allTitelEl[1].textContent}`);
console.log(
  `Elements: ${allItemEl[1].lastElementChild.querySelectorAll("li").length}`
);

console.log(`Category: ${allTitelEl[allTitelEl.length - 1].textContent}`);
console.log(
  `Elements: ${
    allItemEl[allItemEl.length - 1].lastElementChild.querySelectorAll("li")
      .length
  }`
);
