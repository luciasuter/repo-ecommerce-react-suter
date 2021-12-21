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
import Tipo from "./views/Categories/Tipo/Tipo"
import Purchase from './views/Purchase/Purchase';

// views/Marcas
import Otras from "./views/Categories/Marca/Otras/Otras";
/*
import Copic from "./views/Categories/Marca/Copic/Copic";
import Kuretake from "./views/Categories/Marca/Kuretake/Kuretake"
import Moleskine from "./views/Categories/Marca/Moleskine/Moleskine";
import Pilot from "./views/Categories/Marca/Pilot/Pilot";
import Uniball from "./views/Categories/Marca/Uniball/Uniball";
import WinsorNewton from "./views/Categories/Marca/WinsorNewton/WinsorNewton";
*/


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
            <Route path="/Marca/Otras" element={<Otras />} />
            <Route path="/Marca/:marca" element={<Tipo />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Purchase" element={<Purchase />} />

          </Routes>
        </Fragment>
      </Router>
    </CartProvider>
    
  );
}

export default App; 

