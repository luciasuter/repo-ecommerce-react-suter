import { Fragment } from 'react';
import './App.css';

// React Rounter Dom 6.0.2 (4)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// views
import Home from "./views/Home";
import Catalogo from "./views/Catalogo";
import Contact from "./views/Contact";
import ItemDetailPage from "./views/ItemDetailPage";


// Components
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <Router>
        <Fragment>
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Producto/:id" element={<ItemDetailPage />} />
        </Routes>
      </Fragment>
    </Router>
    
  );
}

export default App; 

