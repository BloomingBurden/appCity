const ORDERS = [];
const MAX = 3;
const list = document.querySelector('.orders__list');
const road = document.querySelector('.road__list');
let roadNum = 0;
let orderNum = 0;

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
                    </li>`;

    let roadItem = `<li class="road__item">
                        <h3 class="road__preview">Маршрут 1</h3>
                        <p class="road__text road__text-from">От адреса:  ДУ,Бургундия - Франш-конте,метрополия Франции,Франция</p>
                        <p class="road__text road__text-to">До адреса: ${form.address.value}</p>
                        <p class="road__text road__text-time">Время: <span>2367 мин</span></p>
                        <p class="road__text road__text-volume">Объем аккумулятора: 8.58 %</p>
                        <p class="road__text road__text-weight">Вес груза: ${form.weight.value}г</p>
                    </li>`;

    ORDERS.push({order, roadItem});
    renderOrder();
}

const renderOrder = () => {
    if (roadNum < MAX) {
        list.innerHTML += ORDERS[orderNum].order;
        road.innerHTML += ORDERS[roadNum].roadItem;
        roadNum++;
        orderNum++;
    }
};

const onClickShow = () => {
    const orderBtn = document.querySelector('.orders__more');
    const roadBtn = document.querySelector('.road__show');


    const showMore = (elem) => {
        if (elem === 'order') {
            for (let i = 0; i < Math.min(MAX, ORDERS.length - orderNum); i++) {
                list.innerHTML += ORDERS[orderNum].order;
                orderNum++;
            }
        }

        if (elem === 'road') {
            for (let i = 0; i < Math.min(MAX, ORDERS.length - roadNum); i++) {
                road.innerHTML += ORDERS[roadNum].roadItem;
                roadNum++;
            }
        }
    }

    orderBtn.addEventListener('click', showMore.bind(null, 'order'));
    roadBtn.addEventListener('click', showMore.bind(null, 'road'));
};

onClickShow();


export { createOrder }