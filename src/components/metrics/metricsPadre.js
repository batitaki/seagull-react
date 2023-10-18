import React, { useState } from 'react';
import './metricsPadre.css';

function MetricsPadre() {
  const [showProductMetrics, setShowProductMetrics] = useState(false);
  const [showEscuelaMetrics, setShowEscuelaMetrics] = useState(false);

  const toggleProductMetrics = () => {
    setShowProductMetrics(!showProductMetrics);
    setShowEscuelaMetrics(false); // Asegúrate de ocultar las métricas de escuelas al mostrar las de productos.
  };

  const toggleEscuelaMetrics = () => {
    setShowEscuelaMetrics(!showEscuelaMetrics);
    setShowProductMetrics(false); // Asegúrate de ocultar las métricas de productos al mostrar las de escuelas.
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
