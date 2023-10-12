import React from 'react';
import EscuelaMetrics from './components/metrics/escuelaMetrics';
import ProductMetrics from './components/metrics/productMetrics'; 
import Navbar from './components/navbar/Navbar'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <EscuelaMetrics />
        <ProductMetrics />
      </header>
    </div>
  );
}

export default App;
