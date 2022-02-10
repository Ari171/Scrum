import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      

      <div className="tabla">
        <h1>Producto integrador.</h1>
        <h2>Primer sprint:</h2>
            <h3>C-01</h3>
        <p>*Ingresar información de datos de usuarios vigentes.<br></br>
           inicio: 8 de Febrero.</p>

        <p>*Tomar datos biométricos de los usuarios. <br></br>
          inicio: 11 de Febrero.</p>

            <h3>C-02</h3>
        <p>*Crear interfaz de venta que actualice el tiempo de vigencia del socio.</p>
        <p>*Crear interfaz de hora de entrada y salida y fecha de vencimiento de membresía.</p>
        <h2>Segundo sprint:</h2>
            <h3>C-03</h3>
        <p> 1.Testing entrada y salida.<br></br>
            2.Modificación de fallas.<br></br>
            3.Segundo Testing.</p>
            <h3>C-04</h3>
        <p>Crear una red empresarial, apoyado de un sistema con interconexión entre todas las sucursales existentes.</p>
            <h3>C-05</h3>
        <p>*Inspeccionar Ciberseguridad.</p>
        <p>*Crear acuerdos de confidencialidad del cliente.</p>

      </div>
    );
  }
}

export default App;