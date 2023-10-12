import React, { Component } from 'react';

class EscuelaMetrics extends Component {
  constructor() {
    super();
    this.state = {
      totalEscuelas: 0,
      escuela: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3002/api/escuela'); // Reemplaza la URL con la URL correcta de tu backend
      if (response.ok) {
        const data = await response.json();

        this.setState({
          totalEscuelas: data.total,
          escuela: data.data, // Asegúrate de que "data" se esté inicializando correctamente
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
    const { loading, totalEscuelas, escuela } = this.state;

    if (loading) {
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <h1>Métricas de Escuelas</h1>
        <p>Total de escuelas: {totalEscuelas}</p>
        <ul>
          {escuela.map(escuela => (
            <li key={escuela.id}>{escuela.nombre}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EscuelaMetrics;
