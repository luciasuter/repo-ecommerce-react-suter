import React, { useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'
import {totalPrice} from '../CartDetail/CartDetail'
import {CartContext} from '../../CartContext'
import PurchasedProducts from '../PurchasedProducts/PurchasedProducts';
import CheckOutAlert from '../CheckOutAlert/CheckOutAlert';
import {totalItemQuantity} from '../CartDetail/CartDetail'
import { Divider, Checkbox, Form } from 'semantic-ui-react'
import Loading from '../Loading/Loading'



import './CheckOutForm.css'

const CheckOutForm = () => {
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [checkOutAlert, setCheckOutAlert] = useState(false);
    const [cart, setCart] = useContext(CartContext)

    const initialState = {
        name: '',
        last: '',
        email: '',
        products: cart,
        total: totalPrice
      };

    const [values, setValues] = useState(initialState);
    const [CheckOutID, setCheckOutID] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value});
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'purchases'), {
      values
    });
    setCheckOutID(docRef.id)

    document.getElementById('btn_comprar').remove()
    setCart([])
    setValues(initialState)
    document.getElementById('checkOutContainer').remove()
    
    setTimeout(() => {
      setPurchaseLoading(true);
      setTimeout(() => {
        setPurchaseLoading(false);
        setCheckOutAlert(true);
      }, 2000);
    }, 1000);
    

  };


  
    return (
        <Fragment>
          <div id='checkOutContainer'>
            <Form onSubmit={onSubmitHandler} className='CheckOut_form'>
            <div className='form_container'>
              <h3>Informacion del pedido</h3>
              <Divider/>    
                  <div className='input_container'>
                    <label className='input_container_label'>First name:</label>
                    <input name='name' value={values.name} placeholder=' name' onChange={onChangeHandler} />
                  </div>
                  <div className='input_container'>
                    <label className='input_container_label'>Last name:</label>
                    <input name='last' value={values.last} placeholder=' last name' onChange={onChangeHandler} />
                  </div>
                  <div className='input_container'>
                    <label className='input_container_label'>email:</label>
                    <input name='email' value={values.email} placeholder=' email' onChange={onChangeHandler} />
                  </div>
                  <div className='input_container_final'>
                    <Checkbox className='form_checkbox' label='Deseo recibir novedades y promociones'/>
                    <button id='btn_comprar'>REALIZAR PEDIDO</button>
                  </div>
            </div>
            <div className='product_container'>
              <h3>{totalItemQuantity} {totalItemQuantity === 1 ? <span>Producto</span> : <span>Productos</span>}</h3>
              <Divider/>
              <div className='products'>
                {cart.map((item) => {
                        return <PurchasedProducts data={item} key={item.id}/>})}
              </div>
              <div id='total' className='total_container'>
                <span className='total_txt'>TOTAL A PAGAR:</span><br/>        
                <span className='total_number'>${totalPrice}</span><br/>        
              </div>
            </div>
            </Form>
        </div>
        {purchaseLoading === true ? <Loading/> : null }
        {checkOutAlert === true ? <CheckOutAlert ID={CheckOutID}/> : null}
        {checkOutAlert === true ?  <Link to="/Catalogo"><button className='btn_volver'>volver al catalogo</button></Link> : null}
        </Fragment>
    )
}

export default CheckOutForm

