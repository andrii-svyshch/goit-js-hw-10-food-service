import { refs } from './refs';
const { themeToggleEl, bodyEl } = refs;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const MODE = 'theme';
const THEME = localStorage.getItem(MODE);

if (THEME === DARK) {
  themeToggleEl.setAttribute('checked', 'checked');
}

if (!THEME) {
  localStorage.setItem(MODE, LIGHT);
}

bodyEl.classList.add(THEME);

themeToggleEl.addEventListener('change', e => {
  if (!bodyEl.classList.contains(DARK)) {
    bodyEl.classList.remove(LIGHT);
    bodyEl.classList.add(DARK);
    localStorage.setItem(MODE, DARK);
  } else {
    bodyEl.classList.remove(DARK);
    bodyEl.classList.add(LIGHT);
    localStorage.setItem(MODE, LIGHT);
  }
});
