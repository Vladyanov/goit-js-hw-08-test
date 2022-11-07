// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import galleryItem from '../templates/gallery-item.hbs';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItem);

const galleryContainer = document.querySelector('.gallery');

const galleryItemsCreate = gallery => {
  return galleryItem({ galleryItems });
};

const galleryItemsAdd = () => {
  galleryContainer.innerHTML = galleryItemsCreate(galleryItems);
};

const handleClick = e => {
  e.preventDefault();

  let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
};

const modalCreate = () => {
  galleryContainer.addEventListener('click', handleClick);
};

galleryItemsAdd();
modalCreate();
