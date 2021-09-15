function BasketItem(props) {
    const {
        id, name, price, quantity, onRemove, increment, decrement
    } = props;
    return (
        <li className="collection-item">
            {name}
            <i className='material-icons basket__quantity' onClick={() => decrement(id)}>remove</i>
            x{quantity}
            <i className='material-icons basket__quantity' onClick={() => increment(id)}>add</i>
            = {price * quantity} руб.
            <span className='secondary-content' onClick={() => onRemove(id)} >
                <i className='material-icons basket__delete'>close</i>
            </span>
        </li>
    )
}

export { BasketItem };