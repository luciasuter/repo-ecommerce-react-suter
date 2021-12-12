import React from 'react'
import './CartProduct.css'

const CartProduct = ({data}) => {
    return (
        <div className={`Product_${data.id} cart_container`}>
            <ul>
                <li>product name: {data.nombre}</li>
                <li>product price x 1: ${data.precio_unidad}</li>
                <li>product quantity: {data.cant}</li>
            </ul>
        </div>
    )
}

export default CartProduct
