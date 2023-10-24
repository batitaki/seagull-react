import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductMetricsComponent from './components/metrics/productMetrics'; 
import EscuelaMetricsComponent from './components/metrics/escuelaMetrics'; 
import FotosCarousel from './components/fotos/fotosCarousel'; 
import backgroundImage from './imagen-fondo.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const [showProductMetrics, setShowProductMetrics] = useState(false);
  const [showEscuelaMetrics, setShowEscuelaMetrics] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  const handleProductClick = () => {
    setShowProductMetrics(true);
    setShowEscuelaMetrics(false);
    setShowCarousel(false);
  };

  const handleEscuelaClick = () => {
    setShowProductMetrics(false);
    setShowEscuelaMetrics(true);
    setShowCarousel(false);
  };

  const handleFotosClick = () => {
    setShowCarousel(true);
    setShowProductMetrics(false);
    setShowEscuelaMetrics(false);
  };

  return (
    <div className="App">
      <div className='headerParent'>
      <Navbar onProductClick={handleProductClick} onEscuelaClick={handleEscuelaClick} onFotosClick={handleFotosClick} />

      </div>
      <img src={backgroundImage} alt="" style={{ width: '100%', height: '210vh', position:'absolute', top: 0, left: 0, zIndex: -1 }} />
      {showProductMetrics && <ProductMetricsComponent style={{ zIndex: 1 }} />} 
      {showEscuelaMetrics && <EscuelaMetricsComponent style={{ zIndex: 1 }} />} 
      {showCarousel && <FotosCarousel />}
    </div>
  );
}

export default App;
