import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DepositList from '../../Components/DepositList/DepositList';
import { EmployeeContext } from '../../Services/EmployeeContext';
import './DepositSummary.css';

export default function DepositSummary() {
  const { employees, depositsHistory } = useContext(EmployeeContext);

  const employeeNumber = depositsHistory?.[0]?.id.split('-')[0];
  const found = employees.find((item) => item.number === employeeNumber);
  return (
    <div className="deposit-summary">
      <h2 className="deposit-summary__title">
        {found
          ? `Depósitos realizados a ${found.name}`
          : 'Aun no hay depósitos'}
      </h2>
      <Link
        className="deposit-summary__goBack"
        to="/registered"
      >
        Volver
      </Link>
      <DepositList />
    </div>
  );
}
