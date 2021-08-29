import { refs } from './refs';
const { themeToggleEl, bodyEl } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const THEME = 'theme';

if (localStorage.getItem(THEME) === DARK) {
  themeToggleEl.setAttribute('checked', 'checked');
}

if (!localStorage.getItem(THEME)) {
  localStorage.setItem(THEME, LIGHT);
}

bodyEl.classList.add(localStorage.getItem(THEME));

themeToggleEl.addEventListener('change', e => {
  if (!bodyEl.classList.contains(DARK)) {
    bodyEl.classList.remove(LIGHT);
    bodyEl.classList.add(DARK);
    localStorage.setItem(THEME, DARK);
  } else {
    bodyEl.classList.remove(DARK);
    bodyEl.classList.add(LIGHT);
    localStorage.setItem(THEME, LIGHT);
  }
});
