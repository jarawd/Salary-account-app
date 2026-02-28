import React, { useContext } from 'react';
import Deposit from '../Deposit/Deposit';
import { EmployeeContext } from '../../Services/EmployeeContext';
import './DepositList.css';

export default function DepositList() {
  const { depositsHistory } = useContext(EmployeeContext);

  return (
    <div className="deposits-list">
      {depositsHistory.map((item) => (
        <Deposit
          key={item.id}
          date={item.date}
          amount={item.amount}
          week={item.week}
        />
      ))}
    </div>
  );
}
