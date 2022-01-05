import React from 'react'
import './ItemDetail.css'
import { List } from 'semantic-ui-react'


import Counter from '../Counter/Counter'

export let stock;
export let valor = false;

export let Item;


const ItemDetail = ({data}) => {


    if (data.stock > 0){
        stock = "in stock";
        valor = false;
    }
    else if (data.stock <= 0){
        stock = "not in stock"
        valor = true;
        
    }

    Item ={
        id: data.id,
        nombre: data.producto,
        precio: data.precio,
        z_img: data.imagen
    };

    return (
        
        <div className={`item_id_${data.id} item_detail`}>
            
            <div className="img_container">
                <div className="item_detail_img">
                <img src={`${data.imagen}`} alt={`imagen-producto-${data.id}`}/>
                </div>
            </div>
            <div className="txt_container">
                <h3 className="detail_titulo">{data.producto}</h3>
                <div className="txt_btns">
                    <span className="detail_precio">${data.precio}</span>
                    <button className="btn_stock" disabled={valor}>{stock}</button>
                </div>
                    
                <List bulleted horizontal>
                    <List.Item>{data.marca}</List.Item>
                    <List.Item>{data.tipo}</List.Item>
                    <List.Item>{data.origen}</List.Item>
                </List>
                
                <div className="counter_cont">
                    {data.stock === 0 ? null : <Counter stock={data.stock} initial="0"/>}
                    
                </div>
            </div>

        </div>


        
    )
}

export default ItemDetail
