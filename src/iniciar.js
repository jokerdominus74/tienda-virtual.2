// Iniciar.js
import React, { useEffect } from 'react';
import axios from 'axios';
import Home from './pages/HomePage/Home';

const Iniciar = () => {
  useEffect(() => {
    axios.get('http://localhost:7587/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request!', error);
      });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default Iniciar;
