import React from 'react'

import './Cart.css'

import CartDetail from '../../components/CartDetail/CartDetail'

export {CartContext} from '../../CartContext'


const Cart = () => {
    

    return (
        <div className="Cart">
            soy un carrito!
            <CartDetail/>
            
            
        </div>
    )
}

export default Cart;
