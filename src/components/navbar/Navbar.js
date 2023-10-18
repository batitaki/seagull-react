import React, { useState } from 'react';
import logo from './logoseagull.png';
import './Navbar.css';

function Navbar({ onEscuelaClick, onProductClick }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleNavbarAndOptions = (e) => {
    e.preventDefault();
    setExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'navbar-expanded' : ''}`}>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="" width="45" height="34" style={{ margin: '10px' }} />
        </a>
        <div className="navbar-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                id="artistasDropdown"
                onClick={toggleNavbarAndOptions}
              >
                |||||||||||
              </a>
              <div
                className={`art-options`}
                id="artOptions"
                style={{ display: isExpanded ? 'block' : 'none' }}
              >
                <a className="nav-link" href="#" onClick={onProductClick}>
                  Métricas de Productos
                </a>
                <a className="nav-link" href="#" onClick={onEscuelaClick}>
                  Métricas de Escuelas
                </a>
                {/* Resto de tus opciones */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
