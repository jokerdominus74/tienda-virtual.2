import React from 'react';

const ProductCarousel = () => {
  return (
    <section>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-15">
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/celulares.jpg?alt=media&token=66c08947-13b5-4e5e-8c27-c0a80aa36ee9" className="d-block w-100" alt="Product 1"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>CELULARES</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/laptops.jpg?alt=media&token=b4812e44-90a2-4b2e-8c86-eaf5c16247db" className="d-block w-100" alt="Product 2"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>PORTATILES</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/televisores.jpg?alt=media&token=0379cf24-7fdc-4a1d-bb9a-c855c970ff62" className="d-block w-100" alt="Product 3"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>TELEVISORES</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-15">
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/celulares.jpg?alt=media&token=66c08947-13b5-4e5e-8c27-c0a80aa36ee9" className="d-block w-100" alt="Product 1"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>CELULARES</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/laptops.jpg?alt=media&token=b4812e44-90a2-4b2e-8c86-eaf5c16247db" className="d-block w-100" alt="Product 2"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>PORTATILES</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/televisores.jpg?alt=media&token=0379cf24-7fdc-4a1d-bb9a-c855c970ff62" className="d-block w-100" alt="Product 3"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>TELEVISORES</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-15">
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/celulares.jpg?alt=media&token=66c08947-13b5-4e5e-8c27-c0a80aa36ee9" className="d-block w-100" alt="Product 1"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>CELULARES</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/laptops.jpg?alt=media&token=b4812e44-90a2-4b2e-8c86-eaf5c16247db" className="d-block w-100" alt="Product 2"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>PORTATILES</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/televisores.jpg?alt=media&token=0379cf24-7fdc-4a1d-bb9a-c855c970ff62" className="d-block w-100" alt="Product 3"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>TELEVISORES</h5>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCarousel;
