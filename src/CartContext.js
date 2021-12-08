import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartState = []

export const CartProvider = ({children}) =>{
const [cart, setCart] = useState(CartState);


    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );

};
