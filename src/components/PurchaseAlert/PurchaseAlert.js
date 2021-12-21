import React from 'react'
import './PurchaseAlert.css'

const PurchaseAlert = ({ID}) => {
    return (
        <div className='alert_container'>
            <span>tu orden de compra fue recibida con exito. N° de compra: {ID}</span>
        </div>
    )
}

export default PurchaseAlert
