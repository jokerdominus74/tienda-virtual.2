import React from 'react';

const ButtonGroup = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-15 text-center">
            <button type="button" className="btn btn-dark" id="todoBtn">TODO</button>
            <button type="button" className="btn btn-dark" id="ofertasBtn">OFERTAS DEL DÍA</button>
            <button type="button" className="btn btn-dark" id="listasBtn">LISTAS</button>
            <button type="button" className="btn btn-dark" id="referidosBtn">REFERIDOS</button>
            <button type="button" className="btn btn-dark" id="servicioBtn">SERVICIO AL CLIENTE</button>
            <button type="button" className="btn btn-dark" id="venderBtn">VENDER</button>
            <button type="button" className="btn btn-dark" id="nuevoNegocioBtn">NUEVO NEGOCIO</button>
            <button type="button" className="btn btn-dark" id="nuevosProductosBtn">NUEVOS PRODUCTOS</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtonGroup;
