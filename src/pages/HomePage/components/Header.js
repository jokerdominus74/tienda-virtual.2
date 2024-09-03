import React from 'react';

const Header = () => {
  return (
    <header>
      <section>
        <div className="container-fluid">
          <div className="row bg-primary py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left">
              <div className="d-inline-flex align-items-center">
                <p className="mr-2 mb-2 mb-lg-0 text-white">Horario de apertura sedes:</p>
                <span className="mb-2 mb-lg-0 text-white">8.00AM - 9.00PM</span>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <p className="m-0 mr-1 text-white">Síganos:</p>
                <a className="text-white px-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-white px-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-white px-2" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-white px-2" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-white px-2" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row py-3 px-lg-5">
            <div className="col-lg-4">
              <a href="#" className="navbar-brand d-none d-lg-block">
                <h1 className="m-0 display-5 text-capitalize font-italic">
                  <span className="text-primary">Tienda</span>virtual.BLUE
                </h1>
              </a>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <div className="d-inline-flex flex-column text-center pr-3 border-right">
                  <h6>Nuestra oficina</h6>
                  <p className="m-0">Calle 44 # 52 - 120</p>
                </div>
                <div className="d-inline-flex flex-column text-center px-3 border-right">
                  <h6>Email</h6>
                  <p className="m-0">jorge.uribe11280@gmail.com</p>
                </div>
                <div className="d-inline-flex flex-column text-center pl-3">
                  <h6>Llámanos</h6>
                  <p className="m-0">3506440319</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;


