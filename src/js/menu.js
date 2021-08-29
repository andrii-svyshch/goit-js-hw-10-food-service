import menuTpl from '../templates/menu-card';
import menu from './menu.json';
import { refs } from './refs';
const { listMenuEl } = refs;

function createMenuMarkup(menu) {
  return menuTpl(menu);
}

const markup = createMenuMarkup(menu);

listMenuEl.insertAdjacentHTML('beforeend', markup);
