import React from 'react'
import { Link } from 'react-router-dom';

const NoElements = () => {
    return(
        <div className='NoElements'>
            <span>Tu carrito contiene 0 productos</span><br/>
            <Link to="/Catalogo"><button>ir al catalogo</button></Link>

        </div>
    )
}

export default NoElements;