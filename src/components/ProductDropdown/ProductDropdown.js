import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './ProductDropdown.css'

const ProductDropdown = () => (
    <Dropdown text='Shopping' pointing className='link item' inverted>
      <Dropdown.Menu inverted secondary>
        <Dropdown.Header>categorias</Dropdown.Header>
        <Dropdown.Item>
          <Dropdown text='SETS'>
            <Dropdown.Menu className='dropdown_producto'>
              <Link to="/Productos/set de acuarelas"><Dropdown.Item>set de acuarelas</Dropdown.Item></Link>
              <Link to="/Productos/set de lapiceras"><Dropdown.Item>set de lapiceras</Dropdown.Item></Link>
              <Link to="/Productos/set de lapices"><Dropdown.Item>set de lapices</Dropdown.Item></Link>
              <Link to="/Productos/set de marcadores"><Dropdown.Item>set de marcadores</Dropdown.Item></Link>
              <Dropdown.Divider />
              <Link to="/Productos/set de pasteles"><Dropdown.Item>set de pasteles</Dropdown.Item></Link>
              <Link to="/Productos/set de pinceles"><Dropdown.Item>set de pinceles</Dropdown.Item></Link>
              <Link to="/Productos/set de pintura"><Dropdown.Item>set de pintura</Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>
        </Dropdown.Item>
        <Link to="/Productos/block de hojas"><Dropdown.Item>block de hojas</Dropdown.Item></Link>
        <Link to="/Productos/cuaderno liso"><Dropdown.Item>cuaderno liso</Dropdown.Item></Link>
        <Dropdown.Divider />
        <Link to="/Productos/lapiceras"><Dropdown.Item>lapiceras</Dropdown.Item></Link>
        <Link to="/Productos/lapiz mecanico"><Dropdown.Item>lapiz mecanico</Dropdown.Item></Link>
        <Link to="/Productos/marcadores"><Dropdown.Item>marcadores</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
)

export default ProductDropdown

