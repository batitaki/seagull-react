import React from 'react';
import EscuelaMetricsPadre from './escuelaMetricsPadre';
import ProductMetricsPadre from './padreProducto';
import './MetricsPadre.css';

function MetricsPadre() {
  return (
    <div className="parent-container">
      <EscuelaMetricsPadre />
      <ProductMetricsPadre />
    </div>
  );
}

export default MetricsPadre;
