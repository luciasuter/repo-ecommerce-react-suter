import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartState = []

export const CartProvider = ({children}) =>{
const [items, setItems] = useState(CartState);


    return (
        <CartContext.Provider value={[items, setItems]}>
            {children}
        </CartContext.Provider>
    );

};
