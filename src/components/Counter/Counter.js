import React, { useState, useContext } from 'react'
import "./Counter.css";

import { Link } from "react-router-dom";
import {CartContext} from '../../CartContext'
import {Item} from '../ItemDetail/ItemDetail'
export let AddItem;

 function Counter ({stock, initial, onAdd}){
    let [cantidad, setCantidad] = useState(parseInt(initial));
    let [agregados, setAgregados] = useState(0)
    const [cart, setCart, AddProduct] = useContext(CartContext)
    
    
    function Sumar (){
      
      if (parseInt(stock) >= cantidad){
        document.getElementById("btn_sumar").disabled = true;
        document.getElementById("btn_restar").disabled = false;
    }

    if(parseInt(stock) > parseInt(cantidad)){
      document.getElementById("btn_sumar").disabled = false;
      document.getElementById("btn_restar").disabled = false;
      setCantidad(cantidad + 1)
    }
    }

    function Restar(){
      if(cantidad === 0){
        document.getElementById("btn_restar").disabled = true;
        document.getElementById("btn_sumar").disabled = false;
      }
  
      else if(cantidad > 0){
        document.getElementById("btn_restar").disabled = false;
        document.getElementById("btn_sumar").disabled = false;
        setCantidad(cantidad - 1)
      }
      
    }

    function agregarArticulos(){
      onAdd = agregados+cantidad;
      setAgregados (onAdd)  
      /*AGREGO ARTICULOS*/
      if (parseInt(onAdd) <= parseInt(stock)){
        document.getElementById("btn_agregar").disabled = false;
        AddProduct(Item.id, Item.nombre, Item.precio, cantidad, (Item.precio * cantidad))
      }

      if (parseInt(onAdd) === parseInt(stock)){
        setAgregados (onAdd)
        document.getElementById("btn_agregar").disabled = true;
        document.getElementById("btn_agregar").innerHTML = "limite de stock";
        document.getElementById("btn_sumar").disabled = true;
        document.getElementById("btn_restar").disabled = true;
      }

      if (parseInt(onAdd) > parseInt(stock)){
        document.getElementById("btn_agregar").disabled = true;
        alert("no hay suficiente stock")
        document.getElementById("btn_agregar").disabled = false;
      }
    
    }



    return (
        <div className="Counter">
          <div className="container_counter">
            <button id="btn_sumar" onClick={Sumar}>+</button>
            <div className="container_cantidad">
              <span className="cantidad">{cantidad}</span>
            </div>
            <button id="btn_restar" onClick={Restar}>-</button>
          </div>
          <button id="btn_agregar" onClick={agregarArticulos}>agregar</button>
          <div className="container_counter_txt">
          <span>cantidad agregada: {agregados}</span> 
          <span>stock: {stock}</span>

          <div className="btns_bottom">
            {stock === 0 || agregados <= 0 ? null : <Link to="/Cart"><button id="btn_terminar">terminar compra</button></Link>}
            <Link to="/Catalogo"><button id="btn_counter_volver">volver al catalogo</button></Link>
          </div>
          
          </div>
        </div>
    )
}

export default Counter;

