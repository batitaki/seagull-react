import React from 'react';
import EscuelaMetrics from './escuelaMetrics';
import ProductMetrics from './productMetrics';
import './MetricsPadre.css';

function MetricsPadre() {
  return (
    <div className="parent-container">
        <ProductMetrics />
       <EscuelaMetrics />
    </div>
  );
}

export default MetricsPadre;
