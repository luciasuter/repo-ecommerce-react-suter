import { Fragment} from 'react';
import './App.css';

// React Rounter Dom 6.0.2 (4)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// Views
import Home from "./views/Home/Home";
import Catalogo from "./views/Catalogo/Catalogo";
import Contact from "./views/Contact/Contact";
import Item from "./views/ItemDetailPage/ItemDetailPage";
import Cart from "./views/Cart/Cart";
import Marcas from './views/Categories/Marca/Marcas/Marcas';
import Tipos from './views/Categories/Tipos/Tipos'
import Otras from "./views/Categories/Marca/Otras/Otras";
import CheckOut from './views/CheckOut/CheckOut';


// Components
import NavBar from './components/NavBar/NavBar';

// Context
import {CartProvider} from './CartContext'

function App() {

  return (
    <CartProvider>
      <Router>
          <Fragment>
            <NavBar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Catalogo" element={<Catalogo />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Producto/:id" element={<Item />} />
            <Route path="/Marca/Otras" element={<Otras />} />
            <Route path="/Marca/:marca" element={<Marcas />} />
            <Route path="/Productos/:tipo" element={<Tipos />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut />} />
          </Routes>
        </Fragment>
      </Router>
    </CartProvider>
    
  );
}

export default App; 

