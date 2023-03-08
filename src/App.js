
import milogo from './imagenes/milogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
      <img
      className="mi-logo"
      src={milogo}
      alt="logo con import"
     />    
      </div>
      <div className="contenedor-principal">
        
      </div>
    </div>
  );
}

export default App;
