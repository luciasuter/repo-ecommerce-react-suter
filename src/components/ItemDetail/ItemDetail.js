import React from 'react'
import './ItemDetail.css'

import { Link } from "react-router-dom";


import Counter from '../Counter/Counter'

export let stock;
export let valor = false;


const ItemDetail = ({item}) => {

    if (item.stock > 0){
        stock = "in stock";
        valor = false;
    }
    else if (item.stock <= 0){
        stock = "not in stock"
        valor = true;
        
    }

    

    return (
        <div className={`item_id_${item.id} item_detail_container`}>
            <div className="img_container">
                <div className="item_detail_img">
                <img src={`${item.foto}`} alt={`imagen-producto-${item.id}`}/>
                </div>
            </div>
            <div className="txt_container">
                <h3 className="detail_titulo">{item.producto}</h3>        
                <ul className="txt_detail">
                    <li>producto: {item.tipo}</li>
                    <li>marca: {item.marca}</li>
                    <li>origen: {item.origen}</li>
                </ul>
                <div className="txt_btns">
                    <span className="detail_precio">${item.precio}</span>
                    <button className="btn_stock" disabled={valor}>{stock}</button>
                </div>
                <div className="counter_cont">
                {item.stock === 0 ? null : <Counter stock={item.stock} initial="0"/>}
                {item.stock === 0 ? null : <Link to="/Cart"><button id="btn_terminar">terminar compra</button></Link>}
                <Link to="/Catalogo"><button id="btn_counter_volver">volver al catalogo</button></Link>
                
                </div>
            </div>
            
            
            
        </div>
    )
}

export default ItemDetail
