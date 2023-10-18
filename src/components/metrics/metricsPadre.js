import React, { useState } from 'react';

function MetricsPadre() {
  const [showProductMetrics, setShowProductMetrics] = useState(false);
  const [showEscuelaMetrics, setShowEscuelaMetrics] = useState(false);

  const toggleProductMetrics = () => {
    setShowProductMetrics(!showProductMetrics);
    setShowEscuelaMetrics(false); 
  };

  const toggleEscuelaMetrics = () => {
    setShowEscuelaMetrics(!showEscuelaMetrics);
    setShowProductMetrics(false); 
  };

  return (
    <div className="parent-container">
      <div className="metrics-buttons">
        <button onClick={toggleProductMetrics}>Mostrar Métricas de Productos</button>
        <button onClick={toggleEscuelaMetrics}>Mostrar Métricas de Escuelas</button>
      </div>

      {showProductMetrics && <ProductMetricsComponent />}
      {showEscuelaMetrics && <EscuelaMetricsComponent />}
    </div>
  );
}

export default MetricsPadre;
