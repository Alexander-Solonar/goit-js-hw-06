const galleryEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${galleryEl.childElementCount}`);

itemEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});
