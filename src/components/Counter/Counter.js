import React, { useState } from 'react'
import "./Counter.css";

import {CartState} from '../../CartContext'


 function Counter ({stock, initial, onAdd}){
    let [cantidad, setCantidad] = useState(parseInt(initial));
    let [agregados, setAgregados] = useState(0)
    
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
      
      /*AGREGO ARTICULOS */ 
      if (onAdd <= parseInt(stock)){
        document.getElementById("btn_agregar").disabled = false;
        setAgregados (onAdd)
        alert(`¡agregaste ${cantidad} articulos nuevos a tu carrito!\ncantidad total de articulos agregados: ${onAdd} `)
        CartState.push('hello world')
        console.log(CartState)
      }

      if (onAdd === parseInt(stock)){
        setAgregados (onAdd)
        document.getElementById("btn_agregar").disabled = true;
        document.getElementById("btn_agregar").innerHTML = "limite de stock";
        document.getElementById("btn_sumar").disabled = true;
        document.getElementById("btn_restar").disabled = true;
    
      }

      if (onAdd > parseInt(stock)){
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
          
          </div>
        </div>
    )
}

export default Counter;

