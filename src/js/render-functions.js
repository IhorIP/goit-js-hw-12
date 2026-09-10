import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

// Екземпляр SimpleLightbox створюємо один раз на рівні модуля
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Приймає масив images, будує розмітку карток,
 * додає її одним запитом у DOM і оновлює SimpleLightbox.
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${likes}
              </p>
              <p class="info-item">
                <b>Views</b>${views}
              </p>
              <p class="info-item">
                <b>Comments</b>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </a>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

/** Очищує вміст контейнера галереї */
export function clearGallery() {
  gallery.innerHTML = '';
}

/** Показує індикатор завантаження */
export function showLoader() {
  loader.classList.remove('is-hidden');
}

/** Приховує індикатор завантаження */
export function hideLoader() {
  loader.classList.add('is-hidden');
}

/** Показує кнопку Load more */
export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

/** Приховує кнопку Load more */
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
