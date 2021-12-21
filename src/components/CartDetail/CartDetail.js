import React, {useContext, Fragment} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../CartContext'
import CartProduct from '../CartProduct/CartProduct'
import NoElements from '../NoElements/NoElements'
export let totalItemQuantity;
export let totalPrice; 


const CartDetail = () => {

    const [cart, setCart] = useContext(CartContext)
    totalPrice = cart.reduce((acc, prevItems) => acc + prevItems.precio_total, 0);
    totalItemQuantity = parseInt(cart.reduce((acc, prevQuantity) => acc + prevQuantity.cant, 0));

    return (
        <Fragment>
            {totalItemQuantity === 0 ? <NoElements/> : 
                <div className="CartDetail">
                    <span>total products:  {totalItemQuantity}</span><br/>
                    {cart.map((item) => {
                    return <CartProduct data={item} key={item.id}/>})}
                    
                    <span>TOTAL A PAGAR: ${totalPrice}</span><br/>
                    <button onClick={()=>setCart([])}>clear cart</button><br/>
                    <Link to="/Purchase"><button>terminar compra</button></Link>
                </div> 
            }
            
        </Fragment>
    )
}

export default CartDetail;