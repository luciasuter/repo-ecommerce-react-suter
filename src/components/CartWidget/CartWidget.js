import React from 'react'
import './CartWidget.css'
import { BsMinecartLoaded } from 'react-icons/bs';

export default function CartWidget() {
    return (
        <div className='cart-icon'>
            <a href="/"><BsMinecartLoaded /></a>
        </div>
    )
}
