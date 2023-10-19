import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductMetricsComponent from './components/metrics/productMetrics'; 
import EscuelaMetricsComponent from './components/metrics/escuelaMetrics'; 
import FotosCarousel from './components/fotos/fotosCarousel'; // Importa el componente FotosCarousel
import backgroundImage from './imagen-fondo.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa los scripts de Bootstrap
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
      <img src={backgroundImage} alt="" style={{ width: '100%', height: '190vh', position:'absolute', top: 0, left: 0, zIndex: -1 }} />
      {showProductMetrics && <ProductMetricsComponent style={{ zIndex: 1 }} />} 
      {showEscuelaMetrics && <EscuelaMetricsComponent style={{ zIndex: 1 }} />} {/* Corrección */}
      {showCarousel && <FotosCarousel />} {/* Muestra FotosCarousel cuando showCarousel es true */}
    </div>
  );
}

export default App;
