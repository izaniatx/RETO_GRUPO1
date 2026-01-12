
import CustomButton from "./CustomButton";
import "./css/Header.css";
import '../../css/app.css';
import { Link } from '@inertiajs/react';
import LoginModal from "./LoginModal";
import "./css/Catalogo.css";
import React from "react";

export default function Header() {
  return (
    <nav id="header-container" className="custom-header navbar navbar-expand-lg shadow-sm p-3">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={'./assets/logo.png'}
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
              Inicio
              <Link className="nav-link" href="/inicio"></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/catalogo">Catalogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/vende-tu-coche">Vende Tu Coche</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/DondeEncontrarnos">Dónde Encontrarnos</Link>
            </li>
          </ul>

          
        </div>
        <CustomButton className="ms-3 btn-login hover-pers active-pers"
        data-bs-toggle="modal" data-bs-target="#loginModal" onClick={undefined}        >
          Iniciar Sesión
        </CustomButton>
        <LoginModal />
      </div>
    </nav>
  );
}
