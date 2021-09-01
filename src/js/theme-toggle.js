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
  themeToggleEl.checked = true;
}

if (!THEME) {
  localStorage.setItem(MODE, LIGHT);
}

bodyEl.classList.add(THEME);

themeToggleEl.addEventListener('change', e => {
  bodyEl.classList.toggle(LIGHT);
  bodyEl.classList.toggle(DARK);

  if (bodyEl.classList.contains(DARK)) {
    localStorage.setItem(MODE, DARK);
  } else {
    localStorage.setItem(MODE, LIGHT);
  }
});
