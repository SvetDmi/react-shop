import { GoodItem } from './GoodItem';

function GoodsList(props) {
    const { goods = [], onBuy } = props;

    if (!goods.length) {
        return <h3>Нет товаров</h3>
    }

    return (
        <div className='goods'>
            {goods.map(item => (
                <GoodItem key={item.id} {...item} onBuy={onBuy} />
            ))

            }
        </div>
    )

}

export { GoodsList };