import React, { useState, useEffect } from 'react';
import './metrics.css';

function EscuelaMetricsComponent() {
  const [totalEscuelas, setTotalEscuelas] = useState(0);
  const [escuela, setEscuela] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMetrics, setShowMetrics] = useState(false);
  const [selectedEscuela, setSelectedEscuela] = useState(null);

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

  const loadEscuelaDetails = async (escuelaId) => {
    try {
      const response = await fetch(`http://localhost:3002/api/escuela/${escuelaId}`);
      if (response.ok) {
        const escuelaData = await response.json();
        setSelectedEscuela(escuelaData.data);
      } else {
        console.error('Error al obtener detalles de la escuela');
      }
    } catch (error) {
      console.error('Error al obtener detalles de la escuela', error);
    }
  };

  return (
    <div className="metrics-container">
      <button className='titulo' onClick={toggleMetrics}>
        Mostrar Métricas de Escuelas
      </button>

      {showMetrics && (
        <div className="metrics-list-container">
          <div className="metrics-list">
            <p className='total'>TOTAL DE ESCUELAS: {totalEscuelas}</p>
            <ul className="product-list">
              {escuela.map((escuelaItem) => (
                <li key={escuelaItem.id}>
                  <a className="enlace"
                    href="#"
                    onClick={() => loadEscuelaDetails(escuelaItem.id)}
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    {escuelaItem.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="metrics-list-details">
            {selectedEscuela && (
              <div className="selected-escuela-details">
                <p className='description'>Nombre: {selectedEscuela.nombre}</p>
                <p className='description'>Descripción: {selectedEscuela.descripcion}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default EscuelaMetricsComponent;
