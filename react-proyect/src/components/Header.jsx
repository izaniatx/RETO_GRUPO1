import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";
import loginIm from "../assets/loginImg.png";

export default function Header() {

  // Función de ejemplo para el futuro onClick
  const handleBotonClick = () => {
    // Aquí puedes poner la acción que quieras
    console.log("Botón clickeado!");
  };

  return (
    <nav className="custom-header navbar navbar-expand-lg shadow-sm p-3">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "60px" }}
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios">Catalogo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Vende tu coche</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DondeEncontrarnos">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DondeEncontrarnos">Donde Encontrarnos</a>
            </li>
          </ul>

          {/* IMAGEN-BOTÓN VISUAL */}
          <div className="ms-3 d-flex align-items-center">
            <img
              src={loginIm}
              alt="Botón"
              style={{
                height: "45px",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "transform 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
              onClick={handleBotonClick} // Aquí se puede añadir la acción más adelante
            />
          </div>
        </div>

      </div>
    </nav>
  );
}