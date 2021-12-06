import React from 'react'

const CartProduct = ({data}) => {
    return (
        <div className={`Product_${data.id}`}>
            <span>pruduct name: {data.producto}</span>
            <span>pruduct price: {data.precio}</span>
        </div>
    )
}

export default CartProduct
