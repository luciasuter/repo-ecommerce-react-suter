import React, {useState } from 'react'
import { Menu, Header} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './MarcaNavbar.css'
import ProductDropdown from '../ProductDropdown/ProductDropdown'


const MarcaNavbar = () => {

    const [state, setState] = useState('home')

    const handleItemClick = ({ name }) => setState(name)
    return (
      <div className='MarcaNavbar'>
      <div className='segment_container'>
          
        <Menu inverted secondary className='marcaNavbar'>

        <Link to="/Marca/Copic">
            <Menu.Item
                name='Copic'
                active={state === 'Copic'}
                onClick={handleItemClick}
            />
        </Link>
        <Link to="/Marca/Moleskine">
            <Menu.Item
                name='Moleskine'
                active={state === 'Moleskine'}
                onClick={handleItemClick}
            />
        </Link>
        <Link to="/Marca/Winsor Newton">
            <Menu.Item
                name='Winsor Newton'
                active={state === 'Winsor Newton'}
                onClick={handleItemClick}
            />
        </Link>
        <Link to="/Marca/Kuretake">
            <Menu.Item
                name='Kuretake'
                active={state === 'Kuretake'}
                onClick={handleItemClick}
            />
        </Link>
        <Link to="/Marca/Pilot">
            <Menu.Item
                name='Pilot'
                active={state === 'Pilot'}
                onClick={handleItemClick}
            />
        </Link>
        <Link to="/Marca/Uniball">
            <Menu.Item
                name='Uniball'
                active={state === 'Uniball'}
                onClick={handleItemClick}
            />
        </Link>
        <Link to="/Marca/Otras">
            <Menu.Item
                name='Otras'
                active={state === 'Otras'}
                onClick={handleItemClick}
            />
        </Link>
            <div> <ProductDropdown /></div>
        </Menu>
      </div>
      </div>
    )
  }
export default MarcaNavbar;

