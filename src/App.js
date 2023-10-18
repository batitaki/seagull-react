import React from 'react';
import Navbar from './components/navbar/Navbar';
import MetricsPadre from './components/metrics/metricsPadre'
import './App.css';

function App() {
  return (
    <body>
    <div className="App">
      <div className='headerParent'>
        <Navbar />
      </div>
      <MetricsPadre />
    </div>
    </body>
  );
}

export default App;
