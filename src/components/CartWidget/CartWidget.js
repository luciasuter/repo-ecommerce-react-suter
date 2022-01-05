import React, {Fragment, useContext} from 'react'
import './CartWidget.css'
import { BsCart } from 'react-icons/bs';
import {CartContext} from '../../CartContext'



export default function CartWidget() {

    const [cart] = useContext(CartContext)
    const totalItemQuantity = cart.reduce((acc, prevQuantity) => acc + prevQuantity.cant, 0);
    return (
        <Fragment>

            <div className='cart-icon'>
                <span className='counter'>{totalItemQuantity}</span>
                <BsCart />
            </div>
        </Fragment>
    )
}
