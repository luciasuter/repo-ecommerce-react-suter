import React, {useContext} from 'react'
import './CartProduct.css'
import { CartContext } from '../../CartContext'


const CartProduct = ({data}) => {
    const [cart, setCart] = useContext(CartContext)

    const DeleteProduct = () =>{
        const NewCart = cart.filter(products => products.id !== data.id)
        setCart(NewCart)
    }
    return (
        <div className={`Product_${data.id} cart_container`}>
            <ul>
                <li className='cart_item_name'>{data.nombre}</li>
                <li className='cart_item'>{data.cant}</li>
                <li className='cart_item'>${data.precio_unidad}</li>
                <li className='cart_item'>${data.cant * data.precio_unidad} </li>
            </ul>
            <button className='cart_remover_btn' onClick={() => DeleteProduct()}>remover </button>
        </div>
    )
}

export default CartProduct

