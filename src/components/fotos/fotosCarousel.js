import React from 'react';
import './fotosCarousel.css';

import imagen1 from './carousel.jpg'; 
import imagen2 from './900_Surf-Posters_PRINT_26.jpg';
import imagen3 from './vintage.jpg'; 

function FotosCarousel() {
  const carouselStyle = {
    margin: '25px', 
    width: 'calc(100% - 55px)', 
  };

  return (
    <div id="fotosCarousel" className="carousel slide" data-bs-ride="carousel" style={carouselStyle} data-interval="3000">
      <div className="carousel-inner d-flex align-items-center justify-content-center">
        <div className="carousel-item active">
          <img src={imagen1} alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src={imagen2} alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src={imagen3} alt="Imagen 3" />
        </div>
      </div>
     
      <a className="carousel-control-next" href="#fotosCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" ariahidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </a>
    </div>
  );
}

export default FotosCarousel;
