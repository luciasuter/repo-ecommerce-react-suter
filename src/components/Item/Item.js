import React from 'react'
import "./Item.css"

import "../assets/00.jpg"

export let stock;
const Item = ({data, img}) => {

    if (data.stock > 0){
        stock = "in stock";
    }
    else if (data.stock <= 0){
        stock = "not in stock"
    }
    return (
        <div className="item_container">
            
            <h4>{data.producto}</h4>
            <ul>
                <li>marca: {data.marca}</li>
                <li>origen: {data.origen}</li>
                <li><button>{stock}</button></li>  
            </ul>
            <div  className ="item-img">
            <img  src={img} alt='imagen-producto'></img>
            </div>
            <div className="btns">
            <button>${data.precio}</button>
            <button>ver mas informacion</button>
            </div>
        </div>
    )
}

export default Item;