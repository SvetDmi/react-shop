import React from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
    const [goods, setGoods] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [order, setOrder] = React.useState([]);
    const [isBasketShow, setBasketShow] = React.useState(false);
    const [alertName, setAlertName] = React.useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        setAlertName(item.name)
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map((elem) => {
            if (elem.id === itemId) {
                const newQuantity = elem.quantity + 1;
                return {
                    ...elem,
                    quantity: newQuantity,
                };
            } else {
                return elem;
            }
        })
        setOrder(newOrder)
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map((elem) => {
            if (elem.id === itemId) {
                const newQuantity = elem.quantity - 1;
                return {
                    ...elem,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return elem;
            }
        })
        setOrder(newOrder)
    };


    const removeFromBasket = (itemId) => {
        const newOrder = order.filter(elem => elem.id !== itemId)
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    }

    const handleCloseAlert = () => {
        setAlertName('');
    }

    React.useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        })
            .then(res => res.json())
            .then(data => {
                data.featured && setGoods(data.featured)
                setLoading(false);
                console.log(data)
            });

    }, [])




    return (
        <main className='container content'>
            <Cart
                quantity={order.length}
                onBasketShow={handleBasketShow}
            />
            {
                loading ?
                    (<Preloader />
                    ) : (
                        <GoodsList
                            goods={goods}
                            onBuy={addToBasket}

                        />
                    )
            }
            {
                isBasketShow && (
                    <BasketList
                        order={order}
                        onBasketShow={handleBasketShow}
                        onRemove={removeFromBasket}
                        increment={incQuantity}
                        decrement={decQuantity} />
                )}
            {alertName && <Alert name={alertName} onCloseAlert={handleCloseAlert} />}

        </main>
    )
}

export { Shop };