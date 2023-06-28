import { onClickShow } from "./renderOrder.js";

export const renderStorage = () => {
    const list = document.querySelector('.orders__list');
    const road = document.querySelector('.road__list');
    let MAX = 3;

    const local = Object.keys(localStorage);

    list.innerHTML = '';
    road.innerHTML = '';

    local.forEach((item, i) => {
        if (i < MAX) {
            list.innerHTML += JSON.parse(localStorage.getItem(item)).order;
            road.innerHTML += JSON.parse(localStorage.getItem(item)).roadItem;
        }
    });

    onClickShow();
};