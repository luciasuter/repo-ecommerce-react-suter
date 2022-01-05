import React, {Fragment} from 'react'
import MarcaNavbar from '../../../../components/MarcaNavbar/MarcaNavbar'
import TypeContainer from '../../../../components/TypeContainer/TypeContainer'
import '../Marca.css'

const Marcas = () => {
    return (
        <Fragment>
            <MarcaNavbar/>
            <div className='marca_container'>
                <TypeContainer/>
            </div>
        </Fragment>
    )
}

export default Marcas
