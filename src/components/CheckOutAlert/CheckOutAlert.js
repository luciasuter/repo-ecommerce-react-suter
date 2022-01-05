import React from 'react'
import { Message } from 'semantic-ui-react'
import './CheckOutAlert.css'

const CheckOutAlert = ({ID}) => {
    return (
        <Message
        success
        className='ui list'>
            <div id="msg_title" className="ui medium header">Tu orden de compra fue registrada con exito.</div>
            <div className="item">N° de compra: ${ID}</div>
            <div className="item">Para mas informacion, revisa tu casilla de correo</div>

        </Message>
    )
}

export default CheckOutAlert

