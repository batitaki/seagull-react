import React, { useState, useEffect } from 'react';
import './metricsPadre.css';

function ProductMetricsComponent() {
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
          console.log('Respuesta de la API:', data);
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

  // Código para agrupar productos por categoría
  const productosPorCategoria = {};

  producto.forEach((product) => {
    const { categoria } = product;
    if (!productosPorCategoria[categoria]) {
      productosPorCategoria[categoria] = [];
    }
    productosPorCategoria[categoria].push(product);
  });

  return (
    <div className="metrics-container">
      <button className="titulo" onClick={toggleMetrics}>
        Mostrar Métricas de Productos
      </button>

      {showMetrics && (
        loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="metrics-list">
            <p className="total">TOTAL DE PRODUCTOS: {totalProductos}</p>
            {Object.keys(productosPorCategoria).map((categoria) => (
              <div key={categoria}>
                <h2>Categoría: {categoria}</h2>
                <ul className="product-list">
                  {productosPorCategoria[categoria].map((product) => (
                    <li key={product.id}>
                      {product.nombre} - Categoría: {product.categoria}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default ProductMetricsComponent;
