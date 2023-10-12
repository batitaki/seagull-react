import React from 'react';
import EscuelaMetrics from './components/escuelaMetrics';
import ProductMetrics from './components/productMetrics'; // Importa el componente ProductMetrics

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductMetrics /> {/* Aquí incluyes el componente ProductMetrics */}
        <EscuelaMetrics/>
      </header>
    </div>
  );
}

export default App;
