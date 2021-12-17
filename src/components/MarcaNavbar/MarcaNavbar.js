import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import './MarcaNavbar.css'

const MarcaNavbar = () =>{
    return(
        <Fragment>
        <div className='MarcaNavbar'>
            <ul>
                <li className='Marca_title'><b>filtrar por marca</b></li>
                <Link to="/Marca/Copic" className="Marca_link">Copic</Link>
                <Link to="/Marca/Moleskine" className="Marca_link">Moleskine</Link>
                <Link to="/Marca/Winsor Newton" className="Marca_link">Winsor Newton</Link>
                <Link to="/Marca/Kuretake" className="Marca_link">Kuretake</Link>
                <Link to="/Marca/Pilot" className="Marca_link">Pilot</Link>
                <Link to="/Marca/Uniball" className="Marca_link">Uniball</Link>
                <Link to="/Marca/Otras" className="Marca_link">Otras</Link>


            </ul> 
        </div>
        </Fragment>
    );
};

export default MarcaNavbar;

