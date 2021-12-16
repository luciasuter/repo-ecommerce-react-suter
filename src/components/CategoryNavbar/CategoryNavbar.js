import React, {Fragment} from 'react'
import {Link} from 'react-dom'

const CategoryNavbar = () =>{
    return(
        <Fragment>
        <div className='CategoryNavbar'>
            <ul>
                <li><b>filtrar por marca</b></li>
                <Link to="/"className="category_link">Copic</Link>
                <Link to="/"className="category_link">Moleskine</Link>
                <Link to="/"className="category_link">Winsor & Newton</Link>
                <Link to="/"className="category_link">Kuretake</Link>
                <Link to="/"className="category_link">Pilot</Link>
                <Link to="/"className="category_link">Uniball</Link>

            </ul>
        </div>
        </Fragment>
    );
};

export default CategoryNavbar;