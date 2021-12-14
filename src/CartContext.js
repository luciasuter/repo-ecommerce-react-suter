import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const AddProduct = (id, name, price, quantity, total_price  ) =>{
        const AddItem = {id: id, nombre: name, precio_unidad: price, cant: quantity, precio_total: total_price}
        FilterProduct(AddItem)
    }

    const FilterProduct = (item) =>{
        const CartTest = cart.filter(product => product.id === item.id)
        if (CartTest.length === 0){
            console.log("vacio")
            setCart(prevItems => [...prevItems, item]);
            console.log("no + vacio")
        }
    
        if (CartTest.length !== 0){
            console.log("no esta vacio")
            let FindItem = CartTest.find(product => product.id === item.id)
            const cantidadAnterior = Object.values(FindItem)[3]
            console.log(cantidadAnterior)
            for (let i = cart.length - 1; i >= 0; --i) {
                if (cart[i].id === item.id) {
                cart.splice(i,1)}
            }
            let AddItemAgain = {id: item.id, nombre: item.nombre, precio_unidad: item.precio_unidad, cant: (item.cant + cantidadAnterior), precio_total: (item.precio_unidad * (item.cant + cantidadAnterior))}
            console.log(AddItemAgain)
            setCart(prevItems => [...prevItems, AddItemAgain]);
        }
    };
    
    return (
        <CartContext.Provider value={[cart, setCart, AddProduct, FilterProduct]}>
            {children}
        </CartContext.Provider>
    );

};


