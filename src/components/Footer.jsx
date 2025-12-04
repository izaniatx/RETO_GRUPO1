import React from 'react';
import './css/Footer.css';
import logo from "../assets/logo.png";

function Footer() {
    return (    
<footer className="mt-auto">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-3">
        <h5>About Us</h5>
        <img id="footer-logo"
          src={logo}
          alt="Logo"
          style={{ height: "60px" }}
          className="me-3"
        />
      </div>
      <div className="col-md-4 mb-3">
        <h5 id="quick">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a id="links" href="#" className="text-decoration-none text-white">Home</a></li>
          <li><a id="links" href="#" className="text-decoration-none text-white">Services</a></li>
          <li><a id="links" href="#" className="text-decoration-none text-white">Contact</a></li>
        </ul>
      </div>
      <div className="col-md-4 mb-3">
        <h5>Follow Us</h5>
        <ul className="list-inline social-icons">
          <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-facebook"></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-instagram"></i></a></li>
        </ul>
      </div>
    </div>
    <hr className="mb-4"/>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>&copy; 2025 Aro Automocion. Derechos reservados.</p>
      </div>
    </div>
  </div>
</footer>
    )
} 

export default Footer;