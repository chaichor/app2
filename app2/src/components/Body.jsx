import React from 'react';
import './Body.css'; // Asegúrate de tener este archivo de estilos

function Body({ children }) {
  return (
    <div className="body-container">
      {children}
    </div>
  );
}

export default Body;