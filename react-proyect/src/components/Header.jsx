import logo from "../assets/logo.png";
import CustomButton from "./CustomButton";
import "./css/Header.css";
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <nav id="header-container" className="custom-header navbar navbar-expand-lg shadow-sm p-3" >
      <div className="container" style={{minWidth: "80vw"}} >

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px"}}
            className="me-3"
          />
        </a>

        {/* BOTÓN MÓVIL */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ENLACES */}
        <div className="collapse navbar-collapse" style={{marginRight: "50px"}}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/inicio">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catalogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vende-tu-coche">Vende Tu Coche</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/DondeEncontrarnos">Donde Encontrarnos</Link>
            </li>
          </ul>

          
        </div>

        <CustomButton className="ms-3" onClick={() => alert("¡Log In!")}>
            Log In
          </CustomButton>

      </div>
    </nav>
  );
}
