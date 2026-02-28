import React from 'react';
import './Deposit.css';

export default function Deposit({ date, amount, week }) {
  return (
    <div className="deposit">
      <p className="deposit__item">
        Monto:
        <span className="deposit__item-info deposit__item-info_amount">
          {' '}
          ${amount}
        </span>
      </p>
      <p className="deposit__item">
        Fecha:
        <span className="deposit__item-info"> {date}</span>
      </p>
      <p className="deposit__item">
        Semana:
        <span className="deposit__item-info"> {week}</span>
      </p>
    </div>
  );
}
