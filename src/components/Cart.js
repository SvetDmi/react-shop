// function Cart(props) {
//     const { quantity = 0, onBasketShow } = props;

//     return (
//         <div className='cart orange darken-3 white-text' onClick={onBasketShow}>
//             <i className="material-icons">add_shopping_cart</i>
//             {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
//         </div>
//     )

// }

// ПЕРЕКЛЮЧЕНИЕ НА КОНТЕКСТ И РЕДЮСЕР

import React from 'react';
import { ShopContext } from '../context';

function Cart() {

    const { order, handleBasketShow } = React.useContext(ShopContext);
    const quantity = order.length;

    return (
        <div className='cart orange darken-3 white-text' onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )

}

export { Cart }