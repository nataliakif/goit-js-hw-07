import { galleryItems } from './gallery-items.js';

// Change code below this line



const makeGalleryMarkup = (elements) => {
  return elements.map(({ preview, original, description }) => {
      return  `
            
            <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
            </a> `;
}).join('');
};
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));



lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,});

    
        