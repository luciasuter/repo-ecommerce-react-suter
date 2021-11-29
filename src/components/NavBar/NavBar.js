import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {NavLink} from 'react-router-dom'
import {FiPenTool} from 'react-icons/fi'

const NavBar = () => {
  return (
    <nav className="NavBar">

      <div className="container_titulo">
      <FiPenTool size={20}/>
        <NavLink to="/" className="titulo">Artistica Kunstler </NavLink>
        
        </div>

      <ul>
      <li>
          
        </li>
        <li>
          <NavLink to="/" className="Link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Catalogo" className="Link">Catalogo</NavLink>
        </li>
        <li>
          <NavLink to="/Contacto" className="Link">Contacto</NavLink>
        </li>
        <li><CartWidget /></li>
      </ul>
      
      
    </nav>
  );
};
export default NavBar;



