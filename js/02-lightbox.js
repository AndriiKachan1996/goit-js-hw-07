import { galleryItems } from "./gallery-items.js";

const galaryEl = document.querySelector(".gallery");

galaryEl.insertAdjacentHTML("beforeend", makedMarcup(galleryItems));
galaryEl.addEventListener("click", onClick);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});

// Cлужбові функції
function makedMarcup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt=${description}" />
</a>`
    )
    .join("");
}

function onClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
}
