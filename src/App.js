import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductMetricsComponent from './components/metrics/productMetrics'; 
import EscuelaMetricsComponent from './components/metrics/escuelaMetrics'; 
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

      {showProductMetrics && <ProductMetricsComponent />}
      {showEscuelaMetrics && <EscuelaMetricsComponent />} 
    </div>
  );
}

export default App;
