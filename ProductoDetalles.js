import React from 'react';
import { useParams } from 'react-router-dom';

const Producto = () => {
  const { id } = useParams();

  const productos = {
    1: { nombre: "Servicio Basico", precio: "$10", descripcion: "Descripción del Servicio: 2 Asustadores junior" , tiempo: "Teimpo total: 30 minutos", imagen: "https://m.media-amazon.com/images/I/41+j6VWEDwL._AC_UF350,350_QL50_.jpg"},
    2: { nombre: "Servicio Medio", precio: "$20", descripcion: "Descripción del Servicio: 2 Asustador semi senior + 1 Asustador junior", tiempo: "Teimpo total: 45 minutos" , imagen: "https://static.wikia.nocookie.net/disney/images/3/39/George_Sanderson.png"},
    3: { nombre: "Servicio Premium", precio: "$40", descripcion: "Descripción del Servicio: 2 Asustadores senior", tiempo: "Tiempo total: 1 Hora" , imagen: "https://static.wikia.nocookie.net/pixar/images/0/04/Sully_Monsters_University.jpg"}
  };    
  
  const producto = productos[id];
  
  if (!producto) {
    return <h1>Servicio no encontrado</h1>;
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: {producto.precio}</p>
      <p>{producto.descripcion}</p>
      <p>{producto.tiempo}</p>
      <img src={producto.imagen} alt={producto.nombre} style={{ width: '300px', height: 'auto', borderRadius: '8px' }}/>
    </div>
  );
};

export default Producto;
