import React from 'react';
import Navbar from './components/navbar/Navbar';
import MetricsPadre from './components/metrics/metricsPadre'
import './App.css';

function App() {
  return (
    <body>
    <div className="App">
      <div className='headerParent'>
      <header className="App-header">
        <Navbar />
      </header>
      </div>
      <MetricsPadre />
    </div>
    </body>
  );
}

export default App;
