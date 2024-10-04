import {Outlet, Link} from "react-router-dom";
import './EstiloHome.css';

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="/producto">Servicios</Link>
                </li>                
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
        <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/cine.batanga.com/files/Los-15-mejores-logos-de-equipos-y-empresas-ficticias-en-el-cine-4.png" alt="Imagen de la empresa" />
        <p> Bienvenidos a Monstaers Inc. </p>
        <p>20 años de experiencia en sustos</p>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;
