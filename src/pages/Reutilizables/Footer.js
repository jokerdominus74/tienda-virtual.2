import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
          <div className="row pt-5">
            <div className="col-lg-4 col-md-12 mb-5">
              <h1 className="mb-3 display-5 text-capitalize font-italic text-white">
                <span className="text-black">TIENDA</span>VIRTUAL.BLUE
              </h1>
              <p className="m-0">TiendaVirtual.blue: Más que Compras, una Revolución Innovadora</p>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <h5 className="text-primary mb-4">Enlaces rápidos</h5>
                </div>
                <div className="col-md-4 mb-5">
                  <h5 className="text-primary mb-4">Enlaces populares</h5>
                  <div className="d-flex flex-column justify-content-start">
                    <Link className="text-white mb-2" to="/home"><i className="fa fa-angle-right mr-2"></i>INICIO</Link>
                    <Link className="text-white mb-2" to="/sobre-nosotros"><i className="fa fa-angle-right mr-2"></i>SOBRE NOSOTROS</Link>
                    <Link className="text-white mb-2" to="/nuestros-servicios"><i className="fa fa-angle-right mr-2"></i>NUESTROS SERVICIOS</Link>
                    <Link className="text-white" to="/contacta-con-nosotros"><i className="fa fa-angle-right mr-2"></i>CONTACTA CON NOSOTROS</Link>
                  </div>
                </div>
                <div className="col-md-4 mb-5">
                  <h5 className="text-white mb-4">Ponerse en contacto</h5>
                  <p><i className="fa fa-map-marker-alt mr-2"></i>Calle # 44 - 120 Alpujarra</p>
                  <p><i className="fa fa-phone-alt mr-2"></i>3506440319</p>
                  <p><i className="fa fa-envelope mr-2"></i>jorge.uribe@gmail.com</p>
                  <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0 text-black">
                <a className="text-black" href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="nav d-inline-flex">
                <li className="nav-item">
                  <Link className="nav-link text-white py-0" to="/privacidad">Privacidad</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white py-0" to="/terminos">Términos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white py-0" to="/faq">Preguntas frecuentes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white py-0" to="/ayuda">Ayuda</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-light border-top py-4" style={{ borderColor: 'rgba(256, 256, 256, 0.15)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">
                  &copy; <Link to="/">Tienda virtual.blue</Link> Todos los derechos reservados.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <p className="m-0 text-white">
                  Diseñada por <a href="https://htmlcodex.com" className="text-primary">TIENDA VIRTUAL.BLUE</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
