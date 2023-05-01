import './main.scss';

import Keyboard from './module/keyboard';

const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header__title');
  headerTitle.textContent = 'Virtual Keyboard';

  header.appendChild(headerTitle);

  document.body.appendChild(header);
};

const generateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  document.body.appendChild(main);
  // eslint-disable-next-line no-unused-vars
  const keyboard = new Keyboard();
  const descriptionKeyboard = document.createElement('div');
  descriptionKeyboard.classList.add('main__description');
  descriptionKeyboard.classList.add('description');
  const descriptionOC = document.createElement('h4');
  descriptionOC.classList.add('description__title');
  descriptionOC.textContent = 'Клавиатура создана в операционной системе Windows';

  const descriptionLang = document.createElement('h4');
  descriptionLang.classList.add('description__title');
  descriptionLang.textContent = 'Для переключения языка комбинация: левыe shift + alt';

  descriptionKeyboard.appendChild(descriptionOC);
  descriptionKeyboard.appendChild(descriptionLang);
  main.appendChild(descriptionKeyboard);
};

const generateFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerTitle = document.createElement('h4');
  footerTitle.classList.add('footer__title');
  footerTitle.textContent = 'Copyright©2023 solum-the-creator';

  footer.appendChild(footerTitle);

  document.body.appendChild(footer);
};

const generatePage = () => {
  generateHeader();
  generateMain();
  generateFooter();
};

generatePage();
