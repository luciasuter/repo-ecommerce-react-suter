import React, {useContext} from 'react'
import './CartProduct.css'
import { CartContext } from '../../CartContext'

const CartProduct = ({data}) => {
    const [cart, setCart,] = useContext(CartContext)

    const DeleteProduct = () =>{
        const NewCart = cart.filter(products => products.id !== data.id)
        setCart(NewCart)
    }
    return (
        <div className={`Product_${data.id} cart_container`}>
            <ul>
                <li>product name: {data.nombre}</li>
                <li>product price x 1: ${data.precio_unidad}</li>
                <li>product quantity: {data.cant}</li>
                <li><button onClick={() => DeleteProduct()}>borrar producto</button></li>
            </ul>
        </div>
    )
}

export default CartProduct

