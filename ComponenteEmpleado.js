import React from 'react';
import './EstiloEmpleado.css';

const Empleado = ({ nombre, cargo, descripcion }) => {
  return (
    <div className="empleado">
      <h4>{nombre}</h4>
      <p><strong>Cargo:</strong> {cargo}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
    </div>
  );
};

export default Empleado;
