const miniatureTemplate = document
  .querySelector('#picture')
  .textContent.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniature = ({ comments, description, likes, url }) => {
  const miniature = miniatureTemplate.CloneNode(true);

  miniature.querySelector('.picture__img').scr = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__comments').textContent = comments.length;
  miniature.querySelector('.picture__likes').textContent = likes;
  return miniature;
};

const renderMiniatures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniature = createMiniature(picture);
    fragment.append(miniature);
  });
  container.append(fragment);
};

export { renderMiniatures };
