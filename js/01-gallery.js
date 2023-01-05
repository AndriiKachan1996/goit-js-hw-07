import { galleryItems } from "./gallery-items.js";

const galleryContainerEl = document.querySelector(".gallery");

galleryContainerEl.insertAdjacentHTML("beforeend", makedMarcup(galleryItems));
galleryContainerEl.addEventListener("click", onImageZoom);

// Cлужбові функції
function makedMarcup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" 
        data-source="${original}" alt="${description}"/>
         </a>
         </div>`
    )
    .join("");
}

function onImageZoom(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(
    `<div class="modal">
        <img src="${e.target.dataset.source}"width="1140" height="800">
    </div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", function handler(e) {
          if (e.code === "Escape") {
            modal.close();
            document.removeEventListener("keydown", handler);
          }
        });
      },
    }
  );
  modal.show();
}
