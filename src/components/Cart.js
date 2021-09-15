function Cart(props) {
    const { quantity = 0, onBasketShow } = props;

    return (
        <div className='cart orange darken-3 white-text' onClick={onBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    )

}

export { Cart }