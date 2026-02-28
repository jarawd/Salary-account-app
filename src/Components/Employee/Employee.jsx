import React, { useContext } from 'react';
import './Employee.css';
import { EmployeeContext } from '../../Services/EmployeeContext';
import { useNavigate } from 'react-router-dom';

export default function Employee({
  id,
  name,
  number,
  date,
  department,
  depositsQty,
}) {
  const { showRemovePopup, employeeDeposits } = useContext(EmployeeContext);
  const navigate = useNavigate();

  function handleHistory() {
    employeeDeposits(id);
    navigate('/deposits-summary');
  }

  return (
    <div className="employee">
      <p className="employee__tag-info">
        Nombre del empleado:{' '}
        <span className="employee__data-info employee__data-info_name">
          {name}
        </span>
      </p>
      <p className="employee__tag-info">
        Número:{' '}
        <span className="employee__data-info employee__data-info_number">
          {number}
        </span>
      </p>
      <p className="employee__tag-info">
        Fecha de ingreso: <span className="employee__data-info">{date}</span>
      </p>
      <p className="employee__tag-info">
        Departamento: <span className="employee__data-info">{department}</span>
      </p>
      <div className="employee__deposits-info-container">
        <p className="employee__tag-info">Depósitos:</p>
        <span className="employee__data-info">{depositsQty}</span>
        <button
          className="employee__btn employee__btn_history"
          onClick={handleHistory}
        >
          Ver historial
        </button>
      </div>
      <button
        className="employee__btn"
        onClick={() => showRemovePopup(id)}
      >
        Eliminar
      </button>
    </div>
  );
}
