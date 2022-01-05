import React, {createContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const AddProduct = (id, name, price, quantity, total_price, z_img  )=>{
        const AddItem = {id: id, nombre: name, precio_unidad: price, cant: quantity, precio_total: total_price, z_img: z_img}
        FilterProduct(AddItem)
    }

    const FilterProduct = (item) =>{
        const CartTest = cart.filter(product => product.id === item.id)
        if (CartTest.length === 0){
            setCart(prevItems => [...prevItems, item]);
        }
    
        if (CartTest.length !== 0){
            let FindItem = CartTest.find(product => product.id === item.id)
            const cantidadAnterior = Object.values(FindItem)[3]
            for (let i = cart.length - 1; i >= 0; --i) {
                if (cart[i].id === item.id) {
                cart.splice(i,1)}
            }
            let AddItemAgain = {id: item.id, nombre: item.nombre, precio_unidad: item.precio_unidad, cant: (item.cant + cantidadAnterior), precio_total: (item.precio_unidad * (item.cant + cantidadAnterior)), z_img: item.z_img}

            setCart(prevItems => [...prevItems, AddItemAgain]);
        }
    };
    
    return (
        <CartContext.Provider value={[cart, setCart, AddProduct, FilterProduct]}>
            {children}
        </CartContext.Provider>
    );

};


