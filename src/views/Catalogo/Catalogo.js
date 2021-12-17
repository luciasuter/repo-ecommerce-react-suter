import React from 'react'
import './Catalogo.css'

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import MarcaNavbar from '../../components/MarcaNavbar/MarcaNavbar'

const Catalogo = () => {
    
    return (
        <div className='Catalogo'>
            <MarcaNavbar/>
            <ItemListContainer />
        </div>
    )
}

export default Catalogo;
