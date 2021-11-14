import { Fragment } from 'react';
import './App.css';

// components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer 
      greeting="¡Bienvenido a mi libreria artistica!"
      />
    </Fragment>
  );
}

export default App; 

