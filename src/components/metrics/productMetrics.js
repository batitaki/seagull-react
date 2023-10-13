import React, { Component } from 'react';
import './metrics.css';

class ProductMetrics extends Component {
  constructor() {
    super();
    this.state = {
      totalProductos: 0,
      producto: [],
      loading: true,
      showMetrics: false, // Agregamos un estado para controlar la visibilidad de las métricas
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3002/api/producto');
      if (response.ok) {
        const data = await response.json();

        this.setState({
          totalProductos: data.total,
          producto: data.data,
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
    const { loading, totalProductos, producto, showMetrics } = this.state;

    return (
      <div className="metrics-container">
        {/* Convertimos el título en un botón */}
        <button className='titulo' onClick={this.toggleMetrics}>
          Mostrar Métricas de Productos
        </button>

        {showMetrics && ( // Mostramos las métricas solo si showMetrics es true
          loading ? (
            <p>Cargando...</p>
          ) : (
            <div className="metrics-list">
              <p>Total de productos: {totalProductos}</p>
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
}

export default ProductMetrics;
