import React, {useContext} from 'react'
import './PurchasedProducts.css'
import { CartContext } from '../../CartContext'

const PurchasedProducts = ({data}) => {
    const [cart, setCart,] = useContext(CartContext)

    return (
        <div className={`Product_${data.id} PurchasedProducts`}>
            <ul>
                <li>product name: {data.nombre}</li>
                <li>product quantity: {data.cant}</li>
            </ul>
        </div>
    )
}

export default PurchasedProducts

