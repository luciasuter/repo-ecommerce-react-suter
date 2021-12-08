import React from 'react'
import './CartProduct.css'

const CartProduct = ({data}) => {
    return (
        <div className={`Product_${data.id} cart_container`}>
            <ul>
                <li>product id: {data.id}</li>
                <li>product name: {data.name}</li>
                <li>product price x 1: ${data.price}</li>
                <li>product quantity: {data.quantity}</li>
                <li>product total price: ${data.totalPrice}</li>
            </ul>
        </div>
    )
}

export default CartProduct
