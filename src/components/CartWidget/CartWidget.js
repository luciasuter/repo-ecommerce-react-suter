import React, {useContext} from 'react'
import './CartWidget.css'
import { BsMinecartLoaded } from 'react-icons/bs';
import {CartContext} from '../../CartContext'


export default function CartWidget() {
    const [cart, setCart] = useContext(CartContext)
    const totalItemQuantity = cart.reduce((acc, prevQuantity) => acc + prevQuantity.cant, 0);
    return (
        <div className='cart-icon'>
            <span className='counter'>{totalItemQuantity}</span>
            <BsMinecartLoaded />
            
        </div>
    )
}
