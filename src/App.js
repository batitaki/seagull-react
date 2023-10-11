import React from 'react';
import EscuelasList from './components/escuelasList'; // Asegúrate de que la ruta sea correcta
import ProductMetrics from './components/productMetrics'; // Importa el componente ProductMetrics

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Otras partes de tu aplicación */}
        <EscuelasList /> {/* Aquí incluyes el componente EscuelasList */}
        <ProductMetrics /> {/* Aquí incluyes el componente ProductMetrics */}
      </header>
    </div>
  );
}

export default App;
