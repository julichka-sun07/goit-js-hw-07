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
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="" title="${description}"/>
            </a>
        </li> 
     `;
    }).join('');
}

function onGalleryItemClick(event) {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== 'IMG') {
      return;
    } 
    var lightbox = new SimpleLightbox('.gallery a', { });

}
