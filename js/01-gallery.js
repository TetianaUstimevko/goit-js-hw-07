import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const image = document.querySelector('.gallery__image');

galleryContainer.insertAdjacentHTML('afterbegin', creatingMarkup(galleryItems));

function creatingMarkup(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `<div class= ="gallery__item"><a href="${original}" class="gallery__link"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/></a></div>`;
        }).join('');
}

galleryContainer.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.preventDefault();
    const isImage = event.target.classList.contains('gallery__image');
    if (!isImage) {
        return;
    }

    showScreenImage(event.target);
    
}

function showScreenImage(target) {
    const img = `<img src="${target.dataset.source}">`;
    const instance = basicLightbox.create(img, {
        onShow: () => document.addEventListener('keydown', onCloseImageByKeboard),
    });

    instance.show();

    function onCloseImageByKeboard(event) {
        if (event.code !== 'Escape') {
            return;
        }
        instance.close();
        document.removeEventListener('keydovn', onCloseImageByKeboard);
    }
}