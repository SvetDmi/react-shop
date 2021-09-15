import { BasketItem } from './BasketItem';


function BasketList(props) {
    const { order = [], onBasketShow, onRemove, increment, decrement } = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity
    }, 0);

    return (
        <ul className="collection with-header basket__list">
            <li className="collection-header orange  lighten-1"><h4>Корзина</h4></li>
            {
                order.length ? order.map(item => (
                    <BasketItem
                        key={item.id} {...item}
                        onRemove={onRemove}
                        increment={increment}
                        decrement={decrement}
                    />
                )) : <li className="collection-item">Корзина пуста</li>
            }

            <li className="collection-item active orange  lighten-1">Общая стоимость: {totalPrice} руб.
            </li>
            <button className='waves-effect waves-light btn orange darken-3 white-text busket__button'>Оформить заказ</button>
            <i className='material-icons basket__close' onClick={onBasketShow}>close</i>
        </ul>
    )
}

export { BasketList };