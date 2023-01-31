const galleryEl = document.querySelector("#categories");

console.log(`Number of categories: ${galleryEl.childElementCount}`);

console.log(
  `Category: ${galleryEl.firstElementChild.firstElementChild.textContent}`
);
console.log(
  `Elements: ${galleryEl.firstElementChild.lastElementChild.childElementCount}`
);

console.log(
  `Category: ${galleryEl.firstElementChild.nextElementSibling.firstElementChild.textContent}`
);
console.log(
  `Elements: ${galleryEl.firstElementChild.nextElementSibling.lastElementChild.childElementCount}`
);

console.log(
  `Category: ${galleryEl.lastElementChild.firstElementChild.textContent}`
);
console.log(
  `Elements: ${galleryEl.lastElementChild.lastElementChild.childElementCount}`
);
