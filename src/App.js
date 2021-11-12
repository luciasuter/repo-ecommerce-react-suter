import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
    <div className="App">
      <header className="App-header">
        <p>
          
          bienvenido a mi libreria artistica
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Fragment>
  );
}

export default App;