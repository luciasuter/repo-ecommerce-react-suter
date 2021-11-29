import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";

export let stock;
export let valor_stock = false;
export let valor_agregar = false;

const Item = ({data, img}) => {

    if (data.stock > 0){
        stock = "in stock";
        valor_stock = false;
        valor_agregar = false;
    }
    else if (data.stock <= 0){
        stock = "not in stock"
        valor_stock = true;
        valor_agregar = true;
    }
    return (
        
            <div className="item_container">
                    <div className="item_titulo">
                        <h4>{data.producto}</h4>
                    </div>
                    <div className="item_info">
                        <div  className ="item-img">
                            <img  src={img} alt={`imagen-producto-${data.id}`}/>
                        </div>
                        <div className="btns">
                            <button>${data.precio}</button>
                            <button disabled={valor_stock}>{stock}</button>
                            <button disabled={valor_agregar}>agregar</button>
                            <Link to={`/Producto/${data.id}`}><button>ver mas info</button></Link>
                        </div>
                    </div>
                    
            </div>
        
    )
}

export default Item;
