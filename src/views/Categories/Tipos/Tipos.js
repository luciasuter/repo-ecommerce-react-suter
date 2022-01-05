import React, {Fragment} from 'react'
import MarcaNavbar from '../../../components/MarcaNavbar/MarcaNavbar'
import ContainerTipo from '../../../components/ContainerTipo/ContainerTipo'
import '../Marca/Marca.css'

const Marcas = () => {
    return (
        <Fragment>
            <MarcaNavbar/>
            <div className='tipo_container'>
                <ContainerTipo/>
            </div>
        </Fragment>
    )
}

export default Marcas
