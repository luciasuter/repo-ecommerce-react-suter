import React, {useContext} from 'react'
import {CartContext} from '../../CartContext'
import CartProduct from '../CartProduct/CartProduct'


const CartDetail = () => {

    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, prevItems) => acc + prevItems.precio_total, 0);
    const totalItemQuantity = cart.reduce((acc, prevQuantity) => acc + prevQuantity.cant, 0);

    return (
        <div className="CartDetail">
            <span>total products:  {totalItemQuantity}</span><br/>
            
            {cart.map((item) => {
        return <CartProduct data={item} key={item.id}/>})}
        <span>TOTAL A PAGAR: ${totalPrice}</span><br/>
        <button onClick={()=>setCart([])}>clear cart</button>
        </div>
    )
}

export default CartDetail;