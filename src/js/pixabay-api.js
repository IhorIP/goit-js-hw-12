import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

// !!! Встав сюди свій власний ключ, отриманий на https://pixabay.com/api/docs/
const API_KEY = '57544668-0cace1b92c04c751854fcca6c';

const PER_PAGE = 15;

/**
 * Виконує HTTP-запит до Pixabay за пошуковим словом query
 * та номером сторінки page, повертає data з відповіді.
 */
export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get('', { params });

  return response.data;
}
