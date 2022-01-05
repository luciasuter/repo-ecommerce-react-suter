import React, {useContext, useState} from 'react'
import { CartContext } from "../../CartContext";
import {NavLink} from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'


// CSS
import "./NavBar.css";

// Components
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  const [cart] = useContext(CartContext)
  const [state, setState] = useState('home')

  const handleItemClick = ({ name }) => setState(name)

    return (
      <div className='NavBar'>
        <Segment inverted>
        <Menu inverted pointing secondary className='menu_links'>

        <Menu.Item> <span className='navbar_title'>ARTISTICA KUNSTLER </span></Menu.Item>

          <NavLink to="/">
            <Menu.Item
                name='home'
                active={state === 'home'}
                onClick={handleItemClick}
            />
          </NavLink>
          <NavLink to="/Catalogo"> 
            <Menu.Item
              name='catalogo'
              active={state === 'catalogo'}
              onClick={handleItemClick}
            />
          </NavLink>
          <NavLink to="/Contact">  
            <Menu.Item
              name='Contacto'
              active={state === 'Contacto'}
              onClick={handleItemClick}
            />
          </NavLink> 
            <Menu.Item>
          {cart.length === 0 ? null : <NavLink to="/Cart"><CartWidget /></NavLink>}
          </Menu.Item>
        
        </Menu>
      </Segment>
      </div>
    )
}

export default NavBar;

