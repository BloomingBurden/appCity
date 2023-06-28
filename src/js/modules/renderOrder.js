const MAX = 3;
const list = document.querySelector('.orders__list');
const road = document.querySelector('.road__list');
let currentNum = localStorage.length;
let roadNum = MAX;
let orderNum = MAX;

const createOrder = (data, form) => {
    let order =  `<li class="orders__item">
                        <div class="orders__data">
                            <h3 class="orders__preview">Адрес доставки</h3>
                            <p class="orders__descr">${form.address.value}</p>
                        </div>
                        <div class="orders__data">
                            <h3 class="orders__preview">Координаты</h3>
                            <p class="orders__descr orders__descr--cord"><span>${data.lat}</span><span>${data.lon}</span></p>
                        </div>
                        <div class="orders__data">
                            <h3 class="orders__preview">Расстояние</h3>
                            <p class="orders__descr">2367.01 км</p>
                        </div>
                        <button class="remove-item">Удалить</button>
                    </li>`;

    let roadItem = `<li class="road__item">
                        <h3 class="road__preview">Маршрут 1</h3>
                        <p class="road__text road__text-from">От адреса:  ДУ,Бургундия - Франш-конте,метрополия Франции,Франция</p>
                        <p class="road__text road__text-to">До адреса: ${form.address.value}</p>
                        <p class="road__text road__text-time">Время: <span>2367 мин</span></p>
                        <p class="road__text road__text-volume">Объем аккумулятора: 8.58 %</p>
                        <p class="road__text road__text-weight">Вес груза: ${form.weight.value}г</p>
                        <button class="remove-item">Удалить</button>
                    </li>`;

    const json = JSON.stringify({order, roadItem});
    
    localStorage.setItem(`${currentNum}`, json);
    roadNum++;
    orderNum++
    currentNum++;

    renderOrder();
}

const renderOrder = () => {
    if (currentNum <= MAX) {
        list.innerHTML += JSON.parse(localStorage.getItem(currentNum - 1)).order;
        road.innerHTML += JSON.parse(localStorage.getItem(currentNum - 1)).roadItem;
    }
};

const onClickShow = () => {
    const orderBtn = document.querySelector('.orders__more');
    const roadBtn = document.querySelector('.road__show');

    const showMore = (elem) => {
        if (elem === 'order') {
            for (let i = 0; i < Math.min(MAX, orderNum); i++) {
                list.innerHTML += JSON.parse(localStorage.getItem(orderNum - 1)).order;
                orderNum++;
            }
        }

        if (elem === 'road') {
            for (let i = 0; i < Math.min(MAX, roadNum); i++) {
                road.innerHTML += JSON.parse(localStorage.getItem(roadNum - 1)).roadItem;
                roadNum++;
            }
        }
    }

    orderBtn.addEventListener('click', showMore.bind(null, 'order'));
    roadBtn.addEventListener('click', showMore.bind(null, 'road'));
};

export { createOrder, onClickShow }