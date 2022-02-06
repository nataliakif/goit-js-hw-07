import { galleryItems } from './gallery-items.js';
// Change code below this line


const makeGalleryList = images =>{
      return images.map(element => { 
        const galleryItemEl = document.createElement('div');
        galleryItemEl.classList.add('gallery__item');
        const galleryLinkEl = document.createElement('a');
        galleryLinkEl.classList.add('gallery__link');
        // galleryLinkEl.target ='modal';
        galleryLinkEl.href = element.original;
        const galleryImgEl = document.createElement('img');
        galleryImgEl.classList.add('gallery__image');
        galleryImgEl.src = element.preview;
        galleryImgEl.alt = element.description;
        galleryImgEl.dataset.source = element.original;
        galleryItemEl.appendChild(galleryLinkEl).appendChild(galleryImgEl);
         
        return galleryItemEl;
    });
    }
    const gallery = document.querySelector('.gallery');
    gallery.append(...makeGalleryList(galleryItems));

gallery.addEventListener('click', openPhotoClick);

function openPhotoClick(event) {

   if( event.target.nodeName !== 'IMG'){
    return;
}
event.preventDefault();

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1140px" heigth ="744px">
`)
 instance.show();
    if(basicLightbox.visible()){
        window.addEventListener('keydown', closeModal);
        function closeModal(event){
            if(event.code === 'Escape'){
                console.log(event.code)
                instance.close()
                window.removeEventListener('keydown', closeModal);
            }
    }   
 }
}



