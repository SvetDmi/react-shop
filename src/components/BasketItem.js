// function BasketItem(props) {
//     const {
//         id, name, price, quantity, onRemove, increment, decrement
//     } = props;
//     return (
//         <li className="collection-item">
//             {name}
//             <i className='material-icons basket__quantity' onClick={() => decrement(id)}>remove</i>
//             x{quantity}
//             <i className='material-icons basket__quantity' onClick={() => increment(id)}>add</i>
//             = {price * quantity} руб.
//             <span className='secondary-content' onClick={() => onRemove(id)} >
//                 <i className='material-icons basket__delete'>close</i>
//             </span>
//         </li>
//     )
// }

// ПЕРЕКЛЮЧЕНИЕ НА КОНТЕКСТ И РЕДЮСЕР


import React from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {

    const {
        id, name, price, quantity
    } = props;

    const { removeFromBasket, incQuantity, decQuantity } = React.useContext(ShopContext);

    return (
        <li className="collection-item">
            {name}
            <i className='material-icons basket__quantity' onClick={() => decQuantity(id)}>remove</i>
            x{quantity}
            <i className='material-icons basket__quantity' onClick={() => incQuantity(id)}>add</i>
            = {price * quantity} руб.
            <span className='secondary-content' onClick={() => removeFromBasket(id)} >
                <i className='material-icons basket__delete'>close</i>
            </span>
        </li>
    )
}

export { BasketItem };