import React from 'react'
import './ItemDetail.css'

export let stock;
export let valor = false;
export let valor_agregar = false;

const ItemDetail = ({item}) => {
    if (item.stock > 0){
        stock = "in stock";
        valor = false;
        valor_agregar = false;
    }
    else if (item.stock <= 0){
        stock = "not in stock"
        valor = true;
        valor_agregar = true;
        
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
                    <span class="detail_precio">${item.precio}</span>
                    <button className="btn_stock" disabled={valor}>{stock}</button>
                    <button disabled={valor_agregar}>agregar</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default ItemDetail
