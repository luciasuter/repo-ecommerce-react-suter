import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";
import { RiPriceTagLine } from 'react-icons/ri';
import { IoAddCircleSharp } from 'react-icons/io5'

export let stock;
export let valor_stock = false;
let class_btn;


const Item = ({data}) => {

    if (data.stock > 0){
        stock = "in stock";
        valor_stock = false;
        class_btn = "btn";
        
    }
    else if (data.stock <= 0){
        stock = "not in stock"
        valor_stock = true;
        class_btn = "btn btn_disabled"
        
    }
    return (
        
            <div className="item_container">
                <span className="item_precio"><RiPriceTagLine/> ${data.precio}</span>
                <div  className ="item-img">
                            <img  src={data.imagen} alt={`imagen-producto-${data.id}`}/>
                        </div>
                    <div className="item_info">
                        <div className="item_titulo">
                            <h4>{data.producto}</h4>
                        </div>
                        <div className="btns">
                                <div disabled={valor_stock} className={class_btn}>{stock}</div>
                                <Link to={`/Producto/${data.id}`}><div  className='btn info_btn'> <IoAddCircleSharp/> <span>info</span></div></Link>
                        </div>
                    </div>
                    
                    
            </div>
        
    )
}

export default Item;
