import React, { useContext } from 'react';
import Employee from '../Employee/Employee';
import './EmployeesList.css';
import { EmployeeContext } from '../../Services/EmployeeContext';

export default function EmployeesList() {
  const { employees } = useContext(EmployeeContext);
  return (
    <div className="employees-list">
      {employees.map((item) => {
        return (
          <Employee
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
            date={item.date}
            department={item.department}
            depositsQty={item.deposits.length}
          />
        );
      })}
    </div>
  );
}
