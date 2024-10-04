import React from 'react';
import Empleado from './ComponenteEmpleado';

const Nosotros = () => {
  return (
    <div>
      <h2>Sobre Nosotros</h2>
      <p>Conoce a nuestro equipo.</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Empleado nombre="Juan Pérez" cargo="Gerente General" descripcion="Responsable de dirigir la empresa." />
        <Empleado nombre="María González" cargo="Jefa de Marketing" descripcion="Encargada de las estrategias de marketing." />
        <Empleado nombre="Carlos Díaz" cargo="Desarrollador Senior" descripcion="Especialista en desarrollo web." />
        <Empleado nombre="Laura Romero" cargo="Coordinadora de Proyectos" descripcion="Gestión de proyectos clave para la empresa." />
      </div>
    </div>
  );
};

export default Nosotros;
