import { Link } from "react-router-dom";

const Producto = () => {
    return <nav>
        <ul>
            <li>
                <Link to="/producto/1">Servicio Basico</Link>
            </li>
            <li>
                <Link to="/producto/2">Servicio Medio</Link>
            </li>
            <li>
                <Link to="/producto/3">Servicio Premium</Link>
            </li>
        </ul>
    </nav>;
}

export default Producto;
