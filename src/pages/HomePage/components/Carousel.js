import React from 'react';

const Carousel = () => {
  return (
    <section className='carusel'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/tienda%20virtual.jpg?alt=media&token=a41f890b-a903-4f52-a8a5-a77b05abe1b2" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>TIENDA VIRTUAL.BLUE</h5>
              <p>SOMOS EL MEJOR COMERCIO ELECTRONICO.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/tienda%20virtual%202.jpg?alt=media&token=c9dac043-e73e-43cf-8de9-23b9715787c3" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>TIENDA VIRTUAL.BLUE</h5>
              <p>SOMOS EL MEJOR COMERCIO ELECTRONICO.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-e192b.appspot.com/o/tienda%20virtual%2011.4.jpg?alt=media&token=10ca3df2-90cd-4f41-9e65-5deb2252baae" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>TIENDA VIRTUAL.BLUE</h5>
              <p>SOMOS EL MEJOR COMERCIO ELECTRONICO</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Carousel;
