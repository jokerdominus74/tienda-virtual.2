import React from 'react';
import Footer from '../Reutilizables/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ButtonGroup from './components/ButtonGroup';
import TiendaVirtual from './components/Tiendavirtual';
import ProductCarousel from './components/ProductCarousel';
import './Home.css';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ButtonGroup />
      <Carousel />
      <section>
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
              TIENDA VIRTUAL.BLUE
            </div>
          </div>
          <div className="diff-item-2">
            <div className="bg-base-900 text-9xl font-black grid place-content-center">
              TIENDA VIRTUAL.BLUE
            </div>
          </div>
        </div>
      </section>
      <TiendaVirtual />
      <ProductCarousel />
      <Footer />
    </div>
  );
};

export default Home;
