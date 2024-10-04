import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Default from "./pages/Default";
import Producto from './pages/Producto';
import ProductoDetalles from './pages/ProductoDetalles';

function App() {
  return (
    <div>
      <h1>Home</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='nosotros' element = {<Nosotros/>}/>
          <Route path='contacto' element = {<Contacto/>}/>
            <Route path='producto' element = {<Producto/>}/>
            <Route path='producto/:id' element = {<ProductoDetalles/>}/>
          <Route path='*' element = {<Default/>}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
