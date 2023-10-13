import React, { Component } from 'react';
import './metrics.css';

class EscuelaMetrics extends Component {
  constructor() {
    super();
    this.state = {
      totalEscuelas: 0,
      escuela: [],
      loading: true,
      showMetrics: false, // Agregamos un estado para controlar la visibilidad de las métricas
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3002/api/escuela');
      if (response.ok) {
        const data = await response.json();

        this.setState({
          totalEscuelas: data.total,
          escuela: data.data,
          loading: false,
        });
      } else {
        console.error('Error al obtener datos de la API');
        this.setState({
          loading: false,
        });
      }
    } catch (error) {
      console.error('Error al obtener datos de la API', error);
      this.setState({
        loading: false,
      });
    }
  }

  // Función para mostrar las métricas al hacer clic en el botón
  toggleMetrics = () => {
    this.setState({ showMetrics: !this.state.showMetrics });
  }

  render() {
    const { loading, totalEscuelas, escuela, showMetrics } = this.state;

    return (
      <div className="metrics-container">
        {/* Convertimos el título en un botón */}
        <button className='titulo' onClick={this.toggleMetrics}>
          Mostrar Métricas de Escuelas
        </button>

        {showMetrics && ( // Mostramos las métricas solo si showMetrics es true
          loading ? (
            <p>Cargando...</p>
          ) : (
            <div className="metrics-list">
              <p>Total de escuelas: {totalEscuelas}</p>
              <ul className="columns">
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
}

export default EscuelaMetrics;
