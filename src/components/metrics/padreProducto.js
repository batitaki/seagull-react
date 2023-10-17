import React from 'react';
import './padreProducto.css';
import ProductMetrics from './productMetrics';

function ProductMetricsPadre() {
  return (
    <div className="metrics-parent-container">
      <div className="metrics-container-right">
        <ProductMetrics />
      </div>
    </div>
  );
}

export default ProductMetricsPadre;
