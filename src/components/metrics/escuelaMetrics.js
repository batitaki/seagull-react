import React, { useState, useEffect } from 'react';
import './metrics.css';


function EscuelaMetricsComponent() {
  const [totalEscuelas, setTotalEscuelas] = useState(0);
  const [escuela, setEscuela] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMetrics, setShowMetrics] = useState(false);

  useEffect(() => {
    async function fetchEscuelaData() {
      try {
        const response = await fetch('http://localhost:3002/api/escuela');
        if (response.ok) {
          const data = await response.json();
          setTotalEscuelas(data.total);
          setEscuela(data.data);
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

    fetchEscuelaData();
  }, []);

  const toggleMetrics = () => {
    setShowMetrics(!showMetrics);
  };

  return (
    <div className="metrics-container">
      <button className='titulo' onClick={toggleMetrics}>
        Mostrar Métricas de Escuelas
      </button>

      {showMetrics && (
        loading ? (
          <p>Cargando...</p>
        ) : (
          <div className="metrics-list">
            <p className='total'>TOTAL DE ESCUELAS: {totalEscuelas}</p>
            <ul className="product-list">
              {escuela.map((escuela, index) => (
                <li key={escuela.id}>{escuela.nombre}</li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
}


export default EscuelaMetricsComponent;
