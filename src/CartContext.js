import React, {createContext, useState} from 'react'
import { addItem } from './components/Counter/Counter';
import {datos} from './components/ItemDetail/ItemDetail'
import ItemCounter from './components/Counter/Counter'

export const CartContext = createContext();
export const CartState = []
let cantidadAnterior;


const AddProduct = () => {
	console.log(addItem)
    console.log(CartState)
    const array = CartState.filter(item => parseInt(item.id) === parseInt(addItem.id))
    if (array.length === 0){
        console.log("vacio")
        CartState.push(addItem)
        console.log("no + vacio")
        console.log(CartState)
      }

    if (array.length !== 0){
      console.log("no esta vacio")
      let ittem = array.find(item => item.id === addItem.id)
      cantidadAnterior = Object.values(ittem)[2]
      for (let i = CartState.length - 1; i >= 0; --i) {
          if (CartState[i].id === addItem.id) {
          CartState.splice(i,1);
          }
      }
      const addItemAgain = new ItemCounter(datos.id, datos.nombre, (cantidadAnterior + addItem.quantity), datos.precio, ((cantidadAnterior + addItem.quantity) * datos.precio))
        CartState.push(addItemAgain)
    }
}

const ClearCart = () => {
    CartState.length = 0;
}


export const CartProvider = ({children}) =>{
const [cart, setCart] = useState(CartState);

    return (
        <CartContext.Provider value={[cart, setCart, AddProduct, ClearCart]}>
            {children}
        </CartContext.Provider>
    );

};

