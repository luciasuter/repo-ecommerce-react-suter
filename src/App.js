import { Fragment} from 'react';
import './App.css';

// React Rounter Dom 6.0.2 (4)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// views
import Home from "./views/Home/Home";
import Catalogo from "./views/Catalogo/Catalogo";
import Contact from "./views/Contact/Contact";
import ItemDetailPage from "./views/ItemDetailPage/ItemDetailPage";
import Cart from "./views/Cart/Cart";


// Components
import NavBar from './components/NavBar/NavBar';

// context
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
            <Route path="/Producto/:id" element={<ItemDetailPage />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Fragment>
      </Router>
    </CartProvider>
    
  );
}

export default App; 

