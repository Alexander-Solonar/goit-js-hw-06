const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryUlEl = document.querySelector(".gallery");

const arrayNewEl = [];
const creategallery = images.map((element) => {
  const newgalleryEl = document.createElement("li");
  newgalleryEl.classList.add("gallery__item");

  const addimgEl = newgalleryEl.insertAdjacentHTML(
    "beforeend",
    `<img src = "${element.url}"  alt = "${element.alt}" width = 360>`
  );
  arrayNewEl.push(newgalleryEl);
});

galleryUlEl.append(...arrayNewEl);
