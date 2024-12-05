import { pictures } from './data.js';

const renderPictures = () => {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  pictures.forEach(({ url, description, likes, comments }) => {
    const pictureElement = document.createElement('div');
    pictureElement.classList.add('picture');

    pictureElement.innerHTML = `
      <img src="${url}" alt="${description}" class="picture__img">
      <div class="picture__likes">${likes}</div>
      <div class="picture__comments">${comments}</div>
    `;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

export { renderPictures };
