import React, { useState } from 'react'
import "./Counter.css";

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
      
      if (onAdd < parseInt(stock)){
        document.getElementById("btn_agregar").disabled = false;
        setAgregados (onAdd)
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
          <div className="counter_txt">
            <h4>Articulo N 1</h4>
            <span>descripcion del articulo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
          </div>
          <div className="container_counter">
            <button id="btn_sumar" onClick={Sumar}>+</button>
            <div className="container_cantidad">
              <span className="cantidad">{cantidad}</span>
            </div>
            <button id="btn_restar" onClick={Restar}>-</button>
          </div>
          <button id="btn_agregar" onClick={agregarArticulos}>agregar</button>
          <span>cantidad de articulos agregados: {agregados}</span>
        </div>
    )
}

export default Counter;

