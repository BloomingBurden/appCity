import './modules/functions.js';
import './modules/autocomplete.js';
import { onClickMenu } from './modules/onClickMenu.js';
import { renderMap } from './modules/renderMap.js';
import { renderStorage } from './modules/renderStorage.js';

window.addEventListener('load', () => {
    onClickMenu();
    renderMap();
    renderStorage();
});