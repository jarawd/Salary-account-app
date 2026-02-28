import React from 'react';
import './Home.css';
import RegisterDeposit from '../../Components/RegisterDeposit/RegisterDeposit';
import RegisterEmployee from '../../Components/RegisterEmployee/RegisterEmployee';

export default function Home() {
  return (
    <div className="home">
      <section className="form-container">
        <p className="form-title">Registrar nuevo empleado</p>
        <RegisterEmployee />
      </section>
      <section className="form-container">
        <p className="form-title">Realizar un depósito</p>
        <RegisterDeposit />
      </section>
    </div>
  );
}
