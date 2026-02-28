import React, { useContext } from 'react';
import EmployeesList from '../../Components/EmployeeList/EmployeesList';
import { EmployeeContext } from '../../Services/EmployeeContext';
import './Registered.css';

export default function Registered() {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="registered">
      <h2 className="registered__title">
        {employees.length === 0
          ? 'Aun no hay empleados registrados'
          : 'Empleados registrados'}
      </h2>
      <EmployeesList />
    </div>
  );
}
