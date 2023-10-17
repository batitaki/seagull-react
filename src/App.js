import React from 'react';
import Navbar from './components/navbar/Navbar'; // Corregir el nombre del componente
import ProductMetrics from './components/metrics/productMetrics'; // Importa el componente ProductMetrics
import EscuelaMetrics from './components/metrics/escuelaMetrics'
import './App.css';
function App() {
  return (
    <body>
      
    <div className="App">
      <header className="App-header">
        <Navbar />
       </header>
        <ProductMetrics />
        <EscuelaMetrics/>
    </div>
    </body>
  );
}

export default App;
