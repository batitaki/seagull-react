import React from 'react';
import EscuelasList from './components/escuelasList'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Otras partes de tu aplicación */}
        <EscuelasList /> {/* Aquí incluyes el componente EscuelasList */}
      </header>
    </div>
  );
}

export default App;
