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

gallery.addEventListener('click', openPhotoClick);

function openPhotoClick(event) {
event.preventDefault();}

let lightBox = new SimpleLightbox('.gallery a');
lightBox.on('show.simplelightbox', function () {
	console.log('traraar')
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});
    
        