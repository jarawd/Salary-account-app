import React, { useContext, useState } from 'react';
import './RegisterEmployee.css';
import { getData } from '../../Services/LocalStorage';
import { EmployeeContext } from '../../Services/EmployeeContext';

export default function RegisterEmployee() {
  const { employees, saveNewEmployee, handlePopup } =
    useContext(EmployeeContext);
  const [employeeInfo, setEmployeeInfo] = useState({
    id: generateID(),
    number: generateEmployeeNumber(),
    name: '',
    department: '',
    date: '',
    deposits: [],
  });

  // Generar ID unico para cada registro
  function generateID() {
    const data = getData().employees;
    if (data.length === 0) return 0;
    return Math.max(...data.map((item) => item.id)) + 1;
  }

  // Generar numero de empleado unico
  function generateEmployeeNumber() {
    let number = generateID();
    return number.toString().padStart(4, '1');
  }

  //Funcion para actualizar el valor de los campos en cada cambio de los input
  function handleChange(e) {
    const { name, value } = e.target;
    setEmployeeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function saveEmployee(e) {
    e.preventDefault();
    const found = employees.find((item) => item.name === employeeInfo.name);
    if (!found) {
      saveNewEmployee(employeeInfo); //Se envia la info al padre por medio del contexto
      setEmployeeInfo({
        id: generateID(),
        number: generateEmployeeNumber(),
        name: '',
        department: '',
        date: '',
        deposits: [],
      });
      return;
    }
    handlePopup({
      isOpen: true,
      message: `El nombre de empleado "${employeeInfo.name}" ya existe.`,
    });
  }

  //Fecha de hoy
  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      onSubmit={saveEmployee}
      className="register-employee"
    >
      <label
        className="register-employee__label"
        htmlFor="name"
      >
        Nombre:
      </label>
      <input
        onChange={handleChange}
        name="name"
        value={employeeInfo.name}
        className="register-employee__input"
        id="name"
        type="text"
        required
      />
      <label
        className="register-employee__label"
        htmlFor="department"
      >
        Departamento:
      </label>
      <select
        onChange={handleChange}
        name="department"
        value={employeeInfo.department}
        className="register-employee__select"
        id="department"
      >
        <option
          value="no-selected"
          defaultValue="no-selected"
        >
          Seleccionar
        </option>
        <option value="line-1">Linea 1</option>
        <option value="line-2">Linea 2</option>
        <option value="line-3">Linea 3</option>
        <option value="line-4">Linea 4</option>
      </select>
      <label
        className="register-employee__label"
        htmlFor="date"
      >
        Fecha de ingreso:
      </label>
      <input
        onChange={handleChange}
        name="date"
        value={employeeInfo.date}
        className="register-employee__input"
        id="date"
        type="date"
        max={today}
        required
      />
      <button
        className="register-employee__btn"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}
