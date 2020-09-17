import galleryItems from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const lightBoxRef = document.querySelector(".lightbox");

const lightboxImageRef = document.querySelector(".lightbox__image");

const addListItem = ({ preview, original, description }) => {
  const addItem = `<li class='gallery__item'><a class='gallery__link' href='${original}'><img src='${preview}' data-source='${original}' class='gallery__image' alt='${description}'></a></li>`;

  return addItem;
};

const createGalleryItems = (arr) => {
  return arr.map((item) => addListItem(item)).join(" ");
};

galleryRef.insertAdjacentHTML("beforeend", createGalleryItems(galleryItems));

galleryRef.addEventListener("click", (event) => {
  if (event.target.dataset.source) {
    event.preventDefault();

    lightBoxRef.classList.add("is-open");

    lightboxImageRef.src = event.target.dataset.source;
    lightboxImageRef.alt = event.target.alt;
  }
});

lightBoxRef.addEventListener("click", (event) => {
  if (
    event.target.className !== "lightbox__image" ||
    event.target.className === "lightbox__button"
  ) {
    closedModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closedModal();
  }
});

function closedModal() {
  lightBoxRef.classList.remove("is-open");
  lightboxImageRef.src = "";
}
