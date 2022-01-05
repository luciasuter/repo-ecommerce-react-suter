import React from 'react'
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './NoElements.css'

const NoElements = () => {
    return(
        <div className='NoElements'>
            <Message
            icon='shopping cart'
            header='Tu carrito contiene 0 productos'
            content={<Link to="/Catalogo"><button className='btn_carrito'>ir al catalogo</button></Link>}
        />
        </div>
    )
    }

export default NoElements;