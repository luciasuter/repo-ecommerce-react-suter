import React, {useContext, Fragment} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../CartContext'
import CartProduct from '../CartProduct/CartProduct'
import NoElements from '../NoElements/NoElements'
import './CartDetail.css'
import { Divider } from 'semantic-ui-react'
export let totalItemQuantity;
export let totalPrice; 


const CartDetail = () => {

    const [cart] = useContext(CartContext)
    totalPrice = cart.reduce((acc, prevItems) => acc + prevItems.precio_total, 0);
    totalItemQuantity = parseInt(cart.reduce((acc, prevQuantity) => acc + prevQuantity.cant, 0));

    return (
        <Fragment>
            {totalItemQuantity === 0 ? <NoElements/> : 
                <div className="CartDetail">
                    <div className='cart_txt'>
                        <h3>TU CARRITO</h3>
                        <span className='total_products'>tenes {totalItemQuantity} {totalItemQuantity === 1 ? 'producto' : 'productos'} en tu carrito</span> 
                    </div>
                    <Divider/>
                    <div className='product_titles'>
                            <ul>
                                <li className='producto'>producto </li>
                                <li>cantidad</li>
                                <li>precio</li>
                                <li>total</li>
                            </ul>
                    </div>
                    <div className='cart_product_container'>
                        {cart.map((item) => {
                        return <CartProduct data={item} key={item.id}/>})}
                    </div>
                    <div className='pay_btns'>
                        <div className='pay_txt'>
                            <div className='total_txt'>
                                <span className='total'>TOTAL A PAGAR:</span>
                                <span className='total_products'>{totalItemQuantity} {totalItemQuantity === 1 ? 'producto' : 'productos'}</span>                        
                            </div>
                            <span className='total_price'>${totalPrice}</span>
                        </div>
                        <Link to="/CheckOut"><button className='purchase_btn'>terminar compra</button></Link>
                    </div>
                </div> 
            }
            
        </Fragment>
    )
}

export default CartDetail;
