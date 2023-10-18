import React, { useState, useEffect } from 'react';
import './metrics.css';

function ProductMetrics() {
  const [totalProductos, setTotalProductos] = useState(0);
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch('http://localhost:3002/api/producto');
        if (response.ok) {
          const data = await response.json();
          setTotalProductos(data.total);
          setProducto(data.data);
          setLoading(false);
        } else {
          console.error('Error al obtener datos de la API');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
        setLoading(false);
      }
    }

    fetchProductData();
  }, []);

  const toggleMetrics = () => {
    setShowMetrics(!showMetrics);
  };

  return (
    <div className="metrics-container">
      <button className='titulo' onClick={toggleMetrics}>
        Mostrar Métricas de Productos
      </button>

      {showMetrics && (
        loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="metrics-list">
            <p className='total'>TOTAL DE PRODUCTOS: {totalProductos}</p>
            <ul className="product-list">
              {producto.map((product, index) => (
                <li key={product.id}>{product.nombre}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}

export default ProductMetrics;
