import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

// Створюємо розмітку галереї
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Додаємо обробник подій кліку на елементи галереї
galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </div>
    `;
    }).join('');
}

function onGalleryItemClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== 'IMG') {
      return;
    } 
    const originalUrl = target.parentNode.href;
  
    basicLightbox.create(`
      <img width="1400" height="900" src="${originalUrl}">
    `).show();


    // const originalImageUrl = target.closest('.gallery__item').querySelector('.gallery__link').href;

}

