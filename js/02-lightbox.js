import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
createGallery(galleryItems);

function createGallery(galleryData) {
  gallery.innerHTML = galleryData
    .map(({preview, original, description}) => 
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`).join("");
}

let boxImage = new SimpleLightbox(".gallery__link", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});


