import React, { Component } from 'react';

class ProductMetrics extends Component {
  constructor() {
    super();
    this.state = {
      totalProductos: 0,
      producto: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3002/api/producto'); // Reemplaza la URL con la URL correcta de tu backend
      if (response.ok) {
        const data = await response.json();
  
        this.setState({
          totalProductos: data.total,
          producto: data.data, // Asegúrate de que "data" se esté inicializando correctamente
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
  
  render() {
    const { loading, totalProductos, producto } = this.state;

    if (loading) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <h1>Métricas de Productos</h1>
        <p>Total de productos: {totalProductos}</p>
        <ul>
          {producto.map(producto => (
            <li key={producto.id}>{producto.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductMetrics;
