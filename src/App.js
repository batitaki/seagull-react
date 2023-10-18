import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductMetricsComponent from './components/metrics/productMetrics'; 
import EscuelaMetricsComponent from './components/metrics/escuelaMetrics'; 
import backgroundImage from './imagen-fondo.jpg'; 
import './App.css';

function App() {
  const [showProductMetrics, setShowProductMetrics] = useState(false);
  const [showEscuelaMetrics, setShowEscuelaMetrics] = useState(false);

  const handleProductClick = () => {
    setShowProductMetrics(true);
    setShowEscuelaMetrics(false);
  };

  const handleEscuelaClick = () => {
    setShowProductMetrics(false);
    setShowEscuelaMetrics(true);
  };

  return (
    <div className="App">
      <div className='headerParent'>
        <Navbar onProductClick={handleProductClick} onEscuelaClick={handleEscuelaClick} />
      </div>
      <img src={backgroundImage} alt="" style={{ width: '100%', height: '190vh', position:'absolute', top: 0, left: 0, zIndex: -1 }} />
      {showProductMetrics && <ProductMetricsComponent style={{ zIndex: 1 }} />} 
      {showEscuelaMetrics && <EscuelaMetricsComponent style={{ zIndex: 1 }} />}
    </div>
  );
}

export default App;
