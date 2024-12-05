/* eslint-disable no-console */

import { createPhotos } from './data.js';

const arrayPhotos = createPhotos();
console.log(arrayPhotos);

import { renderPictures } from './renderPictures.js';

document.addEventListener('DOMContentLoaded', () => {
  renderPictures();
});