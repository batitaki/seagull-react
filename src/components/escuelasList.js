import React, { useState, useEffect } from 'react';

function EscuelasList() {
  const [escuelas, setEscuelas] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET para obtener la lista de escuelas
    fetch('http://localhost:3002/api/escuelas')
      .then(response => response.json())
      .then(data => {
        setEscuelas(data); // Almacenar los datos en el estado local
      })
      .catch(error => {
        console.error('Error al obtener la lista de escuelas:', error);
      });
  }, []); // El segundo argumento vacío [] indica que este efecto se ejecutará una sola vez

  return (
    <div>
      <h1>Lista de Escuelas</h1>
      <ul>
        {escuelas.map(escuela => (
          <li key={escuela.id}>{escuela.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default EscuelasList;
