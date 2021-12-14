import React, {useContext, Fragment} from 'react'
import {CartContext} from '../../CartContext'
import CartProduct from '../CartProduct/CartProduct'
import NoElements from '../NoElements/NoElements'
export let totalItemQuantity; 


const CartDetail = () => {

    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, prevItems) => acc + prevItems.precio_total, 0);
    totalItemQuantity = parseInt(cart.reduce((acc, prevQuantity) => acc + prevQuantity.cant, 0));

    return (
        <Fragment>
            {totalItemQuantity === 0 ? <NoElements/> : 
                <div className="CartDetail">
                    <span>total products:  {totalItemQuantity}</span><br/>
                    {cart.map((item) => {
                    return <CartProduct data={item} key={item.id}/>})}
                    
                    <span>TOTAL A PAGAR: ${totalPrice}</span><br/>
                    <button onClick={()=>setCart([])}>clear cart</button>
                </div> 
            }
            
        </Fragment>
    )
}

export default CartDetail;