import React from "react";
import { ShopContext } from '../context';

function GoodItem(props) {
    // const {
    //     id,
    //     name,
    //     description,
    //     price,
    //     full_background,
    // onBuy

    // } = props;


    // return (
    //     <div className="card">
    //         <div className="card-image">
    //             <img src={full_background} alt={name} />
    //         </div>
    //         <div className="card-content">
    //             <span className="card-title">{name}</span>
    //             <p>
    //                 {description}
    //             </p>
    //         </div>
    //         <div className="card-action">
    //             <button className='waves-effect waves-light btn orange darken-3 white-text' onClick={() => onBuy({ id, name, price })}>Купить</button>
    //             <span className='right' style={{ fontSize: '1.5rem' }}>{price} руб.</span>
    //         </div>
    //     </div>
    // )

    // ПЕРЕКЛЮЧЕНИЕ НА КОНТЕКСТ И РЕДЮСЕР
    const {
        id,
        name,
        description,
        price,
        full_background,


    } = props;

    const { addToBasket } = React.useContext(ShopContext)

    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>
                    {description}
                </p>
            </div>
            <div className="card-action">
                <button className='waves-effect waves-light btn orange darken-3 white-text' onClick={() => addToBasket({ id, name, price })}>Купить</button>
                <span className='right' style={{ fontSize: '1.5rem' }}>{price} руб.</span>
            </div>
        </div>
    )

}

export { GoodItem };