import { onClickShow } from "./renderOrder.js";

export const renderStorage = () => {
    const list = document.querySelector('.orders__list');
    const road = document.querySelector('.road__list');
    let i = 0;
    let MAX = 3;

    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        
        if (i < MAX) {
            list.innerHTML += JSON.parse(localStorage.getItem(key)).order;
            road.innerHTML += JSON.parse(localStorage.getItem(key)).roadItem;
        }

        i++;
    }

    onClickShow();
};