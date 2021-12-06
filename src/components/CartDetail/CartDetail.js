import React, {useContext} from 'react'

import { CartContext } from '../../CartContext'
import CartProduct from '../CartProduct/CartProduct'

const CartDetail = () => {
    const [products, setProducts] = useContext(CartContext);
    return (
        <div className="CartDetail">
            {products.map((product) => {
                return <CartProduct data={product} key={product.id} />
            })}
        </div>
    )
}

export default CartDetail;