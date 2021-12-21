import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'
import {totalPrice} from '../CartDetail/CartDetail'
import {CartContext} from '../../CartContext'
import PurchasedProducts from '../PurchasedProducts/PurchasedProducts';
import PurchaseAlert from '../PurchaseAlert/PurchaseAlert';




const PurchaseForm = () => {
    const [cart, setCart] = useContext(CartContext)

    const initialState = {
        name: '',
        last: '',
        email: '',
        products: cart,
        total: totalPrice
      };

    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value});
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(values);
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, 'purchases'), {
      values
    });
    console.log('Document written with ID: ', docRef.id);
    setPurchaseID(docRef.id)
    document.getElementById('btn_comprar').remove()
    setCart([])
    setValues(initialState)
    document.getElementById('total').remove()
    

  };
  
    return (
        <div className='form_container'>
            <form onSubmit={onSubmitHandler}>
            <div className='Product_container'>
            {cart.map((item) => {
                    return <PurchasedProducts data={item} key={item.id}/>})}
            </div>
            <span id='total'>TOTAL A PAGAR: ${totalPrice}</span><br/>
            <label>First name:</label>
                <input name='name' value={values.name} placeholder=' name' onChange={onChangeHandler} />
                <br />
                <br />
                <label>Last name:</label>
                <input name='last' value={values.last} placeholder=' last name' onChange={onChangeHandler} />
                <br />
                <br />
                <label>email:</label>
                <input name='email' value={values.email} placeholder=' email' onChange={onChangeHandler} />
                <br />
                <br />
                <button id='btn_comprar'>COMPRAR</button>
                
            </form>
            {purchaseID === '' ? null : <PurchaseAlert ID={purchaseID}/> }
            {cart.length === 0 ? <Link to="/Catalogo"><button>volver al catalogo</button></Link> : null}
        </div>
    )
}

export default PurchaseForm
