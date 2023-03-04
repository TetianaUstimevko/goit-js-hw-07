import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('afterbegin', creatingMarkup(galleryItems));


function creatingMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `<li><a href="${original}" class="gallery__link"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`;
        }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoomFactor: 0.1,
});