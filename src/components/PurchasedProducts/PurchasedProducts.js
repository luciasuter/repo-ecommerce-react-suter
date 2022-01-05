import React, {Fragment} from 'react'
import './PurchasedProducts.css'

const PurchasedProducts = ({data}) => {


    return (
        <Fragment>
            <div className={`Product_${data.id} PurchasedProducts`}>  
                    <div className='purchased_img'><img src={`${data.z_img}`} alt={`imagen-producto-${data.id}`}/></div>
                    <ul>
                        <li className='purchased_name'>{data.nombre} </li>
                        <li className='purchased_qty'>Cant:  {data.cant}</li>
                    </ul> 
                    <span className='purchased_price'>${data.cant * data.precio_unidad}</span>    
            </div>
        </Fragment>
    )
}

export default PurchasedProducts

